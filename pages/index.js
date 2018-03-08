import React from 'react';
import fetch from 'isomorphic-unfetch';

import List from '../components/List';
import Theme from '../components/Theme';
import AppBar from '../components/AppBar';
import Menu from '../components/Menu';

import css from '../styles/css';
import { reduxOf, dispatchList, dispatchTitle } from '../store';
import Cheerio from 'cheerio';

const styles = {
    container: {
        margin: '0',
        paddingLeft: 280,
        paddingRight: '20px',
        paddingTop: '15px'
    }
};

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps({ store, isServer, pathname, query }) {
        const items = [];
        const res = await fetch(`https://hh.ru/search/vacancy?text=&area=1`);
        const text = await res.text();
        const $ = Cheerio.load(text);

        const title = $('.breadcrumbs').next();
        title.find('.header__minor').remove();

        $('.vacancy-serp-item').each(function(i, elem) {
            items.push({
                title: $(this).find('.vacancy-serp-item__title').text(),
                info: $(this).find('.vacancy-serp-item__info').text(),
                meta: $(this).find('.vacancy-serp-item__meta-info').text(),
            });
        });

        store.dispatch(dispatchTitle(title.text()));
        store.dispatch(dispatchList(items));

        return isServer;
    }

    render() {
        return (
            <Theme>
                <div>
                    <AppBar />
                    <Menu />
                    <main style={styles.container}>
                        <List />
                    </main>
                </div>
            </Theme>
        )
    }
}

Index = reduxOf(Index);
export default Index;
import React from 'react';
import { connect } from 'react-redux';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
import Avatar from 'material-ui/svg-icons/social/people';
import Drawer from 'material-ui/Drawer';
import { Card, CardActions, CardHeader, CardText, CardMedia, CardTitle } from 'material-ui/Card';

class Menu extends React.Component {

    render () {
        return (
            <Drawer variant="permanent" open>
                <CardHeader
                    title="Вакансии"
                    subtitle="Работа найдется для каждого"
                    avatar={<Avatar />}
                    titleStyle={{fontSize:'22px'}}
                />
                <CardText>
                    Удобнее всего искать работу с помощью нашего каталога вакансий: всего пару раз кликнув мышкой,
                    вы получите список актуальных и качественных вакансий в Москве или другом регионе России
                </CardText>
                <List>
                    <ListItem primaryText="All" leftIcon={<ContentInbox />} />
                    <ListItem primaryText="Saved" leftIcon={<ActionGrade />} />
                    <ListItem primaryText="Messages" leftIcon={<ContentSend />} />
                </List>
            </Drawer>
        )
    }
}

export default connect(state => state)(Menu);
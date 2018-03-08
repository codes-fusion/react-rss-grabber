import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

const styles = {
    toolbarStyle: {
        margin: '0',
        paddingLeft: 280
    },
};

class AppBarLayout extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.title !== nextProps.title;
    }

    render () {
        return (
            <AppBar
                showMenuIconButton={false}
                style={styles.toolbarStyle}
                title={this.props.title} />
        )
    }
}

export default connect(state => state)(AppBarLayout);
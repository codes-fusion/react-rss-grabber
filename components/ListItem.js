import React from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Info from 'material-ui/svg-icons/action/info-outline';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    card: {
        marginTop: '10px',
        marginBottom: '10px',
    }
};

class ListItem extends React.Component {

    onSaveClick = () => {
        this.props.onItemClick(this.props.item, { snack: true })
    };

    onMoreClick = () => {
        this.props.onItemClick(this.props.item, { open: true })
    };

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.item !== nextProps.item;
    }

    render () {
        return (
            <Card style={styles.card}>
                <CardHeader
                    title={this.props.item.title}
                    subtitle={this.props.item.meta}
                    titleStyle={{fontSize: '18px'}}
                    actAsExpander={true}
                    showExpandableButton={true} />

                <CardText expandable={true}>
                    {this.props.item.info}
                </CardText>

                <CardActions>
                    <FlatButton
                        icon={<ActionGrade />}
                        primary={true} label="Save"
                        labelStyle={{fontSize: '12px'}}
                        onClick={this.onSaveClick} />

                    <FlatButton
                        icon={<Info />}
                        primary={true}
                        label="More"
                        labelStyle={{fontSize: '12px'}}
                        onClick={this.onMoreClick} />

                </CardActions>
            </Card>
        )
    }
}

export default connect(state => state)(ListItem);
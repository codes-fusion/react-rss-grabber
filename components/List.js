import React from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Info from 'material-ui/svg-icons/action/info-outline';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import ListItem from './ListItem';

class List extends React.Component {
    state = {
        open: false,
        selected: null,
        snack: false,
    };

    handleItem = (data, state) => {
        this.setState(Object.assign(state, {selected: data}));
    };

    handleDialogClose = () => {
        this.setState({ open: false });
    };

    handleSnackClose = () => {
        this.setState({ snack: false });
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }

        if (this.props.items !== nextProps.items) {
            return true;
        }

        return false;
    }

    render () {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleDialogClose}
            />,
        ];

        let dialogContent = <CircularProgress />;
        let dialogTitle = 'Loading...';
        if (this.state.selected) {
            dialogTitle = this.state.selected.title;
            dialogContent = (<div>{this.state.selected.info}</div>)
        }

        return (
            <div>
                {this.props.items.map((item, i) => (
                    <ListItem
                        key={i}
                        item={item}
                        onItemClick={this.handleItem} />
                ))}

                <Dialog
                    title={dialogTitle}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleDialogClose}
                    autoScrollBodyContent={true}>
                    {dialogContent}
                </Dialog>

                <Snackbar
                    open={this.state.snack}
                    message="Item has been saved"
                    autoHideDuration={2000}
                    onRequestClose={this.handleSnackClose} />
            </div>
        )
    }
}

export default connect(state => state)(List);
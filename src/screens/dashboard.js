import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { getUserAction } from "../actions/userAction";
import { withRouter } from "react-router";
import { Board } from '../components/board';
import { lightColors, darkColors , Button, Link } from 'react-floating-action-button'

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boards: [
                { name: 'Hirings', summary: 'To get a view of where we are placed in hiring at the moment.', collectionCount: 5, cardCount: 3, createdOn: new Date() },
                { name: 'Leads', summary: 'To get a view of where we are placed in lead management process at the moment.', collectionCount: 5, cardCount: 3, createdOn: new Date() },
                { name: 'About Me', summary: 'To describe more about this excercise.', collectionCount: 5, cardCount: 3, createdOn: new Date() },
            ]
        }
    }

    onEnterAsGuestClicked = (event) => {
    };

    onBoardClicked = (e, board) => {
        console.log('OnBoardClicked', e);
        this.props.history.push(`/home/${board.name}`);
    };

    render() {
        return (
            <div>
                <ListGroup horizontal variant='flush'>
                    {
                        this.state.boards.map(b => 
                            <ListGroup.Item>
                                <Board board={b} onBoardClicked={this.onBoardClicked} />
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
                <Button
                    tooltip="Click to create a new board."
                    icon="fas fa-plus"
                    rotate={true}
                    onClick={() => alert('Implement Create board API.')} >
                +
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};


export default connect(mapStateToProps, { getUserAction })(withRouter(DashboardPage));
import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getUserAction } from "../actions/userAction";
import { withRouter } from "react-router";
import { BoardCard } from '../components/board';

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boards: [
                { name: 'Project-A', collectionCount: 5, cardCount: 3, createdOn: new Date() },
                { name: 'Project-B', collectionCount: 5, cardCount: 3, createdOn: new Date() },
                { name: 'Project-C', collectionCount: 5, cardCount: 3, createdOn: new Date() },
            ]
        }
    }


    componentDidMount() {
    }

    onEnterAsGuestClicked = (event) => {
    };

    componentWillReceiveProps(nextProps) {
       
    };

    onBoardClicked = (e, board) => {
        console.log('OnBoardClicked', e);
        this.props.history.push(`/home/${board.name}`);
    };

    render() {
        return (
            <Row>
                {
                    this.state.boards.map(b => <BoardCard board={b} onBoardClicked={this.onBoardClicked}/>)
                }
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};


export default connect(mapStateToProps, { getUserAction })(withRouter(DashboardPage));
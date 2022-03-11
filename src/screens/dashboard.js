import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import SweetAlert from 'react-bootstrap-sweetalert';
import { connect } from "react-redux";
// import {AddDashboard } from "../actions/userAction";
import { withRouter } from "react-router";
import { Board } from '../components/board';
import { lightColors, darkColors, Button, Link } from 'react-floating-action-button'

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boards: []
        }
    }

    onEnterAsGuestClicked = (event) => {
    };

    onBoardClicked = (e, board) => {
        console.log('OnBoardClicked', e);
        this.props.history.push(`/home/${board.name}`);
    };

    render() {
        const dData = this.props.dashboard.dashboardData;
        const isLoading = this.props.dashboard.isLoading;
        // console.log("api data....$$$$$....",this.props.dashboard.isLoading)
        return (
            <div>
                <center style={{ 'marginTop': '30px' }}>  {
                    isLoading ?
                        <div><Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner></div> : null
                }</center>


                <ListGroup horizontal variant='flush'>
                    {
                        dData &&
                        dData.map(b =>
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
        user: state.user,
        dashboard: state.dashboardReducer
    }
};


export default connect(mapStateToProps, 
    // {AddDashboard }
    )(withRouter(DashboardPage));
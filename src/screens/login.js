import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import { connect } from "react-redux";
import {loginAction } from "../actions/userAction";
import { getDashboardAction } from "../actions/dashboardAction"
import { withRouter } from "react-router";

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            user: props.user
        }
        this.ticker = null;
        // console.log("props data ",props)
    }

    updateDateTime = () => {
        this.setState(prevState => ({ ...prevState, date: new Date() }))
    };

    componentDidMount() {
        this.ticker = setInterval(() => this.updateDateTime(), 1000);
    }

    login = () => {
        this.props.loginAction(this.state.user.username, this.state.user.password);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.isAuthenticated) {
            // move to next page
            clearInterval(this.ticker);
            // let naviagte = useNavigate();
            // naviagte("/home")
            this.props.getDashboardAction();
            nextProps.history.push('/home');
            // window.location.href='/home'
        } else {
            // update this page.
            // console.log("err",nextProps.user.error.errorMsg)
            this.setState({ user: nextProps.user });
        }
    }
    render() {
        // console.log(this.props.user.error)
        const showError = this.props.user.error.hasError
        const isLoading = this.props.user.isLoading
        // console.log(showError)
        return (<div>
            <center style={{ 'marginTop': '30px' }}>  {
                isLoading ?
                    <div><Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner></div> : null
            }</center>

            {showError == true ?
                <center style={{ color: 'red' }}>something went wrong please try again</center>
                : null}
            <div className="Login">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter UserName</Form.Label>
                        <Form.Control type="text" onChange={(e) => {
                            this.setState({
                                user: {
                                    ...this.state.user,
                                    username: e.target.value
                                }
                            });
                        }} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => {
                            this.setState({
                                user: {
                                    ...this.state.user,
                                    password: e.target.value
                                }
                            });
                        }} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={(e) => this.login(e)}>
                        Login
                    </Button>
                </Form>
            </div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps,
    {loginAction, getDashboardAction, })(withRouter(LandingPage));
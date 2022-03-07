import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getUserAction, loginAction } from "../actions/userAction";
import { withRouter } from "react-router";

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            user: props.user
        }
        this.ticker = null;
    }
    
    updateDateTime = () => {
        this.setState(prevState => ({ ...prevState, date: new Date() }))
    };

    // componentDidMount() {
    //     this.ticker = setInterval(() => this.updateDateTime(), 1000);
    // }

    onEnterAsGuestClicked = (event) => {
        const data = { name: 'Guest' };
        this.props.getUserAction(data)
    };

    login = () => {
        this.props.loginAction(this.state.user.username, this.state.user.password);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.isAuthenticated) {
            // move to next page
            clearInterval(this.ticker);
            // let naviagte = useNavigate();
            // naviagte("/home")
            nextProps.history.push('/home');
            // window.location.href='/home'
        }else{
            // update this page.
            console.log("err",nextProps.user.error.errorMsg)
            this.setState({ user: nextProps.user });
        }
    }
    render() {
    // console.log(this.props.user.error)
    const showError = this.props.user.error.hasError
    console.log(showError)
        return (<div>
             {showError == true? 
             <center style={{color:'red'}}>something went wrong please try again</center> 
             :null}
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


export default connect(mapStateToProps, { getUserAction, loginAction })(withRouter(LandingPage));
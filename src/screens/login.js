import React from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { getUserAction } from "../actions/userAction";
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

    componentDidMount() {
        this.ticker = setInterval(() => this.updateDateTime(), 1000);
    }

    onEnterAsGuestClicked = (event) => {
        const data = { name: 'Guest' };
        this.props.getUserAction(data)
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.isAuthenticated) {
            // move to next page
            clearInterval(this.ticker);
            // let naviagte = useNavigate();
            // naviagte("/home");
            nextProps.history.push('/home');
            // window.location.href='/home'
        }else{
            // update this page.
            this.setState({ user: nextProps.user });
        }
    }

    render() {
        return (
            <div className="Login">
                <div>
                    {
                        this.props.user.isLoading ? <h2> Loading</h2>: <br/>
                    }
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email addresses</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => this.onEnterAsGuestClicked(e)}>
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => ({

});


export default connect(
    mapStateToProps, { getUserAction }
    )
    (withRouter(LandingPage));
import React from "react";
import { Button, Row, Col } from "react-bootstrap";
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
            <Row>
                <Col>
                    <Button variant="secondary" 
                            onClick={e => this.onEnterAsGuestClicked(e)}
                    >Enter as Guest Login</Button>
                </Col>
                <Col>
                    { this.state.date.toISOString() }
                    { this.state.user.name }
                </Col>
            </Row>
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


export default connect(mapStateToProps, { getUserAction })(withRouter(LandingPage));
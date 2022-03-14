import React, { Component } from 'react'
import { Button, Row, Col, Form } from "react-bootstrap";
import { connect } from 'react-redux'
import {AddDashboard} from '../actions/dashboardAction'

export class AddBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dashboard: props.dashboard
        }
    }

   
    addDATA = () => {
        this.props.AddDashboard(this.state.dashboard.title, this.state.dashboard.description);
        // console.log("data is___________",this.state.dashboard.title)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.dashboard.AddDashBoard) {
            // move to next page
            clearInterval(this.ticker);
            // let naviagte = useNavigate();
            // naviagte("/home")
            nextProps.history.push('/home');
            // window.location.href='/home'
        } else {
            // update this page.
            // console.log("err",nextProps.user.error.errorMsg)
            this.setState({ dashboard: nextProps.dashboard });
        }
    }

    render()
    {
        // console.log("state calling=======",this.state)

        return (
            <div>
                <h1>Add DashBoard Data</h1>
                <div className="Login">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dashboard Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Dashboard Title" 
                          onChange={(e) => {
                            this.setState({
                                dashboard : {
                                    ...this.state.dashboard,
                                    title: e.target.value
                                }
                            });
                        }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Dashboard Description</Form.Label>
                            <Form.Control type="text" placeholder="Dashboard Description" 
                               onChange={(e) => {
                                this.setState({
                                    dashboard : {
                                        ...this.state.dashboard,
                                        description: e.target.value
                                    }
                                });
                            }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={(e) => this.addDATA(e)} >
                            Add Data
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboardReducer
    }
}
const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps,{AddDashboard})(AddBoard)
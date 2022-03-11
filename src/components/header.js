import { Stack } from 'react-bootstrap';
import { connect } from 'react-redux';

const AppHeader = (props) => {
    const isAuthenticated = props.user.isAuthenticated;
    return (
        <div className="fixed-header">
            <Stack gap={3} direction="horizontal" className="container">
                <nav>
                    <a href="/">Trello</a>
                </nav>
              
                    {isAuthenticated==true?
                    <div className="ms-auto">Welcome [ {props.user.name} ]</div> :null}
                    {isAuthenticated==true?
                    <div className="">Logout</div>:null}
               
                
            </Stack>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps) (AppHeader)
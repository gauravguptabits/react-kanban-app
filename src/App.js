import logo from './logo.svg';
import './App.css';
import LoginPage from './screens/login';
import DashboardPage from './screens/dashboard';
import BoardPage from './screens/board';
import  AppHeader  from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <div>
      <AppHeader/>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={ LoginPage }/>
            <Route exact path="/home" component={DashboardPage} />
            <Route path="/home/:boardId" component={BoardPage} />
          </Switch>
        </Router>
      </div>    
      <div className="fixed-footer">
        <div className="container">Copyright &copy; Impressico</div>        
      </div>
    </div>
    );
}

export default App;

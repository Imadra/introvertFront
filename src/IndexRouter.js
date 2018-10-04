import React from 'react';
import { Router, Route, hashHistory, Redirect} from 'react-router';

import Auth from './modules/Auth';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Notfound from './components/Notfound';
//const jwt = require('jsonwebtoken');
//const config = require('../../config');

class IndexRouter extends React.Component{
    
    constructor(props){
        super(props);
        this.state={authorized: null};
    }
    componentWillMount(){
      // axios.get('/api/check',{
      // }).then((res) => {
      //     this.setState({authorized: res.data});
      // });

      setTimeout(() => {this.setState({authorized: true})} , 3000);
    }

    signin(){
      this.setState({authorized: true});
    }

    render(){
      var self = this;
        if (this.state.authorized==true){
            return (
                <div className='fff'>
                    <Router history={hashHistory}>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/" component={Home} />
                        <Route exact path="/*" render={() => <Redirect to='/dashboard' />} />
                    </Router>
                </div>
            );
        } else if (this.state.authorized==false){
            return (
                <div>
                    <Router history={hashHistory}>
                        <Route path="/signin" component={()=> <SignIn signin={this.signin.bind(self)} />} /> 
                        <Route path="/" component={Home} />
                        <Route path="/*" component={() => <Redirect to='/home' />} />
                    </Router>
                </div>
            );
        } else {
          return (
            <div>
              <h1>Loading ...</h1>
            </div>
          )
        }
    }
};

export default IndexRouter;

import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.goto = this.goto.bind(this);
	}

  	goto(){
  		this.props.history.push('/');
  	}

  	render() {
	  	var self = this;
	    return (
	      <div className="text-center">
	        <h1>Dashboard Page</h1>
	        <Button  color="danger" onClick={self.goto}>go to home</Button>
	      </div>
	    );
  	}
}

export default Dashboard;

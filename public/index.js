import React from "react"
import ReactDOM, { render } from "react-dom"
import { BrowserRouter as Router, Link, Match } from "react-router";

const Home = props => {
	return(
		<h1>Home!!</h1>
	);
};

const Courses = props => {
	return(
		<div>
			<Match exactly pattern={`${props.pathname}`} 
				render={props=>{
					return(
						<div>
							<h1>All courses</h1>
							<Link to="/courses/html">HTML</Link><br/>
							<Link to="/courses/css">CSS</Link>
						</div>
					);
				}}/>
			<Match pattern={`${props.pathname}/:courseId`} 
				render={props=>{return <h1>{props.params.courseId}</h1>}}/>
		</div>
	);
};

render(
	<Router>
		<div id="wrapper">
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/courses">Courses</Link>
				</nav>
			</header>
			<Match exactly pattern="/" component={Home}/>
			<Match pattern="/courses" component={Courses}/>
		</div>
	</Router>, document.getElementById("root"))
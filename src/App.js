import React from 'react';
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Alert from "./components/Alert";
import AlertState from "./Context/alert/AlertState";
import {GithubState} from "./Context/github/GitHubState";


function App() {
	return (
		<GithubState>
			<AlertState>
				<BrowserRouter>
					<Navbar />
					<div className="container mt-5">
						<Alert alert={{text: 'Test alert'}}/>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" component={About} />
							<Route path="/profile/:name" component={Profile} />
						</Switch>
					</div>
				</BrowserRouter>
			</AlertState>
		</GithubState>
	);
}

export default App;

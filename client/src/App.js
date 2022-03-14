import React from "react";
import MainAppBar from "./MainAppBar";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Dashboard from "./screens/Dashboard";
import Incident from "./screens/Incident";
import Settings from "./screens/Settings";
import AssignedToMe from "./screens/AssignedToMe";
import Incidents from "./screens/Incidents";
import Request from "./screens/Request";
import Requests from "./screens/Requests";
import CreateNew from "./screens/CreateNew";

const App = () => {
	return (
		<Router>
			<MainAppBar>
				<Container>
					<Route exact path='/app' component={Dashboard} />
					<Route exact path='/app/assigned' component={AssignedToMe} />
					<Route exact path='/app/incidents' component={Incidents} />
					<Route exact path='/app/incidents/:incidentId' component={Incident} />
					<Route exact path='/app/requests' component={Requests} />
					<Route exact path='/app/requests/:requestId' component={Request} />
					<Route exact path='/app/new' component={CreateNew} />
					<Route exact path='/app/settings' component={Settings} />
				</Container>
			</MainAppBar>
		</Router>
	);
};

export default App;

/* @flow */
import * as React from 'react'; // importing as a namespace gives access to React's utility types
import './AppRoot.module.css';
import '../styles/normalize.global.css';
import ErrorBoundary from 'components/basics/ErrorBoundary';
import BitcoinTicker from 'components/BitcoinTicker';

import {
	BrowserRouter as Router, // <-- to use history API instead of hash url pattern
	// HashRouter as Router,
	Switch,
	Route,
	// Link,
} from 'react-router-dom';

const AppRoot = () => (
	<Router>
		<Switch>
			<Route exact path="/">
				<div styleName="wrapper">
					<p>I am AppRoot.</p>

					<ErrorBoundary>
						<BitcoinTicker />
					</ErrorBoundary>
				</div>
			</Route>

			<Route>
				<div>
					404
				</div>
			</Route>
		</Switch>
	</Router>
);

export default AppRoot;

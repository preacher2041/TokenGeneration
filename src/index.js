import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import {App} from './App';
import store from './config/store';

const app =
	// connects the app to the redux store
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>;

ReactDOM.render(app, document.getElementById('app'));
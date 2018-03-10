import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import store, { history } from './store/store';
import { ConnectedRouter } from 'react-router-redux';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/bootstrap/theme.css';
import 'font-awesome/css/font-awesome.css';

const target = document.querySelector('#root');

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>,
	target
);
registerServiceWorker();

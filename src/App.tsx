import * as React from 'react';
import { Route  } from 'react-router-dom';
import './App.css';
import BondsContainer from './containers/BondsContainer/'

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<main>
					<Route exact path="/" component={BondsContainer} />
				</main>
			</div>
		);
	}
}

export default App;

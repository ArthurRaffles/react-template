import * as React from 'react';
import './Bonds.css';
import { Filters } from '../../components/Filters/Filters';
import { TabPanel, TabView } from 'primereact/components/tabview/TabView';

export default class BondsContainer extends React.Component {
	render() {
		return (
			<div className='bonds-container'>
				<TabView>
					<TabPanel header="Outliers" leftIcon="fa-bank">
						<Filters/>
					</TabPanel>
				</TabView>
			</div>
		);
	}
}

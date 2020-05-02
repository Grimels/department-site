import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from 'Routes';
import store  from 'store';

import './App.css';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className='App'>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</div>
		</Provider>
	);
};

export default App;

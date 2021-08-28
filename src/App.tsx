import React from 'react';
import RandomNumberPage from './pages/RandomNumberPage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
	<div 
	className={'container'} 
	style={{height: '100vh'}}>
		<RandomNumberPage/>
	</div>);
}

export default App;

// Any JS in here is automatically run for us
import './main.html';

// import the React library
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';

// create a component
const App = () => {
	return (
		<div>
			<ImageList />
		</div>
	);
};

// Render this component to the screen
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});
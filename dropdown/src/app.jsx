var React = require('react');
var Dropdown = require('./dropdown');
var options = {
		title:'Choose a desert', //what should show up on the button to open/close the button
		items:[	//list of items in the dropdown
			'Apple pie',
			'Coconut cream',
			'Peach Cobbler'
		]
};

	// react,render the class
	var element = React.createElement(Dropdown,options);

	//after rendering pace inside the body class
	React.render(element,document.getElementById('container'));
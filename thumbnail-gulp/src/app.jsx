var React = require('react');
var Thumbnaillist = require('./thumbnail-list');

var options = {
		thumbnailData:[{
			title:'send',
			number:200,
			imageUrl:'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png',
			content:'How do I go about either making, or retrieving facebook short urls (fb.me) from a page, profile, event etc? I want to update my url shortener site - but if the user links to a facebook page I want to just return a fb.me link instead'
		},{
			title:'Receive',
			number:20,
			imageUrl:'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png',
			content:'How do I go about either making, or retrieving facebook short urls (fb.me) from a page, profile, event etc? I want to update my url shortener site - but if the user links to a facebook page I want to just return a fb.me link instead'
		}]
};

// react,render the class
var element = React.createElement(Thumbnaillist,options);

//after rendering pace inside the body class
React.render(element,document.querySelector('.row'));
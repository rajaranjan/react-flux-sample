var options = {
		thumbnailData:[{
			title:'send',
			number:2,
			imageUrl:'https://facebook.github.io/react/img/logo_og.png',
			content:'content is ...'
		},{
			title:'Receive',
			number:20,
			imageUrl:'https://facebook.github.io/react/img/logo_og.png',
			content:'content is ...'
		}]
};

	// react,render the class
	var element = React.createElement(Thumbnaillist,options);

	//after rendering pace inside the body class
	React.render(element,document.querySelector('.container'));
//define a class
var Badge = React.createClass({displayName: "Badge",
		render:function(){
			return React.createElement("button", {className: "btn btn-primary"}, 
			  this.props.title, " ", React.createElement("span", {className: "badge badge-secondary"}, this.props.number)
			)
		}
});
var Thumbnaillist = React.createClass({displayName: "Thumbnaillist",
		render:function(){
			var list = this.props.thumbnailData.map(function(thumbnailProps){
				return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
			});
			return React.createElement("div", null, 
			list
			)
		}
});
	
var Thumbnail = React.createClass({displayName: "Thumbnail",
		render:function(){
			return React.createElement("div", {className: "card"}, 
			  React.createElement("img", {className: "card-img-top", src: this.props.imageUrl, alt: "Card image cap"}), 
			  React.createElement("div", {className: "card-body"}, 
			    React.createElement("p", {className: "card-text"}, this.props.content), 
			    React.createElement(Badge, {title: this.props.title, number: this.props.number})
			  )
			)
		}
});
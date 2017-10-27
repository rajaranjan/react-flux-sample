var React = require('react');

//define a class
module.exports = React.createClass({
		render:function(){
			return <button onClick={this.props.whenClicked} className={"btn dropdown-toggle "+ this.props.className} type="button" data-toggle="dropdown">
			  {this.props.title} <span className={this.props.subTitleClassName}></span>
			</button>
		}
});
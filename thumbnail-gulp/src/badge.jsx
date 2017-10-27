var React = require('react');
var createReactClass = require('create-react-class');

module.exports = React.createClass({
		render:function(){
			return <button className="btn btn-primary">
			  {this.props.title} <span className="badge badge-secondary">{this.props.number}</span>
			</button>
		}
});
var React = require('react');
var Badge = require('./badge');
var createReactClass = require('create-react-class');

module.exports = React.createClass({
		render:function(){
			return <div className="card col-md-6">
			  <img className="card-img-top" src={this.props.imageUrl} alt="Card image cap" width="100%" />
			  <div className="card-body">
			    <p className="card-text">{this.props.content}</p>
			    <Badge title={this.props.title} number={this.props.number} />
			  </div>
			</div>
		}
});
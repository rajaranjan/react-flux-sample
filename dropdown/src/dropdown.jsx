// We need to show a button and list 
//This component should know when to show the list based on when user clicks on the button 

var React = require('react');
var Button  = require('./button');
var Listitem = require('./list-item');

module.exports = React.createClass({
	handleClick:function(){
		this.setState({open: !this.state.open})
	},
	getInitialState:function(){
		return {open:false}
	},
	handleItemClick:function(item){
		console.log(item);
		this.setState({
			open:false,
			itemTitle:item
		});
	},
	render:function(){
		var list = this.props.items.map(function(item){
			return <Listitem 
					item={item} 
					whenItemClicked={this.handleItemClick} 
					classActive={this.state.itemTitle === item? 'active' : ''}/>
		}.bind(this));
		return <div className="dropdown">
			<Button whenClicked={this.handleClick} className="btn-default" title={this.state.itemTitle || this.props.title} subTitleClassName="caret" />
			<ul className={"dropdown-menu "+(this.state.open ? "show" : "")}>
				{list}
			</ul>
		</div>
	}
});
var React = require('react');

var ReactDOM = require('react-dom');


var Main = React.createClass({

  getInitialState: function() {
    return {items: [], text: ''};
  },

  /**
  * Add the new item in the list.
  **/
  newItem: function(itemText) {
    return <li><input type="checkbox"/><span>{itemText}</span></li>;
  },

  /**
  * Set the state of text to current user input item.
  **/
  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  /**
  * When user submit the form put all items in one array
  * and clear the input for text.
  **/
  handleSubmit: function(e) {
    e.preventDefault();
    if([this.state.text.length] > 0 && [this.state.text.length] <= 20 ) {
       var nextItems = this.state.items.concat([this.state.text]);
       var nextText = '';
       this.setState({items: nextItems, text: nextText});
    }
  },

  /**
  * The render function to display the results.
  **/
  render: function() {
    return (
      <div className="container">
        <div className="inside-box">
        <h4>Todo List</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <ul>{this.state.items.map(this.newItem)}</ul>
          <input type="text"  onChange={this.onChange} value={this.state.text}/>
          <button id="add">+</button>
        </form>
      </div>
    );
  }
  });

/**
* Render my Component.
**/
ReactDOM.render(<Main />, document.getElementById('app'));

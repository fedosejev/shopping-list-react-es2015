import React, { Component } from 'react';
import List from './List.jsx';
import AddListItem from './AddListItem.jsx';

class ShoppingList extends Component {
  constructor() {
    super();
    
    this.state = {
      list: {}
    };
  }

  _updateList(list) {
    this.setState({
      list: list
    });
  }

  _addListItem(item) {
    const { list } = this.state;

    list[item.id] = item;

    this._updateList(list);
  }

  _removeListItem(itemId) {
    const { list } = this.state;

    delete list[itemId];

    this._updateList(list);
  }

  _removeAllListItems() {
    this._updateList({});
  }

  render() {
    const items = this.state.list;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">

            <List 
              items={items}
              removeListItem={this._removeListItem.bind(this)} 
              removeAllListItems={this._removeAllListItems.bind(this)} />
              
          </div>
          <div className="col-sm-6">

            <AddListItem addListItem={this._addListItem.bind(this)} />
          
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
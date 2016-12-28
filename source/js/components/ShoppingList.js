import React, { Component } from 'react';
import List from './List';
import AddListItem from './AddListItem';

class ShoppingList extends Component {
  constructor() {
    super();

    this.state = {
      list: {},
    };

    this.removeListItem = this.removeListItem.bind(this);
    this.removeAllListItems = this.removeAllListItems.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  updateList(list) {
    this.setState({
      list,
    });
  }

  addListItem(item) {
    const { list } = this.state;

    list[item.id] = item;

    this.updateList(list);
  }

  removeListItem(itemId) {
    const { list } = this.state;

    delete list[itemId];

    this.updateList(list);
  }

  removeAllListItems() {
    this.updateList({});
  }

  render() {
    const items = this.state.list;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">

            <List
              items={items}
              removeListItem={this.removeListItem}
              removeAllListItems={this.removeAllListItems}
            />

          </div>
          <div className="col-sm-6">

            <AddListItem addListItem={this.addListItem} />

          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingList;

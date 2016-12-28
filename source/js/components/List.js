import React, { Component } from 'react';
import ListItem from './ListItem';
import ListHeader from './ListHeader';
import EmptyList from './EmptyList';

class List extends Component {
  getListOfItemIds(items) {
    return Object.keys(items);
  }

  getTotalNumberOfListItems(items) {
    const totalNumberOfItems = 0;

    return this.getListOfItemIds(items).reduce((accumulator, itemId) => (
      accumulator + parseInt(items[itemId].quantity, 10)
    ), 0);
  }

  createListItemElements(items) {
    let item;
    const { removeListItem } = this.props;

    return (
      this
      .getListOfItemIds(items)
      .map(itemId => {
        item = items[itemId];
        return (<ListItem item={item} removeListItem={removeListItem} key={item.id} />);
      })
      .reverse()
    );
  }

  render() {
    const { items, removeAllListItems } = this.props;
    const listItemElements = this.createListItemElements(items);

    return (
      <div>
        <h3 className="page-header">

          <ListHeader
            totalNumberOfListItems={this.getTotalNumberOfListItems(items)}
            removeAllListItems={removeAllListItems}
          />

        </h3>
        <ul>

          {listItemElements.length > 0 ? listItemElements : <EmptyList />}

        </ul>
      </div>
    );
  }
}

export default List;

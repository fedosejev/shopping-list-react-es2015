import React, { Component } from 'react';
import ListItem from './ListItem.jsx';
import ListHeader from './ListHeader.jsx';
import EmptyList from './EmptyList.jsx';

class List extends Component {
  _getListOfItemIds(items) {
    return Object.keys(items);
  }

  _getTotalNumberOfListItems(items) {
    const totalNumberOfItems = 0;

    return this._getListOfItemIds(items).reduce((accumulator, itemId) => (
      parseInt(items[itemId].quantity, 10)
    ), 0);
  }

  _createListItemElements(items) {
    let item;

    return (
      this
      ._getListOfItemIds(items)
      .map(itemId => {
        item = items[itemId];
        return (<ListItem item={item} removeListItem={this.props.removeListItem} key={item.id} />);
      })
      .reverse()
    );
  }

  render() {
    const { items, removeAllListItems } = this.props;
    const listItemElements = this._createListItemElements(items);

    return (
      <div>
        <h3 className="page-header">

          <ListHeader
            totalNumberOfListItems={this._getTotalNumberOfListItems(items)}
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

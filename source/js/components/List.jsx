import React from 'react';
import ListItem from './ListItem.jsx';
import ListHeader from './ListHeader.jsx';
import EmptyList from './EmptyList.jsx';

class List extends React.Component {
  _getListOfItemIds(items) {
    return Object.keys(items);
  }

  _getTotalNumberOfListItems(items) {
    var totalNumberOfItems = 0;
    var item;

    return this._getListOfItemIds(items).reduce((accumulator, itemId) => {
      return parseInt(items[itemId].quantity, 10);
    }, 0);
  }

  _createListItemElements(items) {
    var item;

    return (
      this
      ._getListOfItemIds(items)
      .map((itemId) => {
        item = items[itemId];
        return (<ListItem item={item} removeListItem={this.props.removeListItem} key={item.id} />);
      })
      .reverse()
    );
  }

  render() {
    var items = this.props.items;
    var listItemElements = this._createListItemElements(items);

    return (
      <div>
        <h3 className="page-header">

          <ListHeader totalNumberOfListItems={this._getTotalNumberOfListItems(items)} removeAllListItems={this.props.removeAllListItems.bind(this)} />

        </h3>
        <ul>

          {listItemElements.length > 0 ? listItemElements : <EmptyList />}

        </ul>
      </div>
    );
  }
}

export default List;

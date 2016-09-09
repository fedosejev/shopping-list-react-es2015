import React, { Component } from 'react';

class ListHeader extends Component {
  _handleSubmit(event) {
    event.preventDefault();

    this.props.removeAllListItems();
  }

  render() {
    const { totalNumberOfListItems } = this.props;

    if (totalNumberOfListItems > 0) {
      return (
        <form onSubmit={this._handleSubmit.bind(this)} className="form-inline">
          {this.props.totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
          {' '}
          <button className="btn btn-xs btn-default" type="submit">Remove all</button>
        </form>
      );
    }

    return (<span>Shopping List</span>);
  }
}

export default ListHeader;
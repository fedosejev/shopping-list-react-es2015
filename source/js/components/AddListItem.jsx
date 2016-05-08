import React from 'react';
import uuid from 'node-uuid';

const styleRequired = {
  color: "#ffaaaa"
};

class AddListItem extends React.Component {
  _handleSubmitEvent(event) {
    event.preventDefault();

    const item = {
      id: uuid.v4(),
      date: new Date(),
      name: this.refs.name.value.trim(),
      description: this.refs.description.value.trim(),
      quantity: this.refs.quantity.value
    };

    this.props.addListItem(item);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmitEvent.bind(this)}>
        <h3 className="page-header">Add New Item</h3>

        <div className="form-group">
          <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
          <input type="text" className="form-control" id="listItemName" placeholder="Enter name" required ref="name" />
        </div>

        <div className="form-group">
          <label htmlFor="listItemDescription">Description</label>
          <textarea className="form-control" rows="3" id="listItemDescription" placeholder="Enter description" ref="description"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="listItemQuantity">Quantity <span style={styleRequired}>*</span></label>
          <div className="row">
            <div className="col-xs-5 col-sm-6 col-md-4">
              <input type="number" min="1" max="9999" step="1" defaultValue="1" className="form-control" id="listItemQuantity" required ref="quantity" />
            </div>
          </div>
        </div>

        <hr />

        <button type="submit" className="btn btn-primary">Add to list</button>
        <button type="reset" className="btn btn-link">Cancel</button>
      </form>
    );
  }
}

export default AddListItem;
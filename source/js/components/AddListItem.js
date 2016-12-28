import React, { Component, PropTypes } from 'react';
import uuid from 'node-uuid';

const styleRequired = {
  color: '#ffaaaa',
};

class AddListItem extends Component {
  handleSubmitEvent = event => {
    event.preventDefault();

    const item = {
      id: uuid.v4(),
      date: new Date(),
      name: this.listItemName.value.trim(),
      description: this.listItemDescription.value.trim(),
      quantity: this.listItemQuantity.value,
    };

    this.props.addListItem(item);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitEvent}>
        <h3 className="page-header">Add New Item</h3>

        <div className="form-group">
          <label htmlFor="listItemName">Name <span style={styleRequired}>*</span></label>
          <input
            type="text"
            className="form-control"
            id="listItemName"
            placeholder="Enter name"
            required
            ref={input => this.listItemName = input}
          />
        </div>

        <div className="form-group">
          <label htmlFor="listItemDescription">Description</label>
          <textarea
            className="form-control"
            rows="3"
            id="listItemDescription"
            placeholder="Enter description"
            ref={input => this.listItemDescription = input}
          />
        </div>

        <div className="form-group">
          <label htmlFor="listItemQuantity">Quantity <span style={styleRequired}>*</span></label>
          <div className="row">
            <div className="col-xs-5 col-sm-6 col-md-4">
              <input
                type="number"
                min="1"
                max="9999"
                step="1"
                defaultValue="1"
                className="form-control"
                id="listItemQuantity"
                required
                ref={input => this.listItemQuantity = input}
              />
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

AddListItem.propTypes = {
  addListItem: PropTypes.func.isRequired,
};

export default AddListItem;

import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getItems, deleteItem, editItem } from "../actions/items";
import SelectEditItem from "./EditItem";

class DisplayItem extends Component {
  state = {
    quantity: "",
    isEditSelected: false,
    selectedItem: "",
    totalAmount: 0
  };
  static propTypes = {
    items: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  };

  handleDelete = e => {
    console.log("button clicked");
    console.log("clicked on" + e.target.value);
    this.props.deleteItem(e.target.value);
  };

  changeQuantity = e => {
    console.log("latest quantity is" + e.target.value);
  };

  handleEditItem = e => {
    console.log("edit clicked on id" + e.target.value);
    this.setState({ isEditSelected: true, selectedItem: e.target.value });
    this.props.editItem(e.target.value);
  };

  calculateTotal = () => {
    return 7;
  };

  updateItems = () => {};

  render() {
    return (
      <Fragment>
        <h3>Your Shopping Cart</h3>
        <div>
          <br />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Items</th>
                <th>Size</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(x => (
                <tr key={x.p_id}>
                  <td>
                    <div>{x.p_name.toUpperCase()}</div>
                    <div>Style #: {x.p_style.toUpperCase()}</div>
                    <div>Color: {x.p_selected_color.name.toUpperCase()}</div>
                    <br></br>
                    <div>
                      <button onClick={this.handleEditItem} value={x.p_id}>
                        EDIT
                      </button>
                      <button onClick={this.handleDelete} value={x.p_id}>
                        X REMOVE
                      </button>
                      <button>SAVE FOR LATER</button>
                    </div>
                  </td>
                  <td>{x.p_selected_size.code}</td>
                  <td>
                    <input
                      type="text"
                      name="quantity"
                      defaultValue="1"
                      onChange={this.changeQuantity}
                    />
                  </td>
                  <td>
                    {x.c_currency}
                    {x.p_originalprice}.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />

          <span>Estimated Total</span>
          <br></br>
          <button className="btn btn-primary" onClick={this.props.checkout}>
            Checkout
          </button>
        </div>

        {this.state.isEditSelected ? (
          <SelectEditItem id={this.state.selectedItem} />
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.item.items
});

export default connect(mapStateToProps, { getItems, deleteItem, editItem })(
  DisplayItem
);

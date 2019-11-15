import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { editItem } from "../actions/items";

class EditItem extends Component {
  static propTypes = {
    selectedItem: PropTypes.array.isRequired
  };
  render() {
    return (
      <Fragment>
        <div className="popup">
          <div className="innerpopup">
            {this.props.selectedItem.map(x => (
              <div key={x.p_id}>
                <li>{x.p_name.toUpperCase()}</li>
                <li>
                  {x.c_currency}
                  {x.p_originalprice}.00
                </li>
                <li>{x.p_style.toUpperCase()}</li>
                <li>
                  Color:
                  {x.p_available_options.colors.map(y => (
                    <button value={y.name}>{y.name}&nbsp;</button>
                  ))}
                </li>
                <li>
                  Select Size:
                  <select>
                    {x.p_available_options.sizes.map(z => (
                      <option>{z.name}</option>
                    ))}
                  </select>
                </li>
                <li>
                  Select Quantity:
                  <input type="text" name="quantity" defaultValue="1" />
                </li>
                <li>
                  <button
                    className="btn btn-primary"
                    onClick={this.props.updateItems}
                  >
                    Edit
                  </button>
                </li>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedItem: state.item.selectedItem
});

export default connect(mapStateToProps, { editItem })(EditItem);

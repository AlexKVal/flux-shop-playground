var React = require('react');
var AppStore = require('../stores/app-store');
var RemoveFromCart = require('./app-removefromcart.js');
var Increase = require('./app-increase.js');
var Decrease = require('./app-decrease.js');

function stateFromStore() {
  return {
    items: AppStore.getCart(),
    total: AppStore.getTotal()
  };
}

var Cart = React.createClass({
  getInitialState: function() {
    return stateFromStore();
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState(stateFromStore());
  },
  render: function() {
    var items = this.state.items.map(function (item, i) {
      return (
        <tr key={i}>
          <td><RemoveFromCart index={i} /></td>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>
            <Increase index={i} />
            <Decrease index={i} />
          </td>
          <td>${item.subtotal()}</td>
        </tr>
      );
    });
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Qty</th>
            <th></th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right">Total</td>
            <td>${this.state.total}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
});

module.exports = Cart;

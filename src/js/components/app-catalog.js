var React = require('react');
var AppStore = require('../stores/app-store');
var AddToCart = require('./app-addtocart.js');

var Catalog = React.createClass({
  getInitialState: function() {
    return {items: AppStore.getCatalog()};
  },
  render: function() {
    var items = this.state.items.map(function (item) {
      return (
        <tr>
          <td>{item.title}</td>
          <td>${item.cost}</td>
          <td><AddToCart item={item} /></td>
        </tr>
      );
    });
    return (
      <table className='table table-hover'>
      {items}
      </table>
    );
  }
});

module.exports = Catalog;

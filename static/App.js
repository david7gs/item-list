'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contentNode = document.getElementById('main');

var items = [{ id: 1, checked: true, detail: 'CheckBox1' }, { id: 2, checked: true, detail: 'CheckBox2' }, { id: 3, checked: true, detail: 'CheckBox3' }, { id: 4, checked: true, detail: 'CheckBox4' }, { id: 5, checked: false, detail: 'CheckBox5' }];

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var item = this.props.item;
      return React.createElement(
        'div',
        { className: 'itemDetail' },
        item.checked ? item.detail : ''
      );
    }
  }]);

  return ListItem;
}(React.Component);

var ItemList = function (_React$Component2) {
  _inherits(ItemList, _React$Component2);

  function ItemList() {
    _classCallCheck(this, ItemList);

    return _possibleConstructorReturn(this, (ItemList.__proto__ || Object.getPrototypeOf(ItemList)).apply(this, arguments));
  }

  _createClass(ItemList, [{
    key: 'render',
    value: function render() {
      var listItems = this.props.items.map(function (item) {
        return React.createElement(ListItem, { key: item.id, item: item });
      });
      return React.createElement(
        'div',
        null,
        listItems
      );
    }
  }]);

  return ItemList;
}(React.Component);

var EditListItem = function (_React$Component3) {
  _inherits(EditListItem, _React$Component3);

  function EditListItem() {
    _classCallCheck(this, EditListItem);

    var _this3 = _possibleConstructorReturn(this, (EditListItem.__proto__ || Object.getPrototypeOf(EditListItem)).call(this));

    _this3.state = {
      items: items
    };
    _this3.countChecks = _this3.countChecks.bind(_this3);
    return _this3;
  }

  _createClass(EditListItem, [{
    key: 'countChecks',
    value: function countChecks() {
      var arrLength = items.length;
      console.log('items', arrLength);

      var checks = this.state.items.filter(function (checks) {
        return checks.checked;
      });
      console.log('checks =', checks.length);
    }
  }, {
    key: 'render',
    value: function render() {
      var eItem = this.props.eItem;
      return React.createElement(
        'div',
        { className: 'editItemList' },
        React.createElement('input', { type: 'checkbox', onClick: this.countChecks, defaultChecked: eItem.checked }),
        eItem.detail
      );
    }
  }]);

  return EditListItem;
}(React.Component);

var EditList = function (_React$Component4) {
  _inherits(EditList, _React$Component4);

  function EditList() {
    _classCallCheck(this, EditList);

    return _possibleConstructorReturn(this, (EditList.__proto__ || Object.getPrototypeOf(EditList)).apply(this, arguments));
  }

  _createClass(EditList, [{
    key: 'render',
    value: function render() {
      var editListItems = this.props.items.map(function (eItem) {
        return React.createElement(EditListItem, { key: eItem.id, eItem: eItem });
      });
      return React.createElement(
        'div',
        { className: 'editListItems' },
        React.createElement(
          'div',
          null,
          editListItems
        )
      );
    }
  }]);

  return EditList;
}(React.Component);

var ItemListApp = function (_React$Component5) {
  _inherits(ItemListApp, _React$Component5);

  function ItemListApp() {
    _classCallCheck(this, ItemListApp);

    var _this5 = _possibleConstructorReturn(this, (ItemListApp.__proto__ || Object.getPrototypeOf(ItemListApp)).call(this));

    _this5.state = {
      items: items,
      isEditable: false
    };
    _this5.handleEdit = _this5.handleEdit.bind(_this5);
    _this5.handleSave = _this5.handleSave.bind(_this5);
    _this5.handleClear = _this5.handleClear.bind(_this5);
    _this5.handleCancel = _this5.handleCancel.bind(_this5);
    return _this5;
  }

  _createClass(ItemListApp, [{
    key: 'handleEdit',
    value: function handleEdit() {
      this.setState({ isEditable: true });
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      this.setState({ isEditable: false });
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      items.forEach(function (item) {
        return item.checked = false;
      });
      this.setState({
        isEditable: false,
        items: items
      });
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.setState({ isEditable: false });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      if (this.state.checked !== e.target.checked) {
        this.setState({
          checked: e.target.checked
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var isEditable = this.state.isEditable;

      return React.createElement(
        'div',
        null,
        React.createElement(ItemList, { items: items }),
        !isEditable ? React.createElement(
          'button',
          { className: 'editButton', onClick: this.handleEdit },
          'edit'
        ) : React.createElement(
          'div',
          { className: 'editListItems' },
          React.createElement(
            'button',
            { onClick: this.handleSave },
            'Save'
          ),
          React.createElement(
            'button',
            { onClick: this.handleClear, onChange: this.handleChange },
            'Clear'
          ),
          React.createElement(
            'button',
            { onClick: this.handleCancel },
            'Cancel'
          )
        ),
        isEditable && React.createElement(EditList, { items: this.state.items })
      );
    }
  }]);

  return ItemListApp;
}(React.Component);

ReactDOM.render(React.createElement(ItemListApp, null), contentNode);
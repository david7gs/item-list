
const contentNode = document.getElementById('main');

const items = [{ id: 1, checked: true, detail: 'CheckBox1' }, { id: 2, checked: true, detail: 'CheckBox2' }, { id: 3, checked: true, detail: 'CheckBox3' }, { id: 4, checked: true, detail: 'CheckBox4' }, { id: 5, checked: false, detail: 'CheckBox5' }];

class ListItem extends React.Component {
  render() {
    const item = this.props.item;
    return React.createElement(
      'div',
      { className: 'itemDetail' },
      item.detail
    );
  }
}

class ItemList extends React.Component {
  render() {
    const listItems = this.props.items.map(item => React.createElement(ListItem, { key: item.id, item: item }));
    return React.createElement(
      'div',
      null,
      listItems
    );
  }
}

class Edit extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'editButton' },
      React.createElement(
        'button',
        null,
        'edit'
      )
    );
  }
}

class EditListItem extends React.Component {
  render() {
    const eItem = this.props.eItem;
    return React.createElement(
      'div',
      { className: 'itemDetail' },
      React.createElement('input', { type: 'checkbox', defaultChecked: eItem.checked }),
      eItem.detail
    );
  }
}

class EditList extends React.Component {
  render() {
    const editListItems = this.props.items.map(eItem => React.createElement(EditListItem, { key: eItem.id, eItem: eItem }));
    return React.createElement(
      'div',
      { className: 'editListItems' },
      React.createElement(
        'button',
        null,
        'Save'
      ),
      React.createElement(
        'button',
        null,
        'Clear'
      ),
      React.createElement(
        'button',
        null,
        'Cancel'
      ),
      React.createElement(
        'div',
        null,
        editListItems
      )
    );
  }
}

class ItemListApp extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(ItemList, { items: items }),
      React.createElement(Edit, null),
      React.createElement(EditList, { items: items })
    );
  }
}

ReactDOM.render(React.createElement(ItemListApp, null), contentNode);

const contentNode = document.getElementById('main');

const items = [
  {id: 1, checked: true, detail: 'CheckBox1' },
  {id: 2, checked: true, detail: 'CheckBox2' },
  {id: 3, checked: true, detail: 'CheckBox3' },
  {id: 4, checked: true, detail: 'CheckBox4' },
  {id: 5, checked: false, detail: 'CheckBox5' },
];

class ListItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <div className="itemDetail">
        {item.detail}
      </div>
    );
  }
}

class ItemList extends React.Component {
  render() {
    const listItems = this.props.items.map(item => <ListItem key={item.id} item={item} />);
    return (
      <div>{listItems}</div>
    );
  }
}

class Edit extends React.Component {
  render() {
    return (
      <div className="editButton">
        <button>edit</button>
      </div>
    );
  }
}

class EditListItem extends React.Component {
  render() {
    const eItem = this.props.eItem;
    return (
      <div className="itemDetail">
        <input type="checkbox" defaultChecked={eItem.checked}/>
        {eItem.detail}
      </div>
    );
  }
}


class EditList extends React.Component {
  render() {
    const editListItems = this.props.items.map(eItem => <EditListItem key={eItem.id} eItem={eItem} />);
    return (
      <div className="editListItems">
        <button>Save It</button>
        <button>Clear</button>
        <button>Cancel</button>
        <div>{editListItems}</div>
      </div>
    );
  }
}

class ItemListApp extends React.Component {
  render() {
    return (
      <div>
        <ItemList items={items}/>
        <Edit/>
        <EditList items={items}/>
      </div>
    );
  }
}


ReactDOM.render(<ItemListApp />, contentNode);
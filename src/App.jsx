
const contentNode = document.getElementById('main');

let items = [
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
        { item.checked ? item.detail : '' }
      </div>
    );
  }
}

class ItemList extends React.Component {
  render() {
    const listItems = this.props.items.map(item => <ListItem key={item.id} item={item} />);
    return (
      <div>
        {listItems}
      </div>
    );
  }
}

class EditListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      items: items,
    };
    this.countChecks = this.countChecks.bind(this);
  }

  countChecks() {
    let arrLength = items.length;
    console.log('items', arrLength);

    let checks = this.state.items.filter(checks => checks.checked);
    console.log('checks =', checks.length);

  };

  render() {
    const eItem = this.props.eItem;
    return (

      <div className="editItemList">
        <input type="checkbox" onClick={this.countChecks} defaultChecked={eItem.checked}/>
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
        <div>{editListItems}</div>
      </div>
    );
  }
}

class ItemListApp extends React.Component {
  constructor() {
    super();
    this.state = {
      items: items,
      isEditable: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleEdit() {
    this.setState({ isEditable: true });
  };

  handleSave() {
    this.setState({ isEditable: false });
  };

  handleClear() {
    items.forEach(item => item.checked = false);
    this.setState({
      isEditable: false,
      items: items
    });
  }

  handleCancel() {
    this.setState({ isEditable: false });
  };

  handleChange(e) {
    if(this.state.checked !== e.target.checked) {
      this.setState({
        checked:e.target.checked
      });
    }
  }

  render() {
    const isEditable = this.state.isEditable;

    return (
      <div>
        <ItemList items={items}/>
        { !isEditable
          ? <button className="editButton" onClick={this.handleEdit}>edit</button>
          : <div className="editListItems">
            <button onClick={this.handleSave}>Save</button>
            <button onClick={this.handleClear} onChange={this.handleChange}>Clear</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        }
        { isEditable && <EditList items={this.state.items} /> }
      </div>
    );
  }
}

ReactDOM.render(<ItemListApp />, contentNode);
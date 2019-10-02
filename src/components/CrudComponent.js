import React, { Component } from "react";

export default class CrudComponent extends Component {
  _handleClick = () => {
    this.props.getListAction();
  };

  _renderItemUser = () => {
    let result = this.props.list;
    if (result.length > 0) {
      return result.map((item, index) => (
        <tr key={item.id}>
          <td scope="row">{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.address}</td>
        </tr>
      ));
    }
  };

  render() {
    return (
      <div>
        <button onClick={() => this._handleClick()}>Get List</button>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>address</th>
              </tr>
            </thead>
            <tbody>
                { this._renderItemUser() }
            </tbody>
          </table>
        </div>
        {this.props.message && this.props.message}
      </div>
    );
  }
}

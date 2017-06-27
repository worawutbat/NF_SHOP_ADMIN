import React, { Component } from 'react';
import './adminPage.css';

class Bill extends Component {
  constructor(){
    super()
    this.state={
      store:
      [
        // {bills:"abc"},
        {bills:[{name:"a", id:1}, {name:"b", id:2}]},
        {bills:[{name:"aa", id:11}, {name:"bb", id:22}]},
        {bills:[{name:"aaa", id:111}, {name:"bbb", id:222}]}
      ]
    }
  }

  // componentDidMount() {
  //    fetch('http://localhost:8888/api/getbills')
  //      .then(response => response.json())
  //      .then(json => this.setState({ store: json }))
  // }


  render() {
    return (
      //code is cool!!!   something.map(supsomething.map())
      <div>
        <ul>
          {this.state.store.map((record, index) =>
              record.bills.map((record2, index) =>
              <li>
                {record2.name}
                {record2.price}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Bill;

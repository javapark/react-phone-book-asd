import React, { Component } from "react";
import { render } from "react-dom";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
import "./style.css";

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: "김민준",
        phone: "010-0000-0000"
      },
      {
        id: 1,
        name: "홍길동",
        phone: "010-0000-0001"
      }
    ],
    keyword :''
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(info =>
        info.id === id ? { ...info, ...data } : info
      )
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id != id)
    });
  };

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  render() {
    const {information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <p>
          <input placeholder="검색 할 이름을 입력하세요.."
          onChange={this.handleChange} value={keyword}/>
        </p>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

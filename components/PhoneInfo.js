import React, {Component } from 'react';

class PhoneInfo extends Component{
  static defaultProps = {
    info: {
      name:'이름',
      phone: '010-1234-5678',
      id: 0
    }
  }

  state = {

    // 우리는 수정 버튼을 눌렀을 때 editing 값을 true 로 설정
    // 이 값이 true 일때는 텍스트 형태의 값을 input으로
    editing: false,
    // input 값이 바뀌어야 함
    name:'',
    phone:'',
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  // ediging 값을 반전시키는 함수
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({editing:!editing});
  }

  // input 에서 onChange 이벤트가 발생 될 때 호출
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]:value
    });
  }

  componentDidUpdate(prevProps, prevState){
    // editing 값이 바뀔 때 처리 할 로직이 있다
    // 수정을 누르면 기존의 값이 input 에 나타나고
    // 수정을 적용할 땐 input 값들이 부모한테 전달

    const {info, onUpdate, editing} = this.props;
    if(!prevState.editing && this.state.editing){
      // editing 값이 false -> true
      this.setState({
        name : info.name,
        phone: info.phone
      })
    }

    if (prevState.editing && !this.state.editing){
      // editing : true -> false
      
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
    if (!this.state.editing  
        && !nextState.editing
        && nextProps.info === this.props.info) {
      return false;
    }
    // 나머지 경우엔 리렌더링함
    return true;
  }

  render() {
    console.log('render PhoneInfo ' + this.props.info.id);

    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const { editing } = this.state;

    // 수정모드
    if(editing){
      return (
        <div style={style}>
          <div>
            <input value={this.state.name}
            name='name'
            placeholder="이름"
            onChange={this.handleChange}
            />
          </div>
          <div>
            <input value={this.state.phone}
            name='phone'
            placeholder="Phone"
            onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>적용</button>
          <button onClick={this.handleRemove}>삭제</button>
        </div>
      );
    }

    const {
      name, phone, id
    } = this.props.info;

    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>수정</button>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    )
  }
}

export default PhoneInfo;
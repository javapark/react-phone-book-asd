import React, {Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    list: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined')
  }

  // data가 현재 data 랑 다른 배열일 때 true 로 설정
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.data !== this.props.data;
  }

  render(){
    console.log('render PhoneInfoList');
    const {data, onRemove, onUpdate} = this.props;
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info} 
      onRemove={onRemove}
      onUpdate={onUpdate}
      />)
    );

    return (
      <div>{list}</div>
    );
  }
}

export default PhoneInfoList;
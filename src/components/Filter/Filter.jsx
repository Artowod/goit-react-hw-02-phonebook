import React from 'react';
import s from './Filter.module.css';

class Filter extends React.Component {
  /* = ({ filterHandler }) => { */
  /*   state = {
    value: '',
  };
 */
  /*   state = {
    value: '',
  }; */
  render() {
    return (
      <div>
        Find contacts by name
        <input
          className={s.filterInput}
          type="text"
          value={this.props.filterWord}
          onChange={this.props.filterHandler}
        ></input>
      </div>
    );
  }
}
export default Filter;

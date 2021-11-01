import s from './Filter.module.css';

const Filter = ({ filterHandle }) => {
  return (
    <div>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        onChange={filterHandle}
      ></input>
    </div>
  );
};
export default Filter;

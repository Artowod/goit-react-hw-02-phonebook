import s from './ListElement.module.css';
const ListElement = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
      <button className={s.delete} type="button">
        Delete
      </button>
    </li>
  );
};

export default ListElement;

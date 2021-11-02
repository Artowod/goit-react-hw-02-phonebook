import s from './ListElement.module.css';
const ListElement = ({ name, number, deleteBtnName, deleteHandler }) => {
  return (
    <li>
      {name}: {number}
      <button
        className={s.delete}
        type="button"
        name={deleteBtnName}
        onClick={deleteHandler}
      >
        Delete
      </button>
    </li>
  );
};

export default ListElement;

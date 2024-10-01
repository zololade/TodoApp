import { Todo } from "./Todo";
import PropTypes from "prop-types";
export const Container = ({ value, setValue }) => {
  return (
    <section className="listContainer">
      <div className="listTitle">
        <h1>To Do List</h1>
        <button
          id="clearItem"
          className="button"
          title="Clear list"
          aria-label="Clear the list"
          tabIndex={0}
        >
          Clear
        </button>
      </div>
      <hr />
      <Todo value={value} setValue={setValue} />
    </section>
  );
};
Container.propTypes = {
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";

export const Todo = ({ value, setValue }) => {
  const handleClick = (e) => {
    const idToRemove = parseInt(e.target.id);
    setValue((prevValue) => {
      const newObject = prevValue.filter((item) => {
        return idToRemove !== item.id;
      });
      const newArray = newObject.map((item, i) => ({
        ...item,
        id: i,
        checker: true,
      }));
      return newArray;
    });
  };

  return (
    <div className="listItems">
      {value.map((index) => {
        return (
          <div className="item" key={index.id}>
            <input
              type="checkbox"
              checked={index.checker}
              onChange={handleClick}
              id={index.id}
              tabIndex={0}
            />
            <label htmlFor={index.id}>{index.todoData}</label>
          </div>
        );
      })}
    </div>
  );
};
Todo.propTypes = {
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};

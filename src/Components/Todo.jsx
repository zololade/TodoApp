import PropTypes from "prop-types";

export const Todo = ({ value, setValue }) => {
  const handleClick = (e) => {
    setTimeout(() => {
      const idToRemove = parseInt(e.target.id);
      setValue((prevValue) => {
        const newObject = prevValue.filter((item) => {
          return idToRemove !== item.id;
        });
        const newArray = newObject.map((item) => ({
          ...item,
        }));
        const dataToStore = JSON.stringify(newArray);
        localStorage.setItem("myTodoList", dataToStore);
        return newArray;
      });
    }, 1000);
  };

  return (
    <div className="listItems">
      {value.map((index) => {
        return (
          <div className="item" key={index.id}>
            <input
              type="checkbox"
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

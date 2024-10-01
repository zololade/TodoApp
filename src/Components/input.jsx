import { useState } from "react";
import PropTypes from "prop-types";
let inputId = 0;
export const Input = ({ value, setValue }) => {
  const [store, setStore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (store === "") {
      return;
    }
    setValue((currentValue) => {
      return [...currentValue, { todoData: store, id: inputId }];
    });
    const dataToStore = JSON.stringify(value);
    localStorage.setItem("myTodoList", dataToStore);
    inputId++;
    setStore("");
  };

  const handleOnchange = (e) => {
    setStore((currentValue) => {
      currentValue = e.target.value;
      return currentValue;
    });
  };

  return (
    <section className="newItemEntry">
      <form id="itemEntry" onSubmit={handleSubmit}>
        <label htmlFor="newItem">Enter a new todo item</label>
        <input
          type="text"
          id="newItem"
          name="newItem"
          size={"40"}
          placeholder="Add item"
          tabIndex={0}
          value={store}
          onChange={handleOnchange}
        />
        <button
          type="submit"
          id="addItem"
          className="button"
          title="Add new item"
          aria-label="Add new item to list"
          tabIndex={0}
        >
          +
        </button>
      </form>
    </section>
  );
};

Input.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
};

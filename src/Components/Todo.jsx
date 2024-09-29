export const Todo = () => {

  return (
    <div className="listItems">
      <div className="item">
        <input type="checkbox" id="1" tabIndex={0} />
        <label htmlFor="1">eat</label>
      </div>
      <div className="item">
        <input type="checkbox" id="2" tabIndex={0} />
        <label htmlFor="2">eat</label>
      </div>
    </div>
  );
};

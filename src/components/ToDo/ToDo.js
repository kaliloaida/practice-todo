import classes from "./ToDo.module.css";
import Card from "../UI/Card";

const ToDo = (props) => {
  const DeleteToDoHandler = (event) => {
    props.todo((prevState) => {
      const updateTodo = prevState.filter(
        (todo) => todo.id !== event.target.id
      );
      return updateTodo;
    });
  };

  const CheckedToDoHandler = (event) => {
    props.todo(
      props.data.map((el) => {
        if (el.id == event.target.id) {
          el.completed = !el.completed;
        }
        return el;
      })
    );
  };

  return (
    <Card className={classes.todo}>
      {props.data.map((todo) => {
        return (
          <Card
            className={classes.todo_li}
            onDelete={props.onDeleteItem}
            key={todo.id}
          >
            <input
              type="checkbox"
              id={todo.id}
              onChange={CheckedToDoHandler}
              checked={todo.completed}
            />
            <li
              className={`${todo.completed ? classes.completed : ""}`}
              id={todo.id}
            >
              {todo.text}
            </li>
            <span className={classes.date}>{todo.date}</span>
            <button onClick={DeleteToDoHandler} id={todo.id} type="button">
              Delete
            </button>
          </Card>
        );
      })}
    </Card>
  );
};
export default ToDo;

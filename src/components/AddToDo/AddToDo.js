import Card from "../UI/Card";
import "./AddToDo.css";
import { useReducer } from "react";
import Modal from "../UI/Modal";

const reducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return {
      value: action.val,
      isValid:null
    };
  }
  if (action.type === "ERROR") {
    return {
      value: state.value,
      isValid: { title: "ERROR", massage: "PLEASE TYPE SOMETHING" },
    };
  }
  if (action.type === "MODAL_OK") {
    return {
      value: state.value,
      isValid: null,
    };
  }
  return{
		value: '',
		isValid: null,
	}
};

const AddToDo = (props) => {
 
  const [state, dispatchState] = useReducer(reducer, {
    value: "",
    isValid: null,
  });

  const inputValueHandler = (event) => {
    dispatchState({ type: "INPUT_CHANGE", val: event.target.value});

  };
  

  const submitHandler = (event) => {
    event.preventDefault();
    if (state.value.trim().length === 0) {
      dispatchState({ type: "ERROR" });
      return
    }

    props.onAddToDo(state.value);

  };

  const confirm = (e) => {
    dispatchState({type: 'MODAL_OK'});
  };

  return (
    <>
      {state.isValid && (
        <Modal
          title={state.isValid.title}
          message={state.isValid.massage}
          onConfirm={confirm}
        />
      )}
      <Card className="addtodo" >
        <input type="text" onChange={inputValueHandler} />
        <button type="submit" onClick={submitHandler}>
          Add To Do
        </button>
      </Card>
    </>
  );
};
export default AddToDo;

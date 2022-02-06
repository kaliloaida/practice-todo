import Card from "./Card";
import classes from "./Modal.module.css";


const Modal = (props) => {
  return (
    <>
        <div onClick={props.onConfirm} className={classes.backdrop} /> 
       <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          {props.children}
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </Card>
    </>
  );
    
  
};
export default Modal;

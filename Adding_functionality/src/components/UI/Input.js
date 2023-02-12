import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;




/* <label htmlFor={props.input.id}>{props.label}</label>//{props.label}=I get a label props with the label text and
{props.input.id}= input props which holds an object with configuration data for the input like example the id
<input id={props.input.id} {...props.input}/>// id={props.input.id} used for htmlFor (should be same because label point with the help of id)
{...props.input} it is used to pass all other configuration data, I might have gotten for this input element as props.
used spread operator to spread props.input this ensures that all the key value pairs in this input object which we recive
on props input are added as props to input . if an input object here is object fro example has type:'text' so if that is what we get on 
props input, then tis code here would make sure  <input id={props.input.id} type='text'/> that type equals text is 
being added. this is how that works when you use the spread operator on an element like this.It is simply convient way of
making this input highly configurable from outside this component , through this input props here . And also we can even 
get rid of this id={props.input.id} and this id is alos a part of this input {...props.input}  props as well. */
import React,{ReactNode,FormEvent} from "react";
import "./Form.scss";
type fbProps = {
  children: ReactNode;
  onSubmit: (e:FormEvent<HTMLFormElement>)=>void;
};

function Form({ children,onSubmit }: fbProps) {
  return <form onSubmit={onSubmit} className="form">
    {children}
  </form>;
}

type inputProps = {
    type:string,
    disabled:boolean,
    name:string,
    value:string,label:string,
    onChange:(e:FormEvent<HTMLInputElement>)=>void,
}

export const Input = ({name,label,...props}:Partial<inputProps>) => {
  return<div className='form-input-group'>
    <label htmlFor={name}>{label}</label>
    <input {...props}/>
  </div>

}

type buttonProps = {
  type:"button"|'submit'|'reset',
  disabled:boolean,
  onClick : ()=>void,
  title : string,
  className : string,
}


export const Button = ({title,className,...props}:Partial<buttonProps>) => {
    return <button className={`form-button ${className||''}`} {...props}>{title}</button>
}


export default Form;

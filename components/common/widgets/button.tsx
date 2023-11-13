interface ButtonProp{
    text:string;
}

const Button=(prop:ButtonProp)=>{
    return <button className="bg-[#f5c845] p-2 mt-5 font-bold hover:pl-3 hover:pr-3"> {prop.text} </button>
}
export default Button;
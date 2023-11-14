interface ButtonProp{
    text:string;
    background:string;
}

const Button=(prop:ButtonProp)=>{
    return <button className={`bg-[${prop.background}] p-2 mt-12 font-bold text-[20px] pl-5 pr-5`}> {prop.text} </button>
}
export default Button;
interface LogoProp {
    inverse: boolean
}

const Logo = (prop: LogoProp) => {
    return (
        <div className="flex items-center">
            <div className={`flex justify-center items-center ${prop.inverse?'bg-white' : 'bg-black'} pl-5 pr-5`}>
                <h1 className={`${prop.inverse?'text-black':'text-white'} text-[40px] font-bold`}> R </h1>
            </div>
            <div className={`flex justify-center items-center ${prop.inverse?'bg-[#575555]':'bg-[#e3e3e3]'} ml-[-10px] pl-5 pr-5 mt-10`}>
                <h1 className={`${prop.inverse?'text-white':'text-black'} text-[40px] font-bold`}> D </h1>
            </div>
        </div>
    )
}
export default Logo;
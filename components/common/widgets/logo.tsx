interface LogoProp {
    inverse: boolean
}

const Logo = (prop: LogoProp) => {
    return (
        <div className="flex items-center">
            <div className="flex justify-center items-center bg-white pl-5 pr-5">
                <h1 className="text-black text-[40px] font-bold"> R </h1>
            </div>
            <div className="flex justify-center items-center bg-[#575555] ml-[-10px] pl-5 pr-5 mt-10">
                <h1 className="text-white text-[40px] font-bold"> D </h1>
            </div>
        </div>
    )
}
export default Logo;
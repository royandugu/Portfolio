interface DotTextureProp{
    length:number;
}
const DotTexture=(prop:DotTextureProp)=>{
    const {length}=prop;
    return(
        <>
            <div className="flex justify-start flex-wrap gap-2">
                {Array.from({ length }, (_, index) => (
                    <div key={index} className="h-2 w-2 bg-[#f5c845] rounded-[50%]"/>
                ))}
            </div>
        </>        
    )
}
export default DotTexture;
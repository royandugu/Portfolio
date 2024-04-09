import IndvProjectDetails from "@/components/projects/indvProjectDetails/indvProjectDetails";

const Page=({params}:{params:{id:string}})=>{
    return <IndvProjectDetails params={params}/>
}
export default Page;
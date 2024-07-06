import Link from "next/link";
//mt-5 mb-4 xl:mt-8
const Button=({text,url}:{text:string, url:string})=>{
return (
    <Link  className="px-5 " href={url} >
    <button className="px-5 py-2 mt-1 grid place-self-center bg-blue-900 text-white md:text-xl rounded-sm transition ease-in-out delay-250 hover:scale-105">
     {text}</button></Link>
)
}
export default Button;
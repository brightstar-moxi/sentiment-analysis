import Link from "next/link"
const NavLink = ({href, title}) => {
    return(
        <>
        
        <Link href={href} className='block py-1 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-white'>
        
            <button className="bg-blue-500 hover:bg-blue-700 text-white border-white py-2 px-4 rounded">{title}</button>
            
            </Link>
            </>
    )
}

export default NavLink;
import Link from "next/link"

const NavBar = () => {
    return (
        <div className="w-full flex flex-row bg-blue-500">
           <Link href="/"/> 
           <Link href="/home" />
        </div>
    )
}

export default NavBar;
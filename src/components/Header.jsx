import MenuItem from "@/components/MenuItem";
import {AiFillHome, AiOutlineOrderedList} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "@/components/DarkModeSwitch";

export default function Header(){
    return(
        <div className={"flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6"}>
            <div className="flex">
                <MenuItem title="HOME" address="/" Icon={AiFillHome}></MenuItem>
                <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}></MenuItem>
                <MenuItem title="CATALOG" address="/catalog/1" Icon={AiOutlineOrderedList}></MenuItem>
            </div>
            <div className="flex items-center space-x-5">
                <DarkModeSwitch></DarkModeSwitch>
                <Link href="/">
                    <h2 className={"text-2xl px-2"}>
                        <span className={"font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1"}>IMDb</span>
                        <span className={"text-xl hidden sm:inline"}>Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}
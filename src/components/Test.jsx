'use client'
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {useRouter} from "next/navigation";

export default function Test({params}){

    let count = params?.id;
    const router = useRouter();

    function handleClickCountA(){
        count--;
        router.push(`/catalog/${count}`);
    }

    function handleClickCountB(){
        count++;
        router.push(`/catalog/${count}`);
    }

    return (
        <div className="p-6 flex items-center justify-center">
            <GrFormPreviousLink
                onClick={handleClickCountA}
                className="h-8 w-8 mr-1 cursor-pointer"></GrFormPreviousLink>
            <div className="">{count}</div>
            <GrFormNextLink
                onClick={handleClickCountB}
                className="h-8 w-8 ml-1 cursor-pointer"></GrFormNextLink>
        </div>
    )
}
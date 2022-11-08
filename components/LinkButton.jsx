import Link from "next/link"
import {CgArrowRight} from 'react-icons/cg'

export default function LinkButton(props){
    return(
        <div className="my-5 flex justify-center">
            <Link href={props.href}>
                <div className="p-3 px-20 bg-gray-800 rounded-3xl hover:cursor-pointer hover:opacity-80">
                    <span className="px-2 text-lg align-middle">{props.title} <CgArrowRight className="inline"/></span>
                </div>
            </Link>
        </div>
    )
}
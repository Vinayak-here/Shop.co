import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import P1 from "../assets/P1.png.png"

const Products = () => {
    return (
        <>
        <div>
            <Card className="bg-slate-200 w-64 h-72 rounded">
                <CardHeader>
                    <div className='flex justify-between '>
                        <div className='bg-red-500 w-[50px] h-5 rounded-sm text-xs text-white p-0.5 flex justify-around '>
                            <div className=''>-40%</div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='bg-white file:h-full w-full p-1 felx rounded-full'>
                                <FaRegHeart size={20}></FaRegHeart></div>
                            <div className='bg-white file:h-full w-full p-1 felx rounded-full'> 
                                <IoEyeOutline size={20} /></div>
                        </div>
                    </div>
                    <CardDescription >
                        <img src={P1}></img>
                    </CardDescription>
                </CardHeader>

            </Card>
        
        <div className='font-bold'>HAVIT HV-G92 Gamepad</div>
        <div className='flex flex-row gap-2'>
            <div className='text-red-600'>$120</div>
            <div className='text-zinc-600 line-through'>$160</div>
        </div>
        <div className='flex flex-row gap-2'>
        <div >Stars</div>
        <div>(88)</div>
        </div>
        </div>
        </>
    )
}

export default Products
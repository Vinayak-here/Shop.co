import React from 'react'
import SearchBar from './Searchbar'
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";


const Navbar = () => {
    return (
        <div className='h-12 bg-white border-b-2 border-slate-300 '>
            <div className='flex justify-around mt-8'>
                <div className=' font-bold  text-3xl '>
                    <h3 className='tracking-wide'>Exclusive</h3>
                </div>

                <div className="flex flex-row gap-6 py-0.5">
                    <div className="relative">
                        <span className="hover:after:scale-x-100 after:rounded-lg after:content-[''] after:block after:h-0.5 after:bg-slate-700 after:scale-x-0 after:origin-center after:transition-transform after:duration-300">Home</span>
                    </div>
                    <div className="relative">
                        <span className="hover:after:scale-x-100 after:rounded-lg after:content-[''] after:block after:h-0.5 after:bg-slate-700 after:scale-x-0 after:origin-center after:transition-transform after:duration-300">Contact</span>
                    </div>
                    <div className="relative">
                        <span className="hover:after:scale-x-100 after:rounded-lg after:content-[''] after:block after:h-0.5 after:bg-slate-700 after:scale-x-0 after:origin-center after:transition-transform after:duration-300">About</span>
                    </div>
                    <div className="relative">
                        <span className="hover:after:scale-x-100 after:rounded-lg after:content-[''] after:block after:h-0.5 after:bg-slate-700 after:scale-x-0 after:origin-center after:transition-transform after:duration-300">Sign Up</span>
                    </div>
                </div>


                <div className='flex flex-row gap-8' >
                    <div><SearchBar></SearchBar></div>
                    <div><FaRegHeart size={32} /></div>
                    <div> <CgShoppingCart size={38} /></div>


                </div>

            </div>

        </div>
    )
}

export default Navbar
import React from 'react'
import { Womensfashion } from './Womensfasion'
import Mensfasion from './Mensfasion'
import { Button } from "@/components/ui/button"

const Sidebar = () => {
    return (
        <>
            <div className=' flex-col inline-flex text-left ml-24 gap-2 mt-8'>
                <Womensfashion className=" "> </Womensfashion>
               
                <Mensfasion></Mensfasion>
                

                {/* rest of the options */}

                <Button variant="ghost" className="justify-start">Electroincs</Button>
                <Button variant="ghost" className="justify-start">Home & Lifestyle </Button>
                <Button variant="ghost" className="justify-start">Medicine </Button>
                <Button variant="ghost" className="justify-start">Sports & Outdoor </Button>
                <Button variant="ghost" className="justify-start">Boy's & Toys </Button>
                <Button variant="ghost" className="justify-start">Groceries & Pets</Button>
                <Button variant="ghost" className="justify-start">Health & Beauty</Button>
            </div>
        </>
    )
}

export default Sidebar
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const Mensfasion = () => {
    return ( 
        <>
            <Select>
                <SelectTrigger className="w-[180px] ml-1 font-medium">
                    <SelectValue placeholder="Men's Fashion" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

        </>
    )
}

export default Mensfasion
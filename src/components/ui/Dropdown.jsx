import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AiOutlineDown } from "react-icons/ai";

export default function DropdownExample() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="inline-flex items-center px-8 py-1 bg-black rounded-s   focus:outline-none focus:ring-2 ">
        English  
        <AiOutlineDown  className="ml-4"/>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="min-w-[150px] bg-black rounded-sm shadow-md p-1"
        align="start"
      >
        <DropdownMenu.Item
          className="flex items-center px-3 py-2 text-sm rounded-sm cursor-pointer hover:bg-black"
        >

          ಕನ್ನಡ
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="flex items-center px-3 py-2 text-sm rounded-sm cursor-pointer hover:bg-black"
        >
          Hindi
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="flex items-center px-3 py-2 text-sm rounded-sm cursor-pointer hover:bg-black"
        >
          Malayalam
        </DropdownMenu.Item>
        
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

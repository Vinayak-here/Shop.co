import * as React from "react";

import {
  Select,
  SelectContent,
  
  SelectItem,
  
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Womensfashion() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[180px] ml-1  font-medium">
          <SelectValue placeholder="Women's Fashion" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

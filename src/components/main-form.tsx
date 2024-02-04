"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

export default function MainForm() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/place/${inputVal}`);
  };

  return (
    <>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <div className="max-w-md ">
          <div className="relative">
            <Input
              className="pl-10 pr-20 rounded-full font-barlow"
              placeholder="Wpisz nazwę miasta"
              type="search"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <Button
              className="absolute top-0 right-0 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
              type="submit"
            >
              <SearchIcon className="w-16 h-16 text-white rounded-full bg-muala" />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

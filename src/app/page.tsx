"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/place/${inputVal}`);
  };
  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      <form className="flex items-center gap-4" onSubmit={handleSubmit}>
        <SearchIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        <Input
          className="flex-1"
          placeholder="Search for restaurants..."
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <Button variant="outline">Search</Button>
      </form>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

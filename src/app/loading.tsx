import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-row items-center justify-center h-screen center-object  text-muala">
        <Button disabled className="h-32 w-32">
          <Loader2 className="mr-2 h-16 w-16 animate-spin" />
        </Button>
    </div>
  );
}

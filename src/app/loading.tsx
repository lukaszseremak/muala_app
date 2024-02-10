import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full align-middle center-object text-muala text-center">
      <Loader2 className="h-16 w-16 animate-spin" />
      <p>Ładowanie. Proszę czekać...</p>
    </div>
  );
}
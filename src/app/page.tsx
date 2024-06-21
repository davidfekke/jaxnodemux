import Image from "next/image";
import { AlertButton } from "@/components/AlertButton";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white text-black">
      <h1 className="text-4xl font-bold">JaxNode Video</h1>
      <div>
        <p>Add a Live Stream video</p> 
        <AlertButton />
      </div>
    </main>
  );
}

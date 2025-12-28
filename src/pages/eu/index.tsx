import { SidenavItem } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-background">
      <div className="container mx-auto flex min-h-screen p-4 font-body">
        <div className="w-48 min-h-full flex flex-col">
          <div className="min-h-1/3 flex justify-center items-center">
            <Image
              src="/assets/logo/polavinhozinho.png"
              alt="Description of the image"
              width={125}
              height={125}
            />
          </div>
          <div className="h-2/3">
            <SidenavItem path="eu">eu</SidenavItem>
            <SidenavItem path="blog">blog</SidenavItem>
            <SidenavItem path="livros">livros</SidenavItem>
          </div>
        </div>
      </div>
    </div>
  );
}

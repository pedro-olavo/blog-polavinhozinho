import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen p-4 bg-background font-body">
      <main className="flex-1 flex flex-col justify-center items-center">
        <Image
          src="/assets/misc/aviso.png"
          alt="Description of the image"
          width={400}
          height={400}
        />
        <Link href="/eu">
          <h1 className="font-title text-6xl text-sienna-600 tracking-tighter underline">
            entrar
          </h1>
        </Link>
        <p className="text-lg text-gravy-gray-600 tracking-tighter font-light">
          feito apenas para computadores
        </p>
      </main>

      <footer>
        image by{" "}
        <a
          href="https://humantooth.neocities.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sienna-600 underline"
        >
          humantooth
        </a>
      </footer>
    </div>
  );
}

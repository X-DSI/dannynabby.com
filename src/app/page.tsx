import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-r from-superlight-lavender from-20% via-lavender via-60% md:via-50% to-dark-lavender to-100% ">
      <div className="flex items-center justify-center h-screen">
        <div className="flex">
          <div className="font-niconne text-lg">Danny</div>
          <div>&</div>
          <div className="">Abby</div>
        </div>
      </div>
    </main>
  );
}

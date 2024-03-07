import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-gradient-to-r from-superlight-lavender from-20% via-lavender via-60% to-dark-lavender to-100% ">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="invisible md:visible">
          <Image
            src="/Right Arc (Main).png"
            alt="Lavender Flora"
            width={580.41}
            height={333.46}
            className="rotate-[29.68deg] drop-shadow-xl"
          />
        </div>
        <div className="flex gap-4">
          <div className="font-niconne text-[48px] md:text-[102px]">Danny </div>
          <div className="font-inika text-[48px] md:text-[102px]"> & </div>
          <div className="font-niconne text-[48px] md:text-[102px]"> Abby</div>
        </div>
        <div className="text-[24px] md:text-[48px] font-thin pb-6">
          MARCH 10, 2024
        </div>
        <div className="flex gap-3">
          <div className="rounded-md border-2 border-[#5B6345] text-[#5B6345] text-[15px] md:text-2xl p-2 font-semibold text-center">
            <Link href="https://maps.app.goo.gl/qviaTXu6zU6pnwk98">
              Location
            </Link>
          </div>
          <div className="rounded-md border-2 border-[#5B6345] text-[#5B6345] text-[15px] md:text-2xl p-2 font-semibold text-center">
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Live Stream
            </Link>
          </div>
        </div>
        <div className="visible md:hidden">
          <Image
            src="/Right Arc (Main).png"
            alt="Lavender Flora"
            width={580.41}
            height={333.46}
            className="drop-shadow-xl"
          />
        </div>
      </div>
    </main>
  );
}

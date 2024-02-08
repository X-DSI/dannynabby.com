export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-r from-superlight-lavender from-20% via-lavender via-60% md:via-50% to-dark-lavender to-100% ">
      <div className="flex flex-col items-center justify-center h-screen">
        <div></div>
        <div className="flex">
          <div className="font-niconne text-[102px]">Danny</div>
          <div className="font-inika text-[102px] text-[#5B6345]">&</div>
          <div className="font-niconne text-[102px]">Abby</div>
        </div>
        <div className="text-[48px] font-thin pb-6">MARCH 10, 2024</div>
        <div className="rounded-md border-2 border-[#5B6345] text-[#5B6345] text-2xl p-2 font-semibold">
          More details soon...
        </div>
      </div>
    </main>
  );
}

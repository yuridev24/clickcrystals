'use client'

import Image from "next/image";
import cc from "@/public/cc-home.png"
import { Container } from "@/components/ui/Container";

export default function Ingame() {
  return (
    <section className="py-4">
      <div className="py-6 px-4 flex flex-row justify-center">
        <div className="px-0 md:px-6">
          <div className="w-full flex flex-row justify-center px-6">
            <Image src={cc} alt="ClickCrystals Client Menu" className="rounded-lg" />
          </div>
          <h1 className="text-center text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl my-6">
            Look the <span className="text-blue-600">ClickCrystals GUI</span>
            <br />
            but there&apos;s <span className="text-blue-600">MORE</span>, inside!
          </h1>
          <div className="w-full flex flex-row justify-center">
            <p className="text-gray-500 font-normal m-0 text-center max-w-4xl">
              Built-in modules, ClickScript, built-in online library to download ClickScripts and directly use them. Give us a try and then ask yourself how you lived without it.
            </p>
          </div>
          <div className="text-gray-500 text-sm my-4 italic text-center">P.s. DrDonut loves this mod</div>
          <div className="flex flex-row gap-4 justify-center">
            <Container tapScale={0.95}>
              <a href="https://clickcrystals.xyz/download" className="btn border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white font-semibold px-6 px-5.5 py-2.5 shadow-none text-sm">Get ClickCrystals!</a>
            </Container>
            <Container tapScale={0.95}>
              <a href="#" className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] font-semibold px-6 px-5.5 py-2.5 shadow-none text-white text-sm">More screenshots</a>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image"

import modrinth from "@/public/icons/modrinth.svg"
import curseforge from "@/public/icons/curseforge.svg"
import planetmc from "@/public/icons/planetmc.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DownloadLink } from "./DownloadLink"

export default function Download() {
  return (
    <section className="my-12 mx-6 md:mx-24">
      <div className="py-0 ">
        <div className="place-self-center">
          <h1 className="text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
            Download <span className="text-blue-600">ClickCrystals</span>
          </h1>
          <p className="text-gray-500 font-normal max-w-4xl my-3">
            Our official downloads are available on CurseForge, PlanetMC and GitHub. ClickCrystals has been discontinued on Modrinth. Please refrain from downloading ClickCrystals from any other website other than listed here.
          </p>
          <div className="flex gap-2">
            <DownloadLink link="#" label="CurseForge" border="#ff7547" bg="#f16436" hoverbg="#df582c" icon={<Image src={curseforge} width={20} height={20} alt="CurseForge" className="size-5 mr-2" />} />
            <DownloadLink link="#" label="Modrinth" border="#3eb326" bg="#39a822" hoverbg="#2d8a1a" icon={<Image src={modrinth} width={20} height={20} alt="Modrinth" className="size-5 mr-2" />} />
            <DownloadLink link="#" label="GitHub" border="#3c444b" bg="#202529" hoverbg="#181b1f" icon={<FontAwesomeIcon icon={faGithub} className="size-[20px] mr-2" />} />
            <DownloadLink link="#" label="PlanetMC" border="#2697b3" bg="#1f86a0" hoverbg="#126377" icon={<Image src={planetmc} width={20} height={20} alt="PlanetMC" className="size-5 mr-2" />} />
          </div>
        </div>
      </div>
    </section>
  )
}
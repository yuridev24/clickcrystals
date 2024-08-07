import Image from 'next/image'
import clickcrystalsLogo from "@/public/icon.png";

export const Title = () => {
  return (
    <a href="/" className="items-center flex">
      <span className="font-bold text-white ml-2 self-center text-xl whitespace-nowrap mt-2">
        <Image alt="ClickCrystals" className="size-8 inline-block mr-2 rounded-lg" height={50} width={50} src={clickcrystalsLogo} />
        ClickCrystals
      </span>
    </a>
  )
}

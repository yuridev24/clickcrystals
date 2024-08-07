'use client'

import { Container } from "@/components/ui/Container";

type DownloadLinkProps = {
  label: string;
  icon: any;
  border: string;
  bg: string;
  hoverbg: string;
  link: string;
}

export const DownloadLink = ({ label, icon, border, bg, hoverbg, link }: DownloadLinkProps) => {
  return (
    <Container tapScale={0.95}>
      <a href={link} className={`btn border-[${border}] bg-[${bg}] hover:bg-[${hoverbg}] text-white font-semibold px-5 py-2.5 shadow-none text-sm`}>
        {icon} {label}
      </a>
    </Container>
  )
}

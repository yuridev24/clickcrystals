"use client"

import { DropLink } from "./DropLink"
import { NavLink } from "./NavLink"

const downloadDropdown = [
  {
    "label": "Official",
    "url": "#",
  },
  {
    "label": "PlanetMinecraft",
    "url": "#",
    "seperate": true
  },
  {
    "label": "CurseForge",
    "url": "#"
  },
  {
    "label": "GitHub Releases",
    "url": "#"
  },
  {
    "label": "Modrinth",
    "url": "#",
    "seperate": true
  }
]

const moreDropdown = [
  {
    "label": "Help",
    "url": "#"
  },
  {
    "label": "Gallery",
    "url": "#"
  },
  {
    "label": "Tools",
    "url": "#"
  },
  {
    "label": "Other Projects",
    "url": "#",
    "seperate": true
  },
]

export const links = [
  <NavLink label="Home" url="#" />,
  <DropLink label="Download" links={downloadDropdown} url="https://clickcrystals.xyz/download" key={1} />,
  <NavLink label="Wiki" url="#" />,
  <DropLink label="More" links={moreDropdown} url="#" />
]

export const Nav = () => {
  return (
    <>
      <nav className="w-full md:w-auto text-slate-200 h-[calc(100vh-72px)] hidden items-center md:flex md:h-auto md:mx-5 md:overflow-visible overflow-y-auto">
        <ul className="w-full md:w-auto flex flex-col md:flex-row md:pt-0 md:self-center md:text-base pt-8 text-xl">
          {links}
        </ul>
      </nav>
    </>
  )
}

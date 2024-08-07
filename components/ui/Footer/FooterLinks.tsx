import FooterInfo from "./FooterInfo";

const footerLinks = [
  {
    title: "Pages",
    links: [
      { name: "Home", url: "#" },
      { name: "Downloads", url: "https://clickcrystals.xyz/download" },
      { name: "Gallery", url: "#" },
      { name: "Other Projects", url: "#" },
      { name: "Help", url: "#" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "ClickScript Wiki", url: "#" },
      { name: "Script Formatter", url: "#" },
      { name: "API Tools", url: "#" }
    ]
  },
  {
    title: "Community",
    links: [
      { name: "Discord", url: "#" },
      { name: "GitHub", url: "#" },
      { name: "YouTube", url: "#" }
    ]
  },
  {
    title: "Download",
    links: [
      { name: "PlanetMC", url: "#" },
      { name: "CurseForge", url: "#" },
      { name: "GitHub", url: "#" },
      { name: "Modrinth", url: "#" }
    ]
  }
];

export default function FooterLinks() {
  return (
    <div className="bg-blue-500">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="px-4 lg:px-6 py-6 lg:py-8 mx-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-lg font-extrabold text-gray-100">{section.title}</h2>
              <ul className="text-white font-medium">
                {section.links.map((link, linkIndex) => (
                  <li className="mb-4" key={linkIndex}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}

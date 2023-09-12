import { githubLogoSvgData } from "../../public/graphics";

export default function Footer() {
  return (
    <footer className="text-center h-8 bg-red-800 text-white font-thin">
      <span>Made with love by </span>
      <a
        href="https://github.com/calumbell"
        target="_blank"
        className="hover:underline"
      >
        <span className="font-normal">Calum</span>
        <svg
          className="ml-1 h-full inline fill-white bg-transparent rounded-3xl"
          {...githubLogoSvgData.attributes}
        >
          {githubLogoSvgData.paths.map((path, i) => (
            <path {...path} key={i} />
          ))}
        </svg>
      </a>
    </footer>
  );
}

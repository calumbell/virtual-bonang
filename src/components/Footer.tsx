import { githubLogoSvgData } from "../../public/graphics";

export default function Footer() {
  return (
    <footer
      className="text-center h-8 bg-red-800 text-white font-thin"
      aria-label="footer"
    >
      <span>Made with love by </span>
      <a
        href="https://github.com/calumbell"
        target="_blank"
        className="hover:underline"
        aria-label="Link to Calum's GitHub page"
      >
        <span className="font-normal">Calum</span>
        {/* GitHub logo */}
        <svg
          className="ml-1 h-full inline fill-white bg-transparent rounded-3xl"
          aria-hidden="true"
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

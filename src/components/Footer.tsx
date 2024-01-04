import { Icon } from "@/components";
import { githubLogoSvgData } from "../../public/graphics";

export default function Footer() {
  return (
    <footer
      className="text-center h-4 xs:h-8 text-xs bg-red-800 text-white font-thin"
      aria-label="footer"
    >
      <span>Made with love by </span>
      <a
        href="https://github.com/calumbell"
        target="_blank"
        className="hover:underline"
        aria-label="Link to Calum's GitHub page"
        tabIndex={0}
      >
        <span className="font-normal">Calum</span>
        {/* GitHub logo */}
        <Icon
          svgData={githubLogoSvgData}
          className="ml-1 h-full inline fill-white bg-transparent rounded-3xl"
        />
      </a>
    </footer>
  );
}

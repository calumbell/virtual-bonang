import { MutableRefObject } from "react";

interface IconProps {
  svgData: {
    attributes: {
      xmlns: string;
      viewBox: string;
    };
    paths: string[];
  };
  className: string;
  svgRef?: MutableRefObject<SVGSVGElement | null>;
}

export default function Icon({ svgData, className, svgRef }: IconProps) {
  return (
    <svg
      {...svgData.attributes}
      className={className}
      aria-hidden="true"
      ref={svgRef}
    >
      {svgData.paths.map((path, i) => (
        <path d={path} className="transition-all" key={i} />
      ))}
    </svg>
  );
}

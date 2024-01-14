import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface IconProps {
  svgData: {
    attributes: {
      xmlns: string;
      viewBox: string;
    };
    paths: string[];
  };
  className: string;
  refCallback: Dispatch<SetStateAction<SVGSVGElement | null>>;
}

export default function Icon({ svgData, className, refCallback }: IconProps) {
  const ref = refCallback ? (svg: SVGSVGElement) => refCallback(svg) : null;
  return (
    <svg
      {...svgData.attributes}
      className={className}
      aria-hidden="true"
      ref={ref}
    >
      {svgData.paths.map((path, i) => (
        <path d={path} className="transition-all" key={i} />
      ))}
    </svg>
  );
}

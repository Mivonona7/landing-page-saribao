import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  footer?: boolean;
};

export function Brand({ footer = false }: BrandProps) {
  return (
    <Link
      aria-label="Saribao — accueil"
      className={`brand${footer ? " brand-footer" : ""}`}
      href="/#accueil"
    >
      <Image
        alt=""
        className="brand-logo"
        height={44}
        priority={!footer}
        src="/logos/charbon.png"
        width={44}
      />
      <span className="brand-text">
        <span className="brand-name">Saribao</span>
        <span className="brand-caption">Gestion de commerce</span>
      </span>
    </Link>
  );
}

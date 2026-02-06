import { memo } from "react";
import { SocialLinkProps } from "../../types";

const SocialLink = memo(
  ({
    href,
    icon,
    label,
    className = "text-white hover:text-blue-400 transition-all duration-300 hover:scale-110",
  }: SocialLinkProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      {icon}
    </a>
  ),
);

SocialLink.displayName = "SocialLink";

export default SocialLink;

import { memo } from "react";
import { SocialLinkProps } from "../../types";

const SocialLink = memo(
  ({ href, icon, label, className = "" }: SocialLinkProps) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        text-gray-500 
        hover:text-blue-600 
        transition-all duration-200 
        hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-blue-500 rounded
        ${className}
      `}
    >
      {icon}
    </a>
  ),
);

SocialLink.displayName = "SocialLink";

export default SocialLink;

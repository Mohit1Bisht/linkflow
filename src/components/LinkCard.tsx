
import React from "react";
import { Link } from "../types";
import { Instagram, Video, Mail, Image, Globe, Phone } from "lucide-react";

interface LinkCardProps {
  link: Link;
}

const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  // Map of available icons
  const iconMap = {
    instagram: Instagram,
    video: Video,
    mail: Mail,
    image: Image,
    globe: Globe,
    phone: Phone,
  };

  // Get icon component or default to Globe
  const IconComponent = link.icon && iconMap[link.icon as keyof typeof iconMap] 
    ? iconMap[link.icon as keyof typeof iconMap] 
    : Globe;

  const colorClasses = {
    purple: "from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 border-purple-600/30",
    blue: "from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border-blue-600/30",
    pink: "from-pink-500/20 to-rose-500/20 hover:from-pink-500/30 hover:to-rose-500/30 border-pink-600/30",
    green: "from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border-green-600/30",
    yellow: "from-yellow-500/20 to-amber-500/20 hover:from-yellow-500/30 hover:to-amber-500/30 border-yellow-600/30",
    orange: "from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border-orange-600/30",
  };

  const iconColors = {
    purple: "text-link-purple",
    blue: "text-link-blue",
    pink: "text-link-pink",
    green: "text-link-green",
    yellow: "text-link-yellow",
    orange: "text-link-orange",
  };

  const colorClass = link.color ? colorClasses[link.color] : colorClasses.blue;
  const iconColor = link.color ? iconColors[link.color] : iconColors.blue;

  return (
    <a 
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card rounded-xl p-4 flex items-center w-full
                 bg-gradient-to-br ${colorClass} backdrop-blur-md
                 border hover:shadow-lg transition-all duration-300
                 pulse-animation link-shine-effect group`}
    >
      <div className={`mr-3 ${iconColor} group-hover:scale-110 transition-transform`}>
        <IconComponent size={20} />
      </div>
      <span className="font-medium text-white">{link.title}</span>
    </a>
  );
};

export default LinkCard;

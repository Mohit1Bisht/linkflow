
import React from "react";
import { Link } from "../types";
import LinkCard from "./LinkCard";

interface GridLayoutProps {
  links: Link[];
}

const GridLayout: React.FC<GridLayoutProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full px-6 mx-auto">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
};

export default GridLayout;

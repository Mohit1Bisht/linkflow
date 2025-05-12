
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Apple } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 w-full max-w-7xl mx-auto">
      <div className="glass-card rounded-xl p-10 mb-8">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["Blog", "Engineering Blog", "Marketplace", "What's New", "About", "Careers", "Link In Bio", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {["LinkFlow for Enterprise", "2023 Creator Report", "2022 Creator Report", "Creator Directory", "What's Trending", "Explore Templates"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Topics", "Getting Started", "LinkFlow Pro", "Features & How-Tos", "FAQs", "Report a Violation"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trust & Legal</h3>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Notice", "Cookie Notice", "Trust Center", "Cookie Preferences", "Transparency Report"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Auth and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          {/* Authentication Buttons */}
          <div className="flex gap-4 mb-6 md:mb-0">
            <Button variant="outline" className="rounded-full px-8 py-2 text-white border-white/20 hover:bg-white/10">
              Log in
            </Button>
            <Button className="rounded-full px-8 py-2 bg-gradient-to-r from-link-purple to-link-blue hover:opacity-90">
              Get started for free
            </Button>
          </div>

          {/* Download and Social Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {/* App Store */}
            <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10">
              <Apple className="w-5 h-5" />
            </Button>
            
            {/* Social Media Icons */}
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "Youtube" }
            ].map(({ Icon, label }) => (
              <Button 
                key={label} 
                variant="outline" 
                size="icon" 
                className="rounded-full border-white/20 hover:bg-white/10"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs pb-8">
        <p>© 2025 LinkFlow. All rights reserved.</p>
        <p className="mt-1 flex items-center justify-center gap-1">
          Created with
          <span className="text-pink-400">❤️</span>
          with Lovable
        </p>
      </div>
    </footer>
  );
};

export default Footer;

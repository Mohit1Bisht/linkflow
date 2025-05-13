
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      // In a real app, this would create a new profile or check if username exists
      navigate("/links");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row items-center">
          {/* Hero section with gradient silhouette and text */}
          <div className="w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
            {/* Left side - Silhouette image */}
            <div className="w-full md:w-1/2 relative">
              <div className="w-3/4 aspect-square bg-gradient-to-br from-link-blue to-teal-400 rounded-full blur-xl opacity-80 absolute -left-10"></div>
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-link-blue rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transform rotate-6"></div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0 text-center md:text-left md:pl-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Jumpstart your corner of the internet today
              </h1>
              
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
                <div className="flex-1">
                  <div className="relative">
                    <Input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-white text-black rounded-lg text-lg px-5 py-7 w-full"
                      placeholder="linkflow/"
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="rounded-lg bg-[#d0f85c] hover:bg-[#c7ef4c] text-black font-medium px-6 py-7 text-lg"
                >
                  Create Your Digital Universe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

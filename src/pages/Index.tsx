
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import GridLayout from "../components/GridLayout";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { profileData } from "../data/profileData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <div className="min-h-screen flex flex-col items-center justify-start py-8 pt-24">
        <div className="w-full max-w-3xl flex flex-col items-center">
          <ProfileHeader profile={profileData} />
          <div className="mt-8 w-full">
            <GridLayout links={profileData.links} />
          </div>
          <div className="mt-10">
            <Link to="/">
              <Button className="rounded-full px-8 py-2 bg-gradient-to-r from-link-purple to-link-blue hover:opacity-90">
                Back to home page
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;

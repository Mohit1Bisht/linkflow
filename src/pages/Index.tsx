
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import GridLayout from "../components/GridLayout";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { profileData } from "../data/profileData";

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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;

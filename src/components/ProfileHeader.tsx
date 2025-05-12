
import React from "react";
import { Profile } from "../types";

interface ProfileHeaderProps {
  profile: Profile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-6 text-center">
      <div className="relative mb-4">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-24 h-24 rounded-full border-2 border-white/20 object-cover shadow-lg animate-float"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl -z-10"></div>
      </div>
      
      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-hero-gradient mb-1">
        {profile.name}
      </h1>
      
      <p className="text-sm text-gray-300 mb-2">
        {profile.username}
      </p>
      
      <p className="text-gray-400 max-w-md px-6">
        {profile.bio}
      </p>
    </div>
  );
};

export default ProfileHeader;

import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 bg-card rounded-3xl p-8 text-center lg:sticky lg:top-5 transition-all">
      <div className="relative w-full pt-[100%] bg-[#2e2626] rounded-xl overflow-hidden mb-6 shadow-lg">
        <img
          src="/images/belite.jpeg"
          alt="Mushikiwabo Bat Belite"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-transform hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-medium mb-2">
        Mushikiwabo Bat <span className="text-primary">Belite</span>
      </h3>
      <p className="text-gray-400 mb-8">Software Developer</p>
      <Link
        to="/cv"
        className="inline-block bg-primary text-dark px-8 py-3 rounded-lg font-bold uppercase text-sm transition-all hover:bg-[#c77b7b] hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
      >
        Download CV
      </Link>
    </aside>
  );
};

export default ProfileCard;

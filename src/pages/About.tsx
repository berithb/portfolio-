import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <section className="mb-20">
        <p className="text-lg text-gray-400 mb-4">
          Hello, I'm a <span className="text-primary">Software Developer</span>
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-12 max-w-2xl">
          Certified Software Developer Based in Kigali, Rwanda
        </h1>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
          <div>
            <span className="text-5xl md:text-6xl font-bold block">
              8<span className="text-3xl align-top">+</span>
            </span>
            <span className="text-xl text-gray-400">Years</span>
          </div>
          <div>
            <span className="text-5xl md:text-6xl font-bold block">
              96<span className="text-3xl align-top">+</span>
            </span>
            <span className="text-xl text-gray-400">Projects</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl text-gray-400 mb-6">About Me</h2>
        <p className="text-2xl font-light max-w-3xl leading-relaxed">
          I specialize in software development, focusing on creating efficient, user-friendly solutions.
        </p>
      </section>
    </>
  );
};

export default About;

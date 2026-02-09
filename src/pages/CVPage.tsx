import React from 'react';

const CVPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 md:p-12 rounded-lg shadow-xl">
      <header className="mb-8 border-b-2 border-gray-300 pb-6">
        <h1 className="text-4xl font-bold mb-4">Mushikiwabo Bat Belite</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <p>📍 KIGALI CITY, KICUKIRO</p>
          <p>📞 +250788775608</p>
          <p>✉️ batybelite12@gmail.com</p>
          <p>🔗 <a href="https://linkedin.com/in/mushikiwabo-belite-3a99372b9" className="text-blue-600 hover:underline">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/berithb" className="text-blue-600 hover:underline">GitHub</a></p>
          <p>🌐 <a href="https://bportofolio.netlify.app" className="text-blue-600 hover:underline">Portfolio</a></p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">EXPERIENCE</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Frontend Developer (Internship)</h3>
              <p className="text-gray-600">Uruti Hub Gikondo</p>
            </div>
            <span className="text-sm text-gray-500">04/2024 – Present</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Collaborated on UI design and implemented responsive interfaces using HTML, CSS, and JavaScript.</li>
            <li>Developed dynamic features and reusable components in React (and Vue.js when needed).</li>
            <li>Integrated frontend with backend APIs using React Query for efficient data handling.</li>
            <li>Ensured UI/UX best practices, accessibility, and cross-browser compatibility.</li>
            <li>Optimized performance and maintained clean, modular, well-documented code.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Event Planner</h3>
              <p className="text-gray-600">Self-employed / Contract, Kigali, Rwanda</p>
            </div>
            <span className="text-sm text-gray-500">2023 – Present</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Coordinate activities and manage logistics for various events to ensure successful execution.</li>
            <li>Handle appointment setting and maintain clear, effective communication with clients throughout the planning process.</li>
            <li>Leverage organizational skills to manage time and resources efficiently across multiple projects.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">AI Research Intern</h3>
              <p className="text-gray-600">Waga vacAi / Ai Tools, Kigali, Rwanda / Online</p>
            </div>
            <span className="text-sm text-gray-500">03/2024 – 04/2024</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Conducted research on cutting-edge AI technologies and techniques, including reinforcement learning, generative adversarial networks (GANs), and transfer learning.</li>
            <li>Implemented and evaluated novel machine learning algorithms and models for specific research projects.</li>
            <li>Collaborated with senior researchers to brainstorm ideas, design experiments, and analyze results.</li>
            <li>Assisted in the development of AI software prototypes and proof-of-concept implementations.</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">Management Intern</h3>
              <p className="text-gray-600">Kigali Appline, Kigali, Rwanda</p>
            </div>
            <span className="text-sm text-gray-500">05/2023 – 08/2023</span>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Gained hands-on experience in business management and operations.</li>
            <li>Supported the team with daily administrative tasks and project coordination.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">EDUCATION</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">A2 in Software Development</h3>
              <p className="text-gray-600">COG High School, Kigali, Rwanda</p>
            </div>
            <span className="text-sm text-gray-500">09/2022 – 07/2025</span>
          </div>
          <p className="text-sm">Relevant Coursework: Software Development, Programming.</p>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-semibold">AI Certificate</h3>
              <p className="text-gray-600">ALX, Kigali Rwanda</p>
            </div>
            <span className="text-sm text-gray-500">03/2024 – 04/2024</span>
          </div>
          <p className="text-sm">Completed intensive training focused on Artificial Intelligence applications.</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-primary">SKILLS</h2>
        
        <div className="space-y-3 text-sm">
          <div>
            <strong className="font-semibold">Computer Skills:</strong> Adobe Illustrator, Adobe Photoshop.
          </div>
          <div>
            <strong className="font-semibold">Technical Skills:</strong> React, TypeScript, Node.js, Express.js, MongoDB, MySQL, Artificial Intelligence, Machine Learning, Data Science, HTML, CSS, Software Development, Reinforcement Learning, Transfer Learning.
          </div>
          <div>
            <strong className="font-semibold">Foreign Language Skills:</strong> English (Advanced), Kinyarwanda (Native).
          </div>
          <div>
            <strong className="font-semibold">Other Skills:</strong> Appointment Setting, Client Communication, Event Coordination, Project Management, Strategic Planning, Research Methodology.
          </div>
        </div>
      </section>

      <div className="mt-8 pt-6 border-t-2 border-gray-300 text-center">
        <button 
          onClick={() => window.print()} 
          className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-[#c77b7b] transition-all"
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
};

export default CVPage;

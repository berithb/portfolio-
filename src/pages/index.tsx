import React from 'react';
import { Code2, Brain, Palette, Rocket, Phone, Mail, MapPin } from 'lucide-react';

export const Services: React.FC = () => (
  <div>
    <h2 className="text-4xl font-medium mb-12">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-dark rounded-3xl p-10 flex flex-col justify-between min-h-[250px] hover:-translate-y-2 transition-all">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-3">Frontend Development</h3>
          <p className="text-gray-300 mb-5">Building responsive, modern web applications using React, TypeScript, and cutting-edge frontend technologies.</p>
        </div>
        <a href="#" className="text-gray-100 border-b border-gray-100 pb-1 self-start hover:text-primary hover:border-primary transition-colors">Learn more →</a>
      </div>

      <div className="bg-dark rounded-3xl p-10 flex flex-col justify-between min-h-[250px] hover:-translate-y-2 transition-all">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-3">UI/UX Design</h3>
          <p className="text-gray-300 mb-5">Creating intuitive user interfaces with Adobe Illustrator and Photoshop, ensuring accessibility and best practices.</p>
        </div>
        <a href="#" className="text-gray-100 border-b border-gray-100 pb-1 self-start hover:text-primary hover:border-primary transition-colors">Learn more →</a>
      </div>

      <div className="bg-dark rounded-3xl p-10 flex flex-col justify-between min-h-[250px] hover:-translate-y-2 transition-all">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-3">AI & Machine Learning</h3>
          <p className="text-gray-300 mb-5">Implementing AI solutions, reinforcement learning, GANs, and transfer learning for innovative applications.</p>
        </div>
        <a href="#" className="text-gray-100 border-b border-gray-100 pb-1 self-start hover:text-primary hover:border-primary transition-colors">Learn more →</a>
      </div>

      <div className="bg-dark rounded-3xl p-10 flex flex-col justify-between min-h-[250px] hover:-translate-y-2 transition-all">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-3">Event Planning</h3>
          <p className="text-gray-300 mb-5">Professional event coordination and management with strategic planning and client communication expertise.</p>
        </div>
        <a href="#" className="text-gray-100 border-b border-gray-100 pb-1 self-start hover:text-primary hover:border-primary transition-colors">Learn more →</a>
      </div>
    </div>
  </div>
);

export const Resume: React.FC = () => (
  <div>
    <h2 className="text-4xl font-medium mb-12">Resume</h2>
    
    <div className="mb-16">
      <span className="inline-block bg-primary text-dark px-6 py-3 rounded-xl font-bold mb-8">Experience</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <div className="relative pl-6 border-l-2 border-primary">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
          <span className="block text-lg font-bold text-primary mb-2">04/2024 – Present</span>
          <h3 className="text-lg">Frontend Developer (Internship) - Uruti Hub Gikondo</h3>
        </div>
        <div className="relative pl-6 border-l-2 border-primary">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
          <span className="block text-lg font-bold text-primary mb-2">2023 – Present</span>
          <h3 className="text-lg">Event Planner - Self-employed, Kigali</h3>
        </div>
        <div className="relative pl-6 border-l-2 border-primary">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
          <span className="block text-lg font-bold text-primary mb-2">03/2024 – 04/2024</span>
          <h3 className="text-lg">AI Research Intern - Waga vacAi</h3>
        </div>
        <div className="relative pl-6 border-l-2 border-primary">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
          <span className="block text-lg font-bold text-primary mb-2">05/2023 – 08/2023</span>
          <h3 className="text-lg">Management Intern - Kigali Appline</h3>
        </div>
      </div>
    </div>

    <div>
      <span className="inline-block bg-primary text-dark px-6 py-3 rounded-xl font-bold mb-8">Education</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        <div className="relative pl-6 border-l-2 border-primary">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
          <span className="block text-lg font-bold text-primary mb-2">09/2022 – 07/2025</span>
          <h3 className="text-lg">A2 in Software Development - COG High School</h3>
        </div>
        <div className="relative pl-6 border-l-2 border-primary">
          <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
          <span className="block text-lg font-bold text-primary mb-2">03/2024 – 04/2024</span>
          <h3 className="text-lg">AI Certificate - ALX, Kigali</h3>
        </div>
      </div>
    </div>
  </div>
);

export const Skills: React.FC = () => (
  <div>
    <h2 className="text-4xl font-medium mb-12">Skills</h2>
    
    <div className="mb-12">
      <h3 className="text-xl font-bold bg-tag inline-block px-6 py-3 rounded-xl mb-8">Core Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {['React', 'TypeScript', 'JavaScript', 'Node.js', 'HTML/CSS', 'Git'].map(skill => (
          <div key={skill} className="bg-card p-5 rounded-xl text-center font-semibold hover:bg-primary hover:text-dark transition-all cursor-pointer">
            {skill}
          </div>
        ))}
      </div>
    </div>

    <div className="mb-12">
      <h3 className="text-xl font-bold bg-tag inline-block px-6 py-3 rounded-xl mb-8">Tech Stack</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: 'Frontend', tools: 'React, Vue.js, Tailwind CSS, React Query' },
          { name: 'Backend', tools: 'Node.js, Express.js, MongoDB, MySQL' },
          { name: 'AI/ML', tools: 'Machine Learning, Reinforcement Learning, GANs' },
          { name: 'Design', tools: 'Adobe Illustrator, Adobe Photoshop, Figma' }
        ].map(item => (
          <div key={item.name} className="bg-card p-8 rounded-xl hover:-translate-y-1 transition-all">
            <h4 className="text-xl font-bold text-primary mb-2">{item.name}</h4>
            <p className="text-gray-400">{item.tools}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold bg-tag inline-block px-6 py-3 rounded-xl mb-6">Languages</h3>
        <div className="space-y-3">
          <div className="flex justify-between py-3 border-b border-gray-700">
            <span>English</span>
            <span className="text-primary">Advanced</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-700">
            <span>Kinyarwanda</span>
            <span className="text-primary">Native</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold bg-tag inline-block px-6 py-3 rounded-xl mb-6">Soft Skills</h3>
        <ul className="space-y-2 text-lg">
          <li>• Project Management</li>
          <li>• Client Communication</li>
          <li>• Event Coordination</li>
          <li>• Strategic Planning</li>
          <li>• Research Methodology</li>
        </ul>
      </div>
    </div>
  </div>
);

export const Blog: React.FC = () => (
  <div>
    <h2 className="text-4xl font-medium mb-8">Blog</h2>
    <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
      {['All', 'Technology', 'AI/ML', 'Web Dev', 'Design'].map(cat => (
        <button key={cat} className="bg-tag px-5 py-2 rounded-full text-sm hover:bg-primary hover:text-dark transition-all whitespace-nowrap">
          {cat}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { title: 'Getting Started with React and TypeScript', date: 'Feb 2025', category: 'Web Dev', slug: 'react-typescript' },
        { title: 'Understanding Machine Learning Basics', date: 'Jan 2025', category: 'AI/ML', slug: 'machine-learning' },
        { title: 'Modern UI/UX Design Principles', date: 'Jan 2025', category: 'Design', slug: 'ui-ux-design' },
        { title: 'Building Scalable Node.js Applications', date: 'Dec 2024', category: 'Technology', slug: 'nodejs-apps' }
      ].map((post, i) => {
        const icons = {
          'react-typescript': <Code2 size={64} />,
          'machine-learning': <Brain size={64} />,
          'ui-ux-design': <Palette size={64} />,
          'nodejs-apps': <Rocket size={64} />
        };
        return (
        <a key={i} href={`/blog/${post.slug}`} className="bg-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all cursor-pointer block">
          <div className="h-48 bg-gradient-to-br from-primary to-tag flex items-center justify-center text-white">
            {icons[post.slug as keyof typeof icons]}
          </div>
          <div className="p-6">
            <span className="text-sm text-gray-400">{post.date}</span>
            <h3 className="text-xl font-medium mt-2 mb-4">{post.title}</h3>
            <span className="text-primary font-semibold">Read more →</span>
          </div>
        </a>
      )})}
    </div>
  </div>
);

export const Contacts: React.FC = () => (
  <div>
    <h2 className="text-4xl font-medium text-primary mb-10">Contact Me</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
      <div className="bg-card rounded-2xl p-5 flex items-center gap-4">
        <Phone className="text-primary" size={24} />
        <div>
          <span className="font-bold">Phone:</span>
          <span className="ml-2">+250788775608</span>
        </div>
      </div>
      <div className="bg-card rounded-2xl p-5 flex items-center gap-4">
        <Mail className="text-primary" size={24} />
        <div>
          <span className="font-bold">Email:</span>
          <a href="mailto:batybelite12@gmail.com" className="ml-2 hover:text-primary transition-colors underline">batybelite12@gmail.com</a>
        </div>
      </div>
      <div className="bg-card rounded-2xl p-5 flex items-center gap-4 md:col-span-2">
        <MapPin className="text-primary" size={24} />
        <div>
          <span className="font-bold">Address:</span>
          <span className="ml-2">KIGALI CITY, KICUKIRO, Rwanda</span>
        </div>
      </div>
    </div>

    <div className="bg-card rounded-3xl p-10">
      <h3 className="text-2xl font-medium mb-8">Send me a message</h3>
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input type="text" placeholder="Your Name" className="bg-dark text-gray-100 p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" placeholder="Your Email" className="bg-dark text-gray-100 p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <input type="text" placeholder="Subject" className="w-full bg-dark text-gray-100 p-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-primary" />
        <textarea placeholder="Message" rows={6} className="w-full bg-dark text-gray-100 p-4 rounded-xl border-none outline-none resize-none focus:ring-2 focus:ring-primary"></textarea>
        <button type="submit" className="bg-primary text-dark px-8 py-3 rounded-xl font-bold hover:bg-[#c77b7b] transition-all">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

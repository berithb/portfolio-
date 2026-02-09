import React from 'react';
import { useParams, Link } from 'react-router-dom';

const blogPosts = {
  'react-typescript': {
    title: 'Getting Started with React and TypeScript',
    date: 'Feb 2025',
    category: 'Web Dev',
    content: `
      <h3>Why React and TypeScript?</h3>
      <p>React combined with TypeScript provides a powerful development experience. TypeScript adds static typing to JavaScript, catching errors early and improving code quality.</p>
      
      <h3>Setting Up Your Project</h3>
      <p>Use Vite for a fast development setup:</p>
      <pre>npm create vite@latest my-app -- --template react-ts</pre>
      
      <h3>Key Benefits</h3>
      <ul>
        <li>Type safety prevents runtime errors</li>
        <li>Better IDE support with autocomplete</li>
        <li>Easier refactoring and maintenance</li>
        <li>Self-documenting code</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>Always define interfaces for props and state. Use strict mode in tsconfig.json. Leverage TypeScript's utility types like Partial, Pick, and Omit.</p>
    `
  },
  'machine-learning': {
    title: 'Understanding Machine Learning Basics',
    date: 'Jan 2025',
    category: 'AI/ML',
    content: `
      <h3>What is Machine Learning?</h3>
      <p>Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.</p>
      
      <h3>Types of Machine Learning</h3>
      <ul>
        <li><strong>Supervised Learning:</strong> Training with labeled data</li>
        <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data</li>
        <li><strong>Reinforcement Learning:</strong> Learning through rewards and penalties</li>
      </ul>
      
      <h3>Common Algorithms</h3>
      <p>Linear Regression, Decision Trees, Neural Networks, and Support Vector Machines are fundamental algorithms every ML practitioner should understand.</p>
      
      <h3>Getting Started</h3>
      <p>Start with Python and libraries like scikit-learn, TensorFlow, or PyTorch. Practice on datasets from Kaggle to build your skills.</p>
    `
  },
  'ui-ux-design': {
    title: 'Modern UI/UX Design Principles',
    date: 'Jan 2025',
    category: 'Design',
    content: `
      <h3>Core Design Principles</h3>
      <p>Great UI/UX design focuses on user needs, accessibility, and intuitive interactions.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li><strong>Consistency:</strong> Maintain uniform design patterns</li>
        <li><strong>Hierarchy:</strong> Guide users with visual weight</li>
        <li><strong>Accessibility:</strong> Design for all users</li>
        <li><strong>Feedback:</strong> Provide clear system responses</li>
      </ul>
      
      <h3>Tools I Use</h3>
      <p>Adobe Illustrator and Photoshop for graphics, Figma for prototyping, and Tailwind CSS for implementation.</p>
      
      <h3>Mobile-First Approach</h3>
      <p>Always design for mobile first, then scale up. This ensures your design works on all devices and improves performance.</p>
    `
  },
  'nodejs-apps': {
    title: 'Building Scalable Node.js Applications',
    date: 'Dec 2024',
    category: 'Technology',
    content: `
      <h3>Why Node.js?</h3>
      <p>Node.js enables JavaScript on the server, allowing full-stack development with a single language.</p>
      
      <h3>Architecture Patterns</h3>
      <ul>
        <li><strong>MVC:</strong> Separate concerns for maintainability</li>
        <li><strong>Microservices:</strong> Break apps into smaller services</li>
        <li><strong>RESTful APIs:</strong> Standard communication protocol</li>
      </ul>
      
      <h3>Essential Tools</h3>
      <p>Express.js for routing, MongoDB or MySQL for databases, and JWT for authentication. Use PM2 for production deployment.</p>
      
      <h3>Performance Tips</h3>
      <p>Use async/await, implement caching with Redis, optimize database queries, and use clustering for multi-core systems.</p>
    `
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl mb-4">Post not found</h2>
        <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl">
      <Link to="/blog" className="text-primary hover:underline mb-6 inline-block">← Back to Blog</Link>
      <span className="text-sm text-gray-400 block mb-2">{post.date} • {post.category}</span>
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <div 
        className="prose prose-invert prose-primary max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
        style={{
          lineHeight: '1.8'
        }}
      />
      <style>{`
        .prose h3 { font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #d88b8b; }
        .prose p { margin-bottom: 1rem; color: #e5e5e5; }
        .prose ul { margin-left: 1.5rem; margin-bottom: 1rem; list-style: disc; }
        .prose li { margin-bottom: 0.5rem; color: #e5e5e5; }
        .prose pre { background: #2a2a2a; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1rem 0; }
        .prose strong { color: #d88b8b; font-weight: 600; }
      `}</style>
    </article>
  );
};

export default BlogPost;

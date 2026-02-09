import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import Navigation from './components/Navigation';
import About from './pages/About';
import Work from './pages/Work';
import CVPage from './pages/CVPage';
import BlogPost from './pages/BlogPost';
import { Services, Resume, Skills, Blog, Contacts } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cv" element={<CVPage />} />
        <Route path="/blog/:slug" element={
          <div className="min-h-screen bg-dark text-gray-100 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-5 py-10 lg:py-20">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <ProfileCard />
                <main className="flex-1">
                  <Navigation />
                  <BlogPost />
                </main>
              </div>
            </div>
          </div>
        } />
        <Route path="*" element={
          <div className="min-h-screen bg-dark text-gray-100 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-5 py-10 lg:py-20">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <ProfileCard />
                <main className="flex-1">
                  <Navigation />
                  <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contacts" element={<Contacts />} />
                  </Routes>
                </main>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

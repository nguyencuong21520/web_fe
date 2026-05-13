import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">MindX Hello</Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/')}>Trang chủ</Link>
          <Link to="/courses" className={isActive('/courses')}>Khóa học</Link>
          <Link to="/blog" className={isActive('/blog')}>Blog</Link>
          <Link to="/about" className={isActive('/about')}>Về chúng tôi</Link>
          <Link to="/contact" className={isActive('/contact')}>Liên hệ</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
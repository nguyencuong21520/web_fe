import { Link } from 'react-router-dom';
import './Pages.css';

const courses = [
  {
    id: 'js-mastery',
    name: 'JavaScript Mastery',
    description: 'Chinh phục JavaScript từ cơ bản đến nâng cao',
    price: 299,
    originalPrice: 499,
    lessons: 45,
    hours: 30,
    level: 'Tất cả',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400',
    features: ['30+ giờ học', '45 bài học', 'Dự án thực tế', 'Hỗ trợ 24/7', 'Chứng chỉ'],
    instructor: 'Nguyễn Văn A',
    rating: 4.9,
    students: 12500,
  },
  {
    id: 'react-complete',
    name: 'React Complete',
    description: 'Xây dựng ứng dụng hiện đại với React',
    price: 399,
    originalPrice: 699,
    lessons: 60,
    hours: 40,
    level: 'Trung cấp',
    image: 'https://images.unsplash.com/photo-1633356122542-f319ae762328?w=400',
    features: ['40+ giờ học', '60 bài học', '5 dự án lớn', 'Hỗ trợ 24/7', 'Chứng chỉ'],
    instructor: 'Trần Thị B',
    rating: 4.8,
    students: 8200,
  },
  {
    id: 'fullstack-dev',
    name: 'FullStack Dev',
    description: 'Trở thành FullStack Developer chuyên nghiệp',
    price: 599,
    originalPrice: 999,
    lessons: 100,
    hours: 60,
    level: 'Nâng cao',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    features: ['60+ giờ học', '100 bài học', '8 dự án lớn', 'Mentor 1-1', 'Chứng chỉ'],
    instructor: 'Lê Văn C',
    rating: 4.9,
    students: 5600,
  },
  {
    id: 'python-basics',
    name: 'Python Basics',
    description: 'Bắt đầu học Python từ zero',
    price: 199,
    originalPrice: 399,
    lessons: 35,
    hours: 20,
    level: 'Người mới',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400',
    features: ['20+ giờ học', '35 bài học', 'Dự án Python', 'Hỗ trợ 24/7', 'Chứng chỉ'],
    instructor: 'Phạm Văn D',
    rating: 4.7,
    students: 15000,
  },
  {
    id: 'node-js',
    name: 'Node.js Backend',
    description: 'Xây dựng API với Node.js và Express',
    price: 349,
    originalPrice: 599,
    lessons: 50,
    hours: 35,
    level: 'Trung cấp',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
    features: ['35+ giờ học', '50 bài học', 'REST API', 'GraphQL', 'Deployment'],
    instructor: 'Nguyễn Văn E',
    rating: 4.8,
    students: 6800,
  },
  {
    id: 'typescript',
    name: 'TypeScript Pro',
    description: 'Master TypeScript cho dự án lớn',
    price: 249,
    originalPrice: 449,
    lessons: 40,
    hours: 25,
    level: 'Trung cấp',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
    features: ['25+ giờ học', '40 bài học', 'Type safety', 'Best practices', 'Patterns'],
    instructor: 'Lê Văn F',
    rating: 4.9,
    students: 4200,
  },
];

function CoursesPage() {
  return (
    <div className="page courses-page">
      <div className="container">
        <div className="page-header">
          <h1>Tất cả khóa học</h1>
          <p>Hơn 50+ khóa học lập trình chất lượng cao</p>
        </div>
        <div className="courses-grid-full">
          {courses.map((course) => (
            <Link to={`/course/${course.id}`} className="course-card-full" key={course.id}>
              <div className="course-image">
                <img src={course.image} alt={course.name} />
                <span className="course-level">{course.level}</span>
              </div>
              <div className="course-content">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <div className="course-meta">
                  <span>📖 {course.lessons} bài</span>
                  <span>⏱️ {course.hours}h</span>
                  <span>⭐ {course.rating}</span>
                </div>
                <div className="course-instructor">
                  Giảng viên: {course.instructor}
                </div>
                <div className="course-footer">
                  <div className="course-price">
                    <span className="price-original">{course.originalPrice}K</span>
                    <span className="price-current">{course.price}K</span>
                  </div>
                  <button className="btn btn-primary">Xem chi tiết</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
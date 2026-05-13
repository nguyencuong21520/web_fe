import { useState } from 'react';
import './LandingPage.css';

const courses = [
  {
    id: 1,
    name: 'JavaScript Mastery',
    description: 'Chinh phục JavaScript từ cơ bản đến nâng cao',
    price: 299,
    originalPrice: 499,
    lessons: 45,
    hours: 30,
    level: 'Tất cả',
    features: ['30+ giờ học', '45 bài học', 'Dự án thực tế', 'Hỗ trợ 24/7'],
    popular: true,
  },
  {
    id: 2,
    name: 'React Complete',
    description: 'Xây dựng ứng dụng hiện đại với React',
    price: 399,
    originalPrice: 699,
    lessons: 60,
    hours: 40,
    level: 'Trung cấp',
    features: ['40+ giờ học', '60 bài học', '5 dự án lớn', 'Hỗ trợ 24/7'],
    popular: false,
  },
  {
    id: 3,
    name: 'FullStack Dev',
    description: 'Trở thành FullStack Developer chuyên nghiệp',
    price: 599,
    originalPrice: 999,
    lessons: 100,
    hours: 60,
    level: 'Nâng cao',
    features: ['60+ giờ học', '100 bài học', '8 dự án lớn', 'Mentor 1-1'],
    popular: false,
  },
];

const features = [
  {
    icon: '📚',
    title: 'Nội dung chất lượng cao',
    description: 'Biên soạn bởi chuyên gia hàng đầu trong ngành',
  },
  {
    icon: '🎯',
    title: 'Học theo tiến độ',
    description: 'Truy cập không giới hạn, học mọi lúc mọi nơi',
  },
  {
    icon: '💻',
    title: 'Thực hành chính',
    description: 'Bài tập và dự án thực tế để củng cố kiến thức',
  },
  {
    icon: '🏆',
    title: 'Chứng chỉ hoàn thành',
    description: 'Nhận chứng chỉ sau khi hoàn thành khóa học',
  },
  {
    icon: '👥',
    title: 'Cộng đồng hỗ trợ',
    description: 'Giao lưu học tập với hàng nghìn học viên',
  },
  {
    icon: '♾️',
    title: 'Truy cập vĩnh viễn',
    description: 'Mua một lần, sở hữu trọn đời',
  },
];

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    role: 'Frontend Developer',
    avatar: 'N',
    content: 'Khóa học React Complete đã giúp tôi chuyển ngành thành công chỉ trong 3 tháng. Nội dung dễ hiểu, bài tập thực tế.',
    rating: 5,
  },
  {
    name: 'Trần Thị B',
    role: 'Student',
    avatar: 'T',
    content: 'Mình đã học nhiều khóa online nhưng đây là khóa học chất lượng nhất. Giảng viên giải thích rất kỹ.',
    rating: 5,
  },
  {
    name: 'Lê Văn C',
    role: 'FullStack Developer',
    avatar: 'L',
    content: 'FullStack Dev course excellent! Đã giúp mình apply được vào công ty mơ ước. Cảm ơn MindX.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'Khóa học có phù hợp người mới bắt đầu không?',
    answer: 'Hoàn toàn phù hợp! Các khóa học từ cơ bản đến nâng cao, có lội rõ ràng cho người mới.',
  },
  {
    question: 'Tôi có thể học bao lâu sau khi mua khóa học?',
    answer: 'Bạn sẽ có quyền truy cập vĩnh viễn vào nội dung khóa học, có thể học lại bất kỳ lúc nào.',
  },
  {
    question: 'Có chứng chỉ sau khi hoàn thành không?',
    answer: 'Có! Bạn sẽ nhận được chứng chỉ hoàn thành khóa học có giá trị toàn cầu.',
  },
  {
    question: 'Có chính sách hoàn tiền không?',
    answer: 'Chúng tôi cam kết hoàn tiền trong 30 ngày nếu bạn không hài lòng với chất lượng khóa học.',
  },
];

function LandingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">#1 Platform học lập trình</span>
          <h1 className="hero-title">
            Chinh phục <span className="highlight">kỹ năng lập trình</span> trong 12 tuần
          </h1>
          <p className="hero-subtitle">
            Học lập trình với giảng viên kinh nghiệm, dự án thực tế, và cộng đồng hỗ trợ.
            Hơn 50,000+ học viên đã thành công.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">Khám phá khóa học</button>
            <button className="btn btn-secondary">Xem miễn phí</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">Học viên</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Khóa học</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Đánh giá</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-preview">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>{`function helloWorld() {
  console.log("Hello MindX!");
  return "Success 🚀";
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tại sao chọn MindX?</h2>
            <p className="section-subtitle">
              Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Khóa học nổi bật</h2>
            <p className="section-subtitle">
              Chọn khóa học phù hợp với mục tiêu của bạn
            </p>
          </div>
          <div className="courses-grid">
            {courses.map((course) => (
              <div
                className={`course-card ${course.popular ? 'popular' : ''}`}
                key={course.id}
              >
                {course.popular && (
                  <span className="popular-badge">Phổ biến nhất</span>
                )}
                <h3 className="course-name">{course.name}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-meta">
                  <span>📖 {course.lessons} bài học</span>
                  <span>⏱️ {course.hours} giờ</span>
                  <span>📊 {course.level}</span>
                </div>
                <ul className="course-features">
                  {course.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
                <div className="course-price">
                  <span className="price-original">
                    {course.originalPrice.toLocaleString()}đ
                  </span>
                  <span className="price-current">
                    {course.price.toLocaleString()}đ
                  </span>
                </div>
                <button className="btn btn-primary btn-full">Đăng ký ngay</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Học viên nói gì?</h2>
            <p className="section-subtitle">
              Hàng nghàn học viên đã tin tưởng MindX
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">{testimonial.avatar}</div>
                  <div>
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <span className="testimonial-role">{testimonial.role}</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Sẵn sàng chinh phục kỹ năng mới?</h2>
          <p className="cta-subtitle">
            Tham gia ngay hôm nay và nhận ưu đãi 40%
          </p>
          <button className="btn btn-primary btn-large">Đăng ký ngay</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Câu hỏi thường gặp</h2>
            <p className="section-subtitle">
              Giải đáp thắc mắc của bạn
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">MindX</h3>
              <p className="footer-description">
                Nền tảng học lập trình hàng đầu Việt Nam.
                Đồng hành cùng bạn trên con đường sự nghiệp.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Khóa học</h4>
                <a href="#">JavaScript</a>
                <a href="#">React</a>
                <a href="#">Node.js</a>
                <a href="#">Python</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">Về chúng tôi</a>
                <a href="#">Tuyển dụng</a>
                <a href="#">Blog</a>
                <a href="#">Liên hệ</a>
              </div>
              <div className="footer-column">
                <h4>Hỗ trợ</h4>
                <a href="#">FAQ</a>
                <a href="#">Chính sách</a>
                <a href="#">Bảo mật</a>
                <a href="#">Điều khoản</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 MindX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
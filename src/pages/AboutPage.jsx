import './Pages.css';

function AboutPage() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-header">
          <h1>Về MindX</h1>
          <p>Nền tảng học lập trình hàng đầu Việt Nam</p>
        </div>
        <div className="about-content">
          <div className="about-section">
            <h2>Sứ mệnh của chúng tôi</h2>
            <p>
              MindX được thành lập với sứ mệnh Democratize Education - Đưa giáo dục chất lượng cao
              đến tay mọi người. Chúng tôi tin rằng ai cũng có quyền được tiếp cận kiến thức
              lập trình tiên tiến nhất, bất kể xuất phát điểm hay hoàn cảnh.
            </p>
          </div>
          <div className="about-section">
            <h2>Giá trị cốt lõi</h2>
            <ul>
              <li><strong>Chất lượng là trên hết</strong> - Nội dung được biên soạn và kiểm duyệt bởi chuyên gia hàng đầu</li>
              <li><strong>Học qua thực hành</strong> - 70% thời gian là thực hành, chỉ 30% lý thuyết</li>
              <li><strong>Cộng đồng là sức mạnh</strong> - Hàng nghìn học viên hỗ trợ lẫn nhau</li>
              <li><strong>Không ngừng đổi mới</strong> - Cập nhật công nghệ mới nhất liên tục</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Con số ấn tượng</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">50,000+</span>
                <span className="stat-label">Học viên</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">200+</span>
                <span className="stat-label">Khóa học</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">95%</span>
                <span className="stat-label">Hài lòng</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Đánh giá</span>
              </div>
            </div>
          </div>
          <div className="about-section">
            <h2>Đội ngũ giảng viên</h2>
            <p>
              Đội ngũ giảng viên của MindX là các chuyên gia giàu kinh nghiệm đến từ top công ty công nghệ hàng đầu như Google, Meta, Amazon, Shopee...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
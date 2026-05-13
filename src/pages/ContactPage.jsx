import { useState } from 'react';
import './Pages.css';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Liên hệ</h1>
          <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📧</span>
              <h3>Email</h3>
              <p>hello@mindx.edu.vn</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📞</span>
              <h3>Điện thoại</h3>
              <p>1900 1234</p>
            </div>
            <div className="info-card">
              <span className="info-icon">📍</span>
              <h3>Địa chỉ</h3>
              <p>Tầng 5, Tòa nhà ABC<br />Hà Nội, Việt Nam</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🕐</span>
              <h3>Giờ làm việc</h3>
              <p>Thứ 2 - Thứ 6<br />8:00 - 18:00</p>
            </div>
          </div>
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <span>✅</span>
                <h3>Cảm ơn bạn!</h3>
                <p>Chúng tôi đã nhận được tin nhắn và sẽ phản hồi sớm nhất.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                  Gửi tin nhắn khác
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Gửi tin nhắn cho chúng tôi</h2>
                <div className="form-group">
                  <label>Họ và tên</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="Nhập email của bạn"
                  />
                </div>
                <div className="form-group">
                  <label>Tin nhắn</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    placeholder="Nhập tin nhắn của bạn"
                    rows={5}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Gửi tin nhắn
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
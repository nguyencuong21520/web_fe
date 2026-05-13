import './Pages.css';

const blogPosts = [
  {
    id: 1,
    title: 'Học lập trình có khó không? 5 mẹo cho người mới bắt đầu',
    excerpt: 'Nhiều người cho rằng học lập trình rất khó, nhưng thực tế chỉ cần phương pháp đúng...',
    category: 'Mẹo học tập',
    date: '12/05/2024',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
  },
  {
    id: 2,
    title: 'Tại sao nên chọn React.js trong năm 2024?',
    excerpt: 'React tiếp tục là framework được săn đón nhất trong năm nay với cộng đồng khổng lồ...',
    category: 'Công nghệ',
    date: '10/05/2024',
    image: 'https://images.unsplash.com/photo-1633356122542-f319ae762328?w=400',
  },
  {
    id: 3,
    title: 'Lộ trình trở thành FullStack Developer trong 12 tháng',
    excerpt: 'Bạn mơ ước trở thành FullStack Developer? Đây là lộ trình chi tiết cho bạn...',
    category: 'Lộ trình',
    date: '08/05/2024',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55c?w=400',
  },
  {
    id: 4,
    title: 'Top 5 kỹ năng cần có của một Developer năm 2024',
    excerpt: 'Ngoài kỹ năng code, có những kỹ năng mềm quan trọng không kém mà every developer cần có...',
    category: 'Nghề nghiệp',
    date: '05/05/2024',
    image: 'https://images.unsplash.com/photo-1531482615713-52af40c4ba9b?w=400',
  },
];

function BlogPage() {
  return (
    <div className="page blog-page">
      <div className="container">
        <div className="page-header">
          <h1>Blog</h1>
          <p>Kiến thức lập trình, mẹo học tập và tin tức công nghệ</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="btn btn-secondary">Đọc tiếp →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
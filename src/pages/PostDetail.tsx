import { Link, Navigate, useParams } from 'react-router-dom';
import { getPostById } from '../data/posts';

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? getPostById(postId) : undefined;

  if (!post) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="container">
      <article className="post-detail">
        <Link to="/" className="back-link">
          ← Back to all posts
        </Link>
        <span className="category-tag">{post.category}</span>
        <h1 className="post-detail-title">{post.title}</h1>
        <div className="post-detail-meta">
          <span className="author">{post.author}</span>
          <span className="meta-dot">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="meta-dot">·</span>
          <span>{post.readTime}</span>
        </div>
        <div className="post-detail-body">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

export default PostDetail;

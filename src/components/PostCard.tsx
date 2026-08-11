import { Link } from 'react-router-dom';
import type { Post } from '../types/post';

interface PostCardProps {
  post: Post;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <div className="post-card-meta">
        <span className="category-tag">{post.category}</span>
        <span className="meta-dot">·</span>
        <span>{post.readTime}</span>
      </div>
      <h2 className="post-card-title">
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="post-card-excerpt">{post.excerpt}</p>
      <div className="post-card-footer">
        <span className="author">{post.author}</span>
        <span className="meta-dot">·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
    </article>
  );
}

export default PostCard;

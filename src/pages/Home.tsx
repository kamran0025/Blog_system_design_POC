import { useMemo, useState } from 'react';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const unique = new Set(posts.map((post) => post.category));
    return ['All', ...Array.from(unique)];
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container">
      <section className="hero-section">
        <h1>Ideas worth reading.</h1>
        <p>Essays on design, engineering, and building things that last.</p>
      </section>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'filter-chip active' : 'filter-chip'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="post-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;

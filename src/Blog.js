import React, { useEffect } from 'react';
import imagePath from './utils/imagePath';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    image: 'home.jpg',
    title: 'Mourning The Mountains',
    date: '2025-04-18',
    text: 'After living 8 years in the mountains, it\'s hard to leave. The forest behind the house was a playground, a hunting ground, a forest known like the back of my hand. I watched it change seasons, I watched it change for 8 years. Still the same woods it was, still the same woods it will always be.',
    medium: 'digital'
    // filmStock: 'Kodak Gold 200'
    
    
  },
  {
    id: 2,
    image: '_DSC1298-2.jpg',
    title: '"Rich History"',
    date: '2025-08-6',
    text: 'Just touched down in my temporary new “home” of Mountain Home, a place that is somehow neither mountainous nor much of a home. The family roots run deep here though; apparently the Tindall name is kind of a big deal. There are even three streets named after us, which is impressive until you realize I’d prefer nobody ever know I was actually here.',
    medium: 'digital'
  },
    {
    id: 3,
    image: '14.jpg',
    title: 'If its good enough for Nolan',
    date: '2025-08-23',
    text: 'Scored a sweet deal on some bulk rolled Kodak Eastman Vision 3 250D cinema film from ebay, and have been shooting it since. There is something really special about how this film captures the warm golden hour while still capturing blue tones so nicely. its quickly becoming one of my favorites.',
    medium: 'film',
    filmStock: 'Kodak Vision 250D'
  },
 
].sort((a, b) => new Date(b.date) - new Date(a.date));

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Analog Glow</h1>
        <p>A Blog</p>
      </div>
      
      <div className="blog-content">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-post">
            <div className="post-image">
              <img 
                src={imagePath(post.image)} 
                alt={post.title}
                loading="lazy"
              />
            </div>
            <div className="post-content">
              <div className="post-meta">
                <time className="post-date">{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
                <div className="post-tags">
                  <span className={`medium-tag ${post.medium}`}>
                    {post.medium === 'film' ? 'Film' : 'Digital'}
                  </span>
                  {post.filmStock && (
                    <span className="film-stock-tag">
                      {post.filmStock}
                    </span>
                  )}
                </div>
              </div>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
            </div>
          </article>
        ))}
      </div>
      
      <div className="blog-footer">
        <p>More stories coming soon...</p>
      </div>
    </div>
  );
};

export default Blog;
import { useState } from 'react';
import { CalendarIcon, UserIcon, ClockIcon, MagnifyingGlassIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import styles from './Blog.module.css';

import img1 from "../../assets/DSC02565.jpg";
import img2 from "../../assets/dvr4.jpeg";
import img3 from "../../assets/6138mPynu5L.jpg";
import img4 from "../../assets/DSC02602.jpg";
import img5 from "../../assets/Picsart_25-08-22_10-05-50-045.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Video Surveillance',
      excerpt: 'Explore how artificial intelligence is revolutionizing the security industry with smart detection and analytics.',
      // image: 'https://picsum.photos/seed/1/600/400',
      image: img1,
      category: 'Technology',
      author: 'John Smith',
      date: 'March 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Top 5 Security Tips for Retail Stores',
      excerpt: 'Essential security measures every retail business should implement to protect assets and employees.',
      // image: 'https://picsum.photos/seed/2/600/400',
      image: img2,
      category: 'Industry',
      author: 'Sarah Johnson',
      date: 'March 10, 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Understanding IP Camera Resolution Standards',
      excerpt: 'A comprehensive guide to camera resolutions and how to choose the right one for your needs.',
      // image: 'https://picsum.photos/seed/3/600/400',
      image: img3,
      category: 'Guide',
      author: 'Michael Chen',
      date: 'March 5, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Enhancing Workplace Safety with Advanced CCTV',
      excerpt: 'Discover how modern CCTV systems can improve employee safety and prevent workplace incidents.',
      // image: 'https://picsum.photos/seed/4/600/400',
      image: img4,
      category: 'Safety',
      author: 'Emily White',
      date: 'February 28, 2024',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'The Role of Thermal Cameras in Industrial Monitoring',
      excerpt: 'An in-depth look at how thermal imaging is used for predictive maintenance and quality control.',
      // image: 'https://picsum.photos/seed/5/600/400',
      image: img5,
      category: 'Technology',
      author: 'David Green',
      date: 'February 22, 2024',
      readTime: '7 min read'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Camera Installation Guide',
      type: 'Video Tutorial',
      duration: '15 minutes',
      thumbnail: 'https://picsum.photos/seed/6/400/300'
    },
    {
      id: 2,
      title: 'Security System Buyer\'s Guide',
      type: 'eBook',
      duration: '25 pages',
      thumbnail: 'https://picsum.photos/seed/7/400/300'
    },
    {
      id: 3,
      title: 'Network Setup Tutorial',
      type: 'Video Tutorial',
      duration: '20 minutes',
      thumbnail: 'https://picsum.photos/seed/8/400/300'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.blogPage}>
      <div className="container">
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Blog & Resources</h1>
          <p className={styles.pageDescription}>
            Stay updated with the latest security industry new, tips, and expert insights.
          </p>
        </div>

        {/* Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search articles..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MagnifyingGlassIcon className={styles.searchIcon} />
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <article
            key={filteredPosts[0].id}
            className={`${styles.postCard} ${styles.featuredPostCard}`}>
            <div className={styles.postImageContainer}>
              <img
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                className={styles.postImage}
              />
            </div>
            <div className={styles.postContent}>
              <div className={styles.postMeta}>
                <span className={styles.postCategory}>{filteredPosts[0].category}</span>
                <span className={styles.postDivider}>•</span>
                <span className={styles.postReadTime}>
                  <ClockIcon className={styles.postReadTimeIcon} />
                  {filteredPosts[0].readTime}
                </span>
              </div>
              <h2 className={styles.postTitle}>{filteredPosts[0].title}</h2>
              <p className={styles.postExcerpt}>{filteredPosts[0].excerpt}</p>
              <div className={styles.postFooter}>
                <div className={styles.postAuthor}>
                  <UserIcon className={styles.postAuthorIcon} />
                  <span>{filteredPosts[0].author}</span>
                </div>
                <div className={styles.postDate}>
                  <CalendarIcon className={styles.postDateIcon} />
                  <span>{filteredPosts[0].date}</span>
                </div>
              </div>
              <button className={styles.readMoreButton}>Read More</button>
            </div>
          </article>
        )}

        {/* Posts Grid */}
        <div className={styles.postsGrid}>
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postImageContainer}>
                <img
                  src={post.image}
                  alt={post.title}
                  className={styles.postImage}
                />
              </div>
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDivider}>•</span>
                  <span className={styles.postReadTime}>
                    <ClockIcon className={styles.postReadTimeIcon} />
                    {post.readTime}
                  </span>
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postFooter}>
                  <div className={styles.postAuthor}>
                    <UserIcon className={styles.postAuthorIcon} />
                    <span>{post.author}</span>
                  </div>
                  <div className={styles.postDate}>
                    <CalendarIcon className={styles.postDateIcon} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <button className={styles.readMoreButton}>Read More</button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className={styles.noResultsContainer}>
            <h3 className={styles.noResultsTitle}>No Articles Found</h3>
            <p className={styles.noResultsText}>Try adjusting your search terms or check back later for new content.</p>
          </div>
        )}

        {/* Resources Section */}
        <div className={styles.resourcesSection}>
          <h2 className={styles.resourcesTitle}>Learning Resources</h2>
          <div className={styles.resourcesGrid}>
            {filteredResources.map((resource) => (
              <div key={resource.id} className={styles.resourceCard}>
                <div className={styles.resourceImageContainer}>
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className={styles.resourceImage}
                  />
                </div>
                <div className={styles.resourceContent}>
                  <div className={styles.resourceMeta}>
                    <span className={styles.resourceType}>{resource.type}</span>
                    <span className={styles.postDivider}>•</span>
                    <span className={styles.resourceDuration}>{resource.duration}</span>
                  </div>
                  <h3 className={styles.resourceTitle}>{resource.title}</h3>
                  <button className={styles.resourceButton}>
                    Access Resource
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredResources.length === 0 && searchTerm && (
          <div className={styles.noResultsContainer}>
            <h3 className={styles.noResultsTitle}>No Resources Found</h3>
            <p className={styles.noResultsText}>We couldn't find any resources matching your search.</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className={styles.newsletterSection}>
          <h2 className={styles.newsletterTitle}>Stay Updated</h2>
          <p className={styles.newsletterDescription}>Subscribe to our newsletter for the latest security insights and updates.</p>
          <div className={styles.newsletterForm}>
            <div className={styles.newsletterInputContainer}>
              <EnvelopeIcon className={styles.newsletterInputIcon} />
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
            </div>
            <button className={styles.newsletterButton}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
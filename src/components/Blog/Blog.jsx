
import React, { useState, useEffect } from "react";
import {
  CalendarIcon,
  UserIcon,
  ClockIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import styles from "./Blog.module.css";
import apiClient from "../../api/apiClient";

// --- MAIN BLOG PAGE COMPONENT (FINAL INTEGRATED VERSION) ---
const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // --- STATE MANAGEMENT ---
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the base URL for file downloads from your .env file
  const storageUrl =
    import.meta.env.VITE_API_STORAGE_URL || "http://127.0.0.1:8000/storage";

  // --- DATA FETCHING ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsRes = await apiClient.get("/blog-posts");
        setBlogPosts(postsRes.data);
      } catch (err) {
        setError("Could not load blog content. Please try again later.");
        console.error("Fetch Blog Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // The empty array ensures this runs only once

  // --- STATIC RESOURCES DATA (As requested by you) ---
  const resources = [
    {
      id: 1,
      title: "Camera Installation Guide",
      type: "Video Tutorial",
      duration: "15 minutes",
      thumbnail: "https://picsum.photos/seed/6/400/300",
    },
    {
      id: 2,
      title: "Security System Buyer's Guide",
      type: "eBook",
      duration: "25 pages",
      thumbnail: "https://picsum.photos/seed/7/400/300",
    },
    {
      id: 3,
      title: "Network Setup Tutorial",
      type: "Video Tutorial",
      duration: "20 minutes",
      thumbnail: "https://picsum.photos/seed/8/400/300",
    },
  ];

  // Client-side filtering logic
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.category &&
        post.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- RENDER LOGIC for loading and error states ---
  if (loading)
    return (
      <div
        className="container"
        style={{ padding: "4rem", textAlign: "center" }}
      >
        Loading Blog...
      </div>
    );
  if (error)
    return (
      <div
        className="container"
        style={{ padding: "4rem", textAlign: "center", color: "red" }}
      >
        {error}
      </div>
    );

  return (
    <div className={styles.blogPage}>
      <div className="container">
        {/* Page Header (Static) */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Blog & Resources</h1>
          <p className={styles.pageDescription}>
            Stay updated with the latest security industry news, tips, and
            expert insights.
          </p>
        </div>

        {/* Search Bar (Functional) */}
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

        {/* Featured Post (Dynamic) */}
        {filteredPosts.length > 0 && (
          <article
            key={filteredPosts[0].id}
            className={`${styles.postCard} ${styles.featuredPostCard}`}
          >
            <div className={styles.postImageContainer}>
              <img
                src={`${storageUrl}/${filteredPosts[0].image_url}`}
                alt={filteredPosts[0].title}
                className={styles.postImage}
              />
            </div>
            <div className={styles.postContent}>
              <div className={styles.postMeta}>
                <span className={styles.postCategory}>
                  {filteredPosts[0].category}
                </span>
                <span className={styles.postDivider}>•</span>
                <span className={styles.postReadTime}>
                  <ClockIcon className={styles.postReadTimeIcon} />
                  {filteredPosts[0].read_time}
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

        {/* Posts Grid (Dynamic) */}
        <div className={styles.postsGrid}>
          {filteredPosts.slice(1).map((post) => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postImageContainer}>
                <img
                  src={`${storageUrl}/${post.image_url}`}
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
                    {post.read_time}
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
            <h3 className={styles.noResultsTitle}>Coming Soon</h3>
            <p className={styles.noResultsText}>
              We are working on some exciting new content. Our first articles will be published shortly!
            </p>
          </div>
        )}

        {/* Static Resources Section (As requested) */}
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
                    <span className={styles.resourceDuration}>
                      {resource.duration}
                    </span>
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

        {/* Static Newsletter Subscription (As requested) */}
        <div className={styles.newsletterSection}>
          <h2 className={styles.newsletterTitle}>Stay Updated</h2>
          <p className={styles.newsletterDescription}>
            Subscribe to our newsletter for the latest security insights and
            updates.
          </p>
          <div className={styles.newsletterForm}>
            <div className={styles.newsletterInputContainer}>
              <EnvelopeIcon className={styles.newsletterInputIcon} />
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
            </div>
            <button className={styles.newsletterButton}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
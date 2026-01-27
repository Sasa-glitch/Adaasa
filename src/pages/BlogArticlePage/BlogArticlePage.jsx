import React from 'react'
import { useOutletContext, useParams, Link } from 'react-router-dom'
import NotFound from '../NotFound/NotFound';

export default function BlogArticlePage() {
    // geting data object from context and sluf from params
    const {data} = useOutletContext();
    const {slug} = useParams();
    // checking if the slug is=s valid
    const post = data.posts.find(post => post.slug === slug);
    if (!post) {
        return <NotFound />
    } else {
        // getting sections headers and content
        const sections = post.content.split("\n\n");
        const firstPoint = sections.shift();
        const sectionsArr = [];
        const sectionsDescArr = [];
        for (let i = 0; i < sections.length; i = i+2) {
            sectionsArr.push(sections[i].replace(/^## /, ""))
        }
        for (let i = 1; i < sections.length; i = i+2) {
            sectionsDescArr.push(sections[i])
        }
        // getting 3 other recommend articles
        const recommendPosts = []
        for (let i = 0; i < data.posts.length; i++) {
            if (recommendPosts.length >= 3) {
                break;
            } else if (data.posts[i].category !== post.category) {
                continue;
            } else if (data.posts[i].id === post.id) {
                continue;
            } else {
                recommendPosts.push(data.posts[i])
            }
        }
        console.log(recommendPosts);
        return (
            <main className="blog-article-page">
                <article className="article-page">
                    {/* Hero Section */}
                    <div className="article-hero">
                        <img 
                            src={post.image} 
                            alt={post.title}
                            className="article-hero-image"
                        />
                        <div className="article-hero-gradient"></div>
                        <div className="article-hero-gradient-side"></div>

                        {/* Breadcrumb */}
                        <div className="article-breadcrumb-wrapper p-0">
                            <nav className="article-breadcrumb">
                                <Link to={"/"} className="breadcrumb-link">
                                    <i className="fa-solid fa-home"></i>
                                </Link>
                                <i className="fa-solid fa-chevron-left breadcrumb-separator"></i>
                                <Link to={"/blog"} className="breadcrumb-link">المدونة</Link>
                                <i className="fa-solid fa-chevron-left breadcrumb-separator"></i>
                                <span className="breadcrumb-active">{post.category}</span>
                            </nav>
                        </div>

                        {/* Article Header */}
                        <div className="article-header">
                            <div className="container-lg">
                                <div className="article-meta mb-4">
                                    <Link to={"/blog?category=تقنيات"} className="article-category-badge">
                                        {post.category}
                                    </Link>
                                    <div className="d-flex align-items-center gap-4 article-meta-info">
                                        <span className="d-flex align-items-center gap-2">
                                            <i className="fa-regular fa-calendar"></i>
                                            {new Date(post.date).toLocaleDateString("ar-EG", {month: 'long', day: 'numeric', year: 'numeric'})}
                                        </span>
                                        <span className="d-flex align-items-center gap-2">
                                            <i className="fa-regular fa-clock"></i>
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                                <h1 className="article-title">
                                    {post.title}
                                </h1>
                                <div className="article-author-card">
                                    <img 
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="article-author-avatar"
                                    />
                                    <div>
                                        <p className="article-author-name">{post.author.name}</p>
                                        <p className="article-author-role">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="container-lg py-5">
                        <div className="row g-5">
                            {/* Main Content */}
                            <div className="col-12 col-lg-8 order-2 order-lg-1">
                                {/* Quote */}
                                <div className="article-quote">
                                    <p className="article-quote-text">
                                        "{post.excerpt}"
                                    </p>
                                </div>

                                {/* Article Content */}
                                <div className="article-content">
                                    <p>{firstPoint}</p>

                                    {sectionsArr.map((title, index) => (
                                        <div key={index}>
                                            <h2 key={title} className="article-section-title">
                                                <span className="section-icon">
                                                    <i className="fa-solid fa-camera"></i>
                                                </span>
                                                {title}
                                            </h2>
                                            <p>
                                                {sectionsDescArr[index]}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="article-tags-card">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="card-icon-wrapper">
                                            <i className="fa-solid fa-tags"></i>
                                        </div>
                                        <h3 className="card-title">الوسوم</h3>
                                    </div>
                                    <div className="d-flex flex-wrap gap-2">
                                        {post.tags.map(tag => <span className="article-tag" key={tag}>#{tag}</span>)}
                                        
                                    </div>
                                </div>

                                {/* Share */}
                                <div className="article-share-card">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="card-icon-wrapper">
                                                <i className="fa-solid fa-share-nodes"></i>
                                            </div>
                                            <h3 className="card-title">شارك المقال</h3>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button className="share-btn share-btn-twitter">
                                                <i className="fa-brands fa-x-twitter"></i>
                                            </button>
                                            <button className="share-btn share-btn-linkedin">
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </button>
                                            <button className="share-btn share-btn-whatsapp">
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </button>
                                            <button className="share-btn share-btn-link">
                                                <i className="fa-solid fa-link"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Author Bio */}
                                <div className="author-bio-card">
                                    <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4">
                                        <img 
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="author-bio-avatar"
                                        />
                                        <div className="text-center text-sm-start flex-1">
                                            <span className="author-bio-label">كاتب المقال</span>
                                            <h3 className="author-bio-name">{post.author.name}</h3>
                                            <p className="author-bio-role">{post.author.role}</p>
                                            <p className="author-bio-description">
                                                مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="col-12 col-lg-4 order-1 order-lg-2">
                                <div className="article-sidebar">
                                    {/* Table of Contents */}
                                    <div className="sidebar-card">
                                        <div className="d-flex align-items-center gap-3 mb-4">
                                            <div className="card-icon-wrapper">
                                                <i className="fa-solid fa-list"></i>
                                            </div>
                                            <h3 className="card-title">محتويات المقال</h3>
                                        </div>
                                        <nav className="toc-nav">
                                            {sectionsArr.map((title, index) => (
                                                <Link key={title} to={`#section-${index}`} className="toc-link">
                                                    <span className="toc-number">{index + 1}</span>
                                                    <span className="toc-text">{title}</span>
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>

                                    {/* Article Stats */}
                                    <div className="sidebar-card">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <div className="stat-box">
                                                    <i className="fa-regular fa-clock stat-icon"></i>
                                                    <p className="stat-value">{post.readTime}</p>
                                                    <p className="stat-label">وقت القراءة</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="stat-box">
                                                    <i className="fa-regular fa-calendar stat-icon"></i>
                                                    <p className="stat-value">{new Date(post.date).toLocaleDateString("ar-EG", {month : 'long', day : "numeric"})}</p>
                                                    <p className="stat-label">تاريخ النشر</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="sidebar-cta">
                                        <div className="text-center">
                                            <div className="cta-icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <h3 className="cta-title">لا تفوّت جديدنا</h3>
                                            <p className="cta-text">اشترك للحصول على أحدث المقالات</p>
                                            <Link to={"/blog"} className="cta-btn">تصفح المزيد</Link>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>

                        {/* Related Articles */}
                        <div className="related-articles">
                            <div className="d-flex align-items-center justify-content-between mb-5">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="related-icon">
                                        <i className="fa-solid fa-images"></i>
                                    </span>
                                    <div>
                                        <h2 className="related-title">مقالات قد تعجبك</h2>
                                        <p className="related-subtitle">استكشف المزيد من المحتوى المميز</p>
                                    </div>
                                </div>
                                <Link to={"/blog"} className="related-link d-none d-sm-flex">
                                    عرض الكل
                                    <i className="fa-solid fa-arrow-left"></i>
                                </Link>
                            </div>

                            <div className="row g-4">
                                {recommendPosts.map((article) => (
                                    <div key={article.id} className="col-12 col-sm-6 col-lg-4">
                                        <Link href={`/blog/${article.slug}`} className="related-card">
                                            <div className="related-card-image">
                                                <img src={article.image} alt={article.title} />
                                                <div className="related-card-overlay"></div>
                                                <span className="related-card-badge">{article.category}</span>
                                            </div>
                                            <div className="related-card-content">
                                                <h3 className="related-card-title">{article.title}</h3>
                                                <div className="d-flex align-items-center justify-content-between related-card-meta">
                                                    <span className="d-flex align-items-center gap-2">
                                                        <img src={article.author.avatar} alt={article.author.name} className="related-author-avatar" />
                                                        {article.author.name}
                                                    </span>
                                                    <span>{article.readTime}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        )
    }
    
}




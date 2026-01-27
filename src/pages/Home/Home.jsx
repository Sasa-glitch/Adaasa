import React from 'react'
import { useOutletContext, Link } from 'react-router-dom';
import Article from '../../components/Article/Article'
import RecentArticle from '../../components/recentArticle/recentArticle';

export default function Home() {
    const { data } = useOutletContext();

    return (
        <main>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-grid"></div>
                <div className="hero-blur hero-blur-left"></div>
                <div className="hero-blur hero-blur-right"></div>
                <div className="hero-blur hero-blur-center"></div>
                
                <div className="container-lg py-5 position-relative">
                    <div className="text-center mx-auto hero-content">
                        <div className="section-badge mb-4">
                            <span className="pulse-dot"></span>
                            <span className="pulse-ring"></span>
                            <span className="small fw-medium text-white-50">مرحباً بك في عدسة</span>
                        </div>
                        
                        <h1 className="hero-title mb-4">
                            اكتشف <span className="gradient-text">فن</span><br/>
                            التصوير الفوتوغرافي
                        </h1>
                        
                        <p className="hero-subtitle mb-5">
                            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
                        </p>
                        
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
                            <Link a={"/blog"} className="btn-hero-primary">
                                <span>استكشف المقالات</span>
                                <i className="fa-solid fa-arrow-left"></i>
                            </Link>
                            <Link a={"/about"} className="btn-hero-secondary">
                                <i className="fa-solid fa-circle-info"></i>
                                <span>اعرف المزيد</span>
                            </Link>
                        </div>
                        
                        <div className="row g-3 mx-auto stats-grid">
                            <div className="col-6 col-md-3">
                                <div className="stat-card">
                                    <i className="fa-solid fa-newspaper stat-icon"></i>
                                    <p className="stat-number">+50</p>
                                    <p className="stat-label">مقالة</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card">
                                    <i className="fa-solid fa-users stat-icon"></i>
                                    <p className="stat-number">+10ألف</p>
                                    <p className="stat-label">قارئ</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card">
                                    <i className="fa-solid fa-folder-open stat-icon"></i>
                                    <p className="stat-number">4</p>
                                    <p className="stat-label">تصنيفات</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card">
                                    <i className="fa-solid fa-pen-nib stat-icon"></i>
                                    <p className="stat-number">6</p>
                                    <p className="stat-label">كاتب</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Articles Section */}
            <section className="py-5 position-relative featured-section">
                <div className="gradient-overlay-right"></div>
                
                <div className="container-lg py-5">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
                        <div>
                            <div className="section-badge mb-3">
                                <span className="pulse-dot"></span>
                                <span className="pulse-ring"></span>
                                <span className="small">مميز</span>
                            </div>
                            <h2 className="section-title">مقالات مختارة</h2>
                            <p className="section-subtitle">محتوى منتقى لبدء رحلة تعلمك</p>
                        </div>
                        <Link a={"/blog"} className="btn-view-all">
                            عرض الكل
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                    </div>

                    <div className="d-flex flex-column gap-4">
                        {/* Featured Articles */}
                        {data.posts.slice(0,3).map(post => <Article post={post} key={post.id}/>)}
                        
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-5 categories-section">
                <div className="container-lg py-5">
                    <div className="text-center mb-5">
                        <div className="section-badge mb-3">
                            <span className="pulse-dot"></span>
                            <span className="pulse-ring"></span>
                            <span className="small">التصنيفات</span>
                        </div>
                        <h2 className="section-title">استكشف حسب الموضوع</h2>
                        <p className="section-subtitle mx-auto">اعثر على محتوى مصمم حسب اهتماماتك</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=إضاءة"} className="category-card">
                                <div className="category-overlay"></div>
                                <div className="category-content">
                                    <div className="category-icon-wrapper">
                                        <i className="fa-solid fa-sun category-icon"></i>
                                    </div>
                                    <h3 className="category-title">إضاءة</h3>
                                    <p className="category-count">3 مقالة</p>
                                    <div className="category-arrow">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=بورتريه"} className="category-card">
                                <div className="category-overlay"></div>
                                <div className="category-content">
                                    <div className="category-icon-wrapper">
                                        <i className="fa-solid fa-user category-icon"></i>
                                    </div>
                                    <h3 className="category-title">بورتريه</h3>
                                    <p className="category-count">3 مقالة</p>
                                    <div className="category-arrow">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=مناظر طبيعية"} className="category-card">
                                <div className="category-overlay"></div>
                                <div className="category-content">
                                    <div className="category-icon-wrapper">
                                        <i className="fa-solid fa-mountain-sun category-icon"></i>
                                    </div>
                                    <h3 className="category-title">مناظر طبيعية</h3>
                                    <p className="category-count">2 مقالة</p>
                                    <div className="category-arrow">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=تقنيات"} className="category-card">
                                <div className="category-overlay"></div>
                                <div className="category-content">
                                    <div className="category-icon-wrapper">
                                        <i className="fa-solid fa-sliders category-icon"></i>
                                    </div>
                                    <h3 className="category-title">تقنيات</h3>
                                    <p className="category-count">5 مقالة</p>
                                    <div className="category-arrow">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-3">
                            <Link to={"/blog?category=معدات"} className="category-card">
                                <div className="category-overlay"></div>
                                <div className="category-content">
                                    <div className="category-icon-wrapper">
                                        <i className="fa-solid fa-sun category-icon"></i>
                                    </div>
                                    <h3 className="category-title">معدات</h3>
                                    <p className="category-count">3 مقالة</p>
                                    <div className="category-arrow">
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Articles Section */}
            <section className="py-5 latest-section">
                <div className="gradient-overlay-left"></div>
                
                <div className="container-lg py-5 position-relative">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
                        <div>
                            <div className="section-badge mb-3">
                                <span className="pulse-dot"></span>
                                <span className="pulse-ring"></span>
                                <span className="small">الأحدث</span>
                            </div>
                            <h2 className="section-title">أحدث المقالات</h2>
                            <p className="section-subtitle">محتوى جديد طازج من المطبعة</p>
                        </div>
                        <Link to={"/blog"} className="text-link">
                            عرض جميع المقالات
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                    </div>

                    <div className="row g-4">
                        {data.posts.slice(3,6).map(post => <RecentArticle key={post.id} post={post} />)}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-5 newsletter-section">
                <div className="newsletter-blur"></div>
                
                <div className="container position-relative">
                    <div className="newsletter-card">
                        <div className="newsletter-icon">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <h2 className="newsletter-title">
                            اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
                        </h2>
                        <p className="newsletter-text">
                            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                        </p>
                        <div className="newsletter-form">
                            <input 
                                type="email" 
                                placeholder="أدخل بريدك الإلكتروني"
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">اشترك الآن</button>
                        </div>
                        <div className="newsletter-meta">
                            <div className="d-flex align-items-center gap-3">
                                <div className="subscribers-avatars">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="" />
                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" alt="" />
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="" />
                                </div>
                                <span>انضم لـ <strong>+10,000</strong> مصور</span>
                            </div>
                            <span className="d-none d-sm-inline meta-separator">•</span>
                            <span>بدون إزعاج</span>
                            <span className="d-none d-sm-inline meta-separator">•</span>
                            <span>إلغاء الاشتراك في أي وقت</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

import React, { useEffect, useState } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom';
import BlogArticle from '../../components/BlogArticle/BlogArticle';
import BlogArticleList from '../../components/BlogArticleList/BlogArticleList';


export default function Blog() {
    // importing our data from the outlet
    const { data } = useOutletContext();

    
    // using search parames for /blog?category=بورتريه
    const [searchParames, _] = useSearchParams();

    // making cat state so we can use to follow which cat is active
    const [activeCategory, setActiveCategory] = useState(() => searchParames.get('category') || 'جميع المقالات')

    // making grid state so we can change the markup based on it
    const [viewMode, setViewMode] = useState('grid')

    // making search state so we can monitor it
    const [searchInput, setSearchInput] = useState("")

    // getting articles based on filters to show
    const [taggedArticles, setTaggedArticles] = useState(data.posts);
    // getting articles based on search
    // const [searchedArticles, setSearchedArticles] = useState(data.posts);
    const [articlesToShow, setArticlesToShow] = useState(data.posts);
    // console.log(...data.categories.map(({name}) => name))
    const categories = ['جميع المقالات',...data.categories.map(({name}) => name)]

    console.log(articlesToShow);
    console.log("articles Length", articlesToShow.length);

    // handel function for categories filter clicking
    const handelCatClick = (cat) => {
        setActiveCategory(cat);
        const currentTagged = cat === 'جميع المقالات' ? data.posts : data.posts.filter(post => post.category === cat);
        setArticlesToShow(currentTagged.filter(post => post.title.includes(searchInput)));
        setTaggedArticles(currentTagged);
        setActivePage(0);
    }

    // handel search for serach in put
    const handelSearch = (searchValue) => {
        setSearchInput(searchValue);
        setArticlesToShow(taggedArticles.filter(post => post.title.includes(searchValue)));
        setActivePage(0);
    }

    // making state for number buttons
    const [activePage, setActivePage] =  useState(0);

    // creating helper function to create range later
    const rangeHelper = (newlength) => {
        return Array.from({length : Math.ceil(newlength / 6)}, (_,i) => i)
    }

    // next and previous to control active page for buttons
    const nextPage = () => {
        setActivePage((prev) => {
            if (prev + 1 === Math.ceil(articlesToShow.length / 6)) {
                return
            } else {
                return prev + 1
            }
        })
    }
    const prevPage = () => {
        setActivePage((prev) => {
            if (prev === 0) {
                return
            } else {
                return prev - 1;
            }
        })
    }

    // making helper function for removing filters
    const resetFilter = () => {
        setSearchInput("");
        setActiveCategory("جميع المقالات");
        setArticlesToShow(data.posts)
    }


    // making function to control window position
    useEffect(() => {
        const articleContainer = document.getElementById("articles-grid");
        const containerTop = articleContainer.getBoundingClientRect().top + window.pageYOffset - (document.querySelector('nav').scrollHeight + document.querySelector('.filters-bar').scrollHeight);
        function scrollTOGirdTop() {
            window.scrollTo({
            top: containerTop,
            left: 0,
            behavior: "smooth",
            })
            // articleContainer.scrollIntoView({
            //     top:-170,
            //     left:0,
            //     behavior: "smooth"
            // })
        }
        document.querySelectorAll(".pagination-btn").forEach(button => {
            button.addEventListener("click", scrollTOGirdTop)
        })
        document.querySelectorAll(".page-btn").forEach(button => {
            button.addEventListener("click", scrollTOGirdTop)
        })

        return () => {
            document.querySelectorAll(".pagination-btn").forEach(button => {
            button.removeEventListener("click", scrollTOGirdTop)
        })
        document.querySelectorAll(".page-btn").forEach(button => {
            button.removeEventListener("click", scrollTOGirdTop)
        })
        }
    }, [articlesToShow])

    return (
        <main>
            {/* Page Header */}
            <div className="page-header">
                <div className="hero-grid"></div>
                <div className="header-blur header-blur-left"></div>
                <div className="header-blur header-blur-right"></div>
                
                <div className="container-lg py-5 position-relative text-center">
                    <div className="section-badge mb-4">
                        <i className="fa-solid fa-blog small"></i>
                        مدونتنا
                    </div>
                    <h1 className="page-title mb-4">
                        استكشف <span className="gradient-text">مقالاتنا</span>
                    </h1>
                    <p className="page-subtitle mx-auto">
                        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                    </p>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="filters-bar sticky-top">
                <div className="container-fluid py-3 px-lg-5">
                    <div className="row align-items-center g-3">
                        <div className="col-12 col-md-4">
                            <div className="search-wrapper position-relative">
                                <input 
                                    type="text" 
                                    placeholder="ابحث في المقالات..."
                                    className="search-input w-100"
                                    onChange={(e) => handelSearch(e.target.value)}
                                    value={searchInput}
                                />
                                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        data-tag={cat}
                                        onClick={() => handelCatClick(cat)}
                                        className={`filter-btn ${(activeCategory === cat) ? 'active' : ''}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container-fluid px-lg-5 py-5 my-bg-secondary" id='articles-grid'>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <p className="text-white-50 mb-0">
                        عرض <strong className="text-white">{articlesToShow.length}</strong> مقالات
                    </p>
                    <div className='d-flex gap-2'>
                        <div className="view-toggle">
                        <button 
                            onClick={() => setViewMode('grid')}
                            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            title="عرض شبكي"
                        >
                            <i className="fa-solid fa-grip"></i>
                        </button>
                        <button 
                            onClick={() => setViewMode('list')}
                            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                            title="عرض قائمة"
                        >
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>
                    {(activeCategory !== 'جميع المقالات' || searchInput !== "") && <button onClick={resetFilter} className='my-btn p-0 small my-text-tertiary hover-color-primary'><i className="fa-solid fa-x small"></i> مسح الفلاتر</button>}
                    </div>
                    
                </div>

                <div className="row g-4">
                    {articlesToShow.slice(activePage * 6, (activePage + 1) * 6).map(post => {return viewMode === 'grid' ? <BlogArticle key={post.id} post={post} /> : <BlogArticleList key={post.id} post={post} />})}
                    {/* {[...Array(9)].map((_, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <article className="blog-card">
                                <a href={`/blog/article-${index + 1}`}>
                                    <div className="blog-card-image">
                                        <img src={`https://images.unsplash.com/photo-${['1500835556837-99ac94a94552', '1507003211169-0a1dd7228f2d', '1506905925346-21bda4d32df4', '1516035069371-29a1b244cc32', '1452587925148-ce544e77e70d', '1512941937669-90a1b58e7e9c', '1500835556837-99ac94a94552', '1507003211169-0a1dd7228f2d', '1506905925346-21bda4d32df4'][index]}?w=800&h=400&fit=crop`} alt="Article" />
                                        <div className="image-overlay"></div>
                                        <span className="card-category-badge">
                                            {['إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'تقنيات', 'معدات', 'إضاءة', 'بورتريه', 'مناظر طبيعية'][index]}
                                        </span>
                                    </div>
                                    <div className="blog-card-content">
                                        <div className="d-flex align-items-center gap-3 mb-3 card-meta">
                                            <span className="read-time">
                                                <i className="fa-regular fa-clock"></i>
                                                {[8, 6, 10, 7, 9, 8, 8, 6, 10][index]} دقائق للقراءة
                                            </span>
                                            <span className="meta-dot"></span>
                                            <span>{15 - index} يناير ٢٠٢٦</span>
                                        </div>
                                        <h3 className="card-title">
                                            {['إتقان تصوير الساعة الذهبية: دليل شامل', 'أسرار تصوير البورتريه', 'دليل تصوير المناظر الطبيعية', 'أساسيات إعدادات الكاميرا', 'قواعد التكوين الفوتوغرافي', 'تصوير الهاتف المحمول', 'إتقان تصوير الساعة الذهبية', 'أسرار تصوير البورتريه', 'دليل تصوير المناظر الطبيعية'][index]}
                                        </h3>
                                        <p className="card-excerpt">
                                            تعلم كيفية التقاط صور مذهلة مع نصائح احترافية حول الإضاءة والتكوين.
                                        </p>
                                        <div className="d-flex align-items-center justify-content-between card-footer">
                                            <div className="author-info">
                                                <img src={`https://images.unsplash.com/photo-${['1507003211169-0a1dd7228f2d', '1500648767791-00dcc994a43e', '1472099645785-5658abf4ff4e', '1560250097-0b93528c311a', '1506794778202-cad84cf45f1d', '1463453091185-61582044d556', '1507003211169-0a1dd7228f2d', '1500648767791-00dcc994a43e', '1472099645785-5658abf4ff4e'][index]}?w=100&h=100&fit=crop&crop=face`} alt="Author" className="author-avatar-sm" />
                                                <div>
                                                    <p className="author-name">
                                                        {['سالم أحمد', 'محمد علي', 'إبراهيم حسن', 'داود خالد', 'ليث محمود', 'جمال عبدالله', 'سالم أحمد', 'محمد علي', 'إبراهيم حسن'][index]}
                                                    </p>
                                                    <p className="author-role">مصور محترف</p>
                                                </div>
                                            </div>
                                            <div className="card-arrow">
                                                <i className="fa-solid fa-arrow-left"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        </div>
                    ))} */}
                    
                    

                </div>

                {/* Pagination */}
                {articlesToShow.length > 6 && <>
                    <div className="pagination-wrapper">
                    <button onClick={prevPage} disabled={activePage === 0 ? true : false} className="pagination-btn" title="السابق">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                        <div className="d-flex align-items-center gap-2">
                            {rangeHelper(articlesToShow.length).map(i => {
                                return <button key={i} onClick={() => setActivePage(i)} className={`page-btn ${i === activePage ? "active" : ""}` }>{i+1}</button>
                            })}
                        </div>
                        <button onClick={nextPage} disabled={activePage + 1 === Math.ceil(articlesToShow.length / 6) ? true : false} className="pagination-btn" title="التالي">
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </div>
                    <p className="text-center text-white-50 mt-3 small">صفحة {activePage + 1} من {Math.ceil(articlesToShow.length / 6)}</p>
                </>
                    
                }
                
            </div>
        </main>
    )
}
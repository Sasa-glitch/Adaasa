import React from 'react'

export default function NotFound() {
    return (
        <main className="">
            <div className="notfound-container">
                <div className="hero-grid"></div>
                
                <div className="notfound-blurs">
                    <div className="notfound-blur notfound-blur-left"></div>
                    <div className="notfound-blur notfound-blur-right"></div>
                </div>

                <div className="position-relative text-center px-4 mx-auto notfound-content">
                    <div className="position-relative mb-4">
                        <h1 className="notfound-title">404</h1>
                        <div className="notfound-title-blur">404</div>
                    </div>

                    <div className="position-relative mx-auto mb-4 notfound-icon-wrapper">
                        <div className="notfound-icon-bg"></div>
                        <div className="notfound-icon-content">
                            <i className="fa-regular fa-face-frown notfound-icon"></i>
                        </div>
                        <div className="notfound-shape notfound-shape-top"></div>
                        <div className="notfound-shape notfound-shape-bottom"></div>
                    </div>

                    <h2 className="notfound-subtitle">عفواً! الصفحة غير موجودة</h2>
                    <p className="notfound-text">
                        الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
                    </p>

                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
                        <a href="/" className="btn-hero-primary">
                            <i className="fa-solid fa-home"></i>
                            الذهاب للرئيسية
                        </a>
                        <a href="/blog" className="btn-hero-secondary">
                            <i className="fa-solid fa-blog"></i>
                            تصفح المقالات
                        </a>
                    </div>

                    <div className="notfound-links">
                        <p className="notfound-links-title">قد تجد هذه مفيدة:</p>
                        <div className="d-flex flex-wrap justify-content-center gap-3">
                            <a href="/blog" className="notfound-link">المدونة</a>
                            <span className="notfound-separator">•</span>
                            <a href="/about" className="notfound-link">من نحن</a>
                            <span className="notfound-separator">•</span>
                            <a href="/privacy" className="notfound-link">الخصوصية</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
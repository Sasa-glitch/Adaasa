import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-blur footer-blur-left"></div>
            <div className="footer-blur footer-blur-right"></div>
            
            <div className="container-lg py-5">
                <div className="row g-5">
                    {/* Brand Section */}
                    <div className="col-12 col-lg-3">
                        <Link to={"/"} className="d-flex align-items-center gap-3 mb-4 footer-brand">
                            <div className="footer-logo">
                                <span>ع</span>
                            </div>
                            <span className="h5 mb-0 text-white">عدسة</span>
                        </Link> 
                        <p className="footer-description mb-4">
                            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                        </p>
                        <div className="d-flex gap-2">
                            <a href="https://twitter.com/adasah" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="twitter">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a> 
                            <a href="https://github.com/adasah" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="github">
                                <i className="fa-brands fa-github"></i>
                            </a> 
                            <a href="https://linkedin.com/company/adasah" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="linkedin">
                                <i className="fa-brands fa-linkedin"></i>
                            </a> 
                            <a href="https://youtube.com/@adasah" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="youtube">
                                <i className="fa-brands fa-youtube"></i>
                            </a> 
                        </div>
                    </div>

                    {/* Explore Section */}
                    <div className="col-12 col-md-4 col-lg-3">
                        <h3 className="footer-title">
                            <span className="footer-title-line"></span>
                            استكشف
                        </h3>
                        <ul className="footer-list">
                            <li>
                                <Link to={"/"} className="footer-link">
                                    <i className="fa-solid fa-chevron-left footer-link-icon"></i>
                                    الرئيسية
                                </Link> 
                            </li>
                            <li>
                                <Link to={"/blog"} className="footer-link">
                                    <i className="fa-solid fa-chevron-left footer-link-icon"></i>
                                    المدونة
                                </Link> 
                            </li>
                            <li>
                                <Link to={"/about"} className="footer-link">
                                    <i className="fa-solid fa-chevron-left footer-link-icon"></i>
                                    من نحن
                                </Link> 
                            </li>
                        </ul>
                    </div>

                    {/* Categories Section */}
                    <div className="col-12 col-md-4 col-lg-3">
                        <h3 className="footer-title">
                            <span className="footer-title-line"></span>
                            التصنيفات
                        </h3>
                        <ul className="footer-list">
                            <li>
                                <Link to={"/blog?category=إضاءة"} className="footer-link">
                                    <i className="fa-solid fa-chevron-left footer-link-icon"></i>
                                    إضاءة
                                </Link> 
                            </li>
                            <li>
                                <Link to={"/blog?category=بورتريه"} className="footer-link">
                                    <i className="fa-solid fa-chevron-left footer-link-icon"></i>
                                    بورتريه
                                </Link> 
                            </li>
                            <li>
                                <Link to={"/blog?category=مناظر طبيعية"} className="footer-link">
                                    <i className="fa-solid fa-chevron-left footer-link-icon"></i>
                                    مناظر طبيعية
                                </Link> 
                            </li>
                            <li>
                                <Link to={"/blog?category=تقنيات"} className="footer-link">
                                    <i className="fa-solid fa-chevron-left footer-link-icon"></i>
                                    تقنيات
                                </Link> 
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="col-12 col-md-4 col-lg-3">
                        <h3 className="footer-title">
                            <span className="footer-title-line"></span>
                            ابقى على اطلاع
                        </h3>
                        <p className="footer-newsletter-text">
                            اشترك للحصول على أحدث المقالات والتحديثات.
                        </p>
                        <form className="footer-form">
                            <input 
                                type="email" 
                                placeholder="أدخل بريدك الإلكتروني"
                                className="footer-input"
                            />
                            <button type="submit" className="footer-submit-btn rounded-pill mt-2">
                                اشترك
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container-lg py-4">
                    <div className="row align-items-center g-3">
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <p className="footer-copyright mb-0">
                                © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart my-color-primary"></i> جميع الحقوق محفوظة.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-flex gap-4 justify-content-center justify-content-md-end">
                                <a href="#" className="footer-bottom-link">سياسة الخصوصية</a> 
                                <a href="#" className="footer-bottom-link">شروط الخدمة</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
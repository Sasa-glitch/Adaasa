import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    const teamMembers = [
        { name: 'سالم أحمد', role: 'مصور محترف', img: '1507003211169-0a1dd7228f2d' },
        { name: 'محمد علي', role: 'مصور بورتريه', img: '1500648767791-00dcc994a43e' },
        { name: 'إبراهيم حسن', role: 'مصور طبيعة', img: '1472099645785-5658abf4ff4e' },
        { name: 'داود خالد', role: 'مدرب تصوير', img: '1560250097-0b93528c311a' },
        { name: 'ليث محمود', role: 'فنان بصري', img: '1506794778202-cad84cf45f1d' },
        { name: 'جمال عبدالله', role: 'مصور ومراجع تقني', img: '1463453091185-61582044d556' },
        { name: 'خالد الفيصل', role: 'مصور فلكي', img: '1519085360753-af0119f7cbe7' },
        { name: 'نادر سعيد', role: 'مصور شوارع', img: '1566492031773-4f4e44671857' },
        { name: 'هاني الشمري', role: 'مصور طعام', img: '1552058544-f2b08422138a' },
        { name: 'عمر الراشد', role: 'مصور حياة برية', img: '1507591064344-4c6ce005b128' },
        { name: 'سامي الحربي', role: 'خبير تعديل صور', img: '1568602471122-7832951cc4c5' },
        { name: 'فارس العلي', role: 'فنان فوتوغرافي', img: '1570295999919-56ceb5ecca61' }
    ]

    return (
        <main>
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-grid"></div>
                <div className="about-hero-blur about-blur-left"></div>
                <div className="about-hero-blur about-blur-right"></div>
                
                <div className="container position-relative py-5 text-center">
                    <div className="section-badge mb-4">
                        <span className="small-dot"></span>
                        من نحن
                    </div>
                    <h1 className="about-hero-title mb-4">
                        مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
                    </h1>
                    <p className="about-hero-text mx-auto mb-5">
                        مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
                    </p>

                    <div className="row g-3 mx-auto about-stats">
                        <div className="col-6 col-md-3">
                            <div className="about-stat-card">
                                <i className="fa-solid fa-users stat-icon"></i>
                                <div className="stat-number gradient-text">+2مليون</div>
                                <div className="stat-label">قارئ شهرياً</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="about-stat-card">
                                <i className="fa-solid fa-newspaper stat-icon"></i>
                                <div className="stat-number gradient-text">+500</div>
                                <div className="stat-label">مقالة منشورة</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="about-stat-card">
                                <i className="fa-solid fa-pen-nib stat-icon"></i>
                                <div className="stat-number gradient-text">+50</div>
                                <div className="stat-label">كاتب خبير</div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="about-stat-card">
                                <i className="fa-solid fa-book-open stat-icon"></i>
                                <div className="stat-number gradient-text">+15</div>
                                <div className="stat-label">تصنيف</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-5 values-section">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="values-title mb-3">
                            <span className="title-bar title-bar-start"></span>
                            قيمنا
                            <span className="title-bar title-bar-end"></span>
                        </h2>
                        <p className="values-subtitle mx-auto">
                            المبادئ التي توجه كل ما نقوم بإنشائه
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="value-card">
                                <div className="value-overlay"></div>
                                <div className="value-content">
                                    <i className="fa-solid fa-bullseye value-icon"></i>
                                    <h3 className="value-title">الجودة أولاً</h3>
                                    <p className="value-text">محتوى مدروس ومكتوب بخبرة</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="value-card">
                                <div className="value-overlay"></div>
                                <div className="value-content">
                                    <i className="fa-solid fa-bolt value-icon"></i>
                                    <h3 className="value-title">تركيز عملي</h3>
                                    <p className="value-text">أمثلة واقعية يمكنك تطبيقها اليوم</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="value-card">
                                <div className="value-overlay"></div>
                                <div className="value-content">
                                    <i className="fa-solid fa-handshake value-icon"></i>
                                    <h3 className="value-title">المجتمع</h3>
                                    <p className="value-text">تعلم مع آلاف المصورين</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="value-card">
                                <div className="value-overlay"></div>
                                <div className="value-content">
                                    <i className="fa-solid fa-arrows-rotate value-icon"></i>
                                    <h3 className="value-title">دائماً محدث</h3>
                                    <p className="value-text">أحدث الاتجاهات وأفضل الممارسات</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-5 team-section">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <div className="section-badge mb-3">فريقنا</div>
                        <h2 className="section-title mb-3">تعرف على كتابنا</h2>
                        <p className="section-subtitle mx-auto">
                            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
                        </p>
                    </div>

                    <div className="row g-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-12 col-sm-6 col-lg-4">
                                <div className="team-card">
                                    <div className="team-avatar-wrapper">
                                        <img 
                                            src={`https://images.unsplash.com/photo-${member.img}?w=100&h=100&fit=crop&crop=face`}
                                            alt={member.name}
                                            className="team-avatar"
                                        />
                                        <div className="verified-badge">
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                    </div>
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <div className="team-socials">
                                        <a href="#" className="team-social-link" aria-label="Twitter">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a> 
                                        <a href="#" className="team-social-link team-social-github" aria-label="GitHub">
                                            <i className="fa-brands fa-github"></i>
                                        </a> 
                                        <a href="#" className="team-social-link team-social-linkedin" aria-label="LinkedIn">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a> 
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5 cta-section">
                <div className="cta-blur cta-blur-left"></div>
                <div className="cta-blur cta-blur-right"></div>
                
                <div className="container position-relative">
                    <div className="cta-card text-center">
                        <h2 className="cta-title mb-4">لديك أسئلة؟ دعنا نتحدث!</h2>
                        <p className="cta-text mb-4">
                            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
                        </p>
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <a href="mailto:hello@adasah.com" className="btn-cta-primary">
                                <i className="fa-regular fa-envelope"></i>
                                تواصل معنا
                            </a> 
                            <Link to={"/blog"} className="btn-cta-secondary" onClick={() => window.scrollTo({top : 0, left :0, behavior : "smooth"})}>
                                تصفح المقالات
                            </Link> 
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
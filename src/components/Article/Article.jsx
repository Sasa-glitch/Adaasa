import React from 'react'

export default function Article(props) {
  return (
    <article className="featured-article">
        <a href={`/blog/${props.post.slug}`} className="row g-0">
            <div className="col-md-6">
                <div className="featured-image">
                    <img src={props.post.image} alt={props.post.title} />
                    <div className="image-overlay"></div>
                    <span className="featured-badge">
                        <i className="fa-solid fa-star"></i>
                        مميز
                    </span>
                </div>
            </div>
            <div className="col-md-6 d-flex">
                <div className="featured-content flex-fill d-flex flex-column justify-content-between">
                    <div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                        <span className="category-badge">{props.post.category}</span>
                        <span className="read-time">
                            <i className="fa-regular fa-clock"></i>
                            {props.post.readTime}
                        </span>
                        </div>
                        <h2 className="article-title">{props.post.title}</h2>
                        <p className="article-excerpt">{props.post.excerpt}</p>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="author-info">
                            <div className="author-avatar">
                                <img src={props.post.author.avatar} alt={props.post.author.name} />
                                <span className="online-badge"></span>
                            </div>
                            <div>
                                <p className="author-name">{props.post.author.name}</p>
                                <p className="article-date">{new Date(props.post.date).toLocaleDateString('ar-EG', {
        month: "long",
        day: "numeric",
        year: "numeric",
    })}</p>
                            </div>
                        </div>
                        <span className="read-more">
                            اقرأ المقال
                            <i className="fa-solid fa-arrow-left"></i>
                        </span>
                    </div>
                </div>
            </div>
        </a>
    </article>
  )
}

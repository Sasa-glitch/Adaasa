import React from 'react'
import { Link } from 'react-router-dom'


export default function BlogArticle(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex">
        <article className="blog-card d-flex flex-fill">
            <Link className='flex-fill d-flex flex-column' to={`/blog/${props.post.slug}`}>
                <div className="blog-card-image">
                    <img src={props.post.image} alt={props.post.title} />
                    <div className="image-overlay"></div>
                    <span className="card-category-badge">
                        {props.post.category}
                    </span>
                </div>
                <div className="flex-grow-1 blog-card-content d-flex flex-column justify-content-between">
                    <div>
                        <div className="d-flex align-items-center gap-3 mb-3 card-meta">
                        <span className="read-time">
                            <i className="fa-regular fa-clock"></i>
                            {props.post.readTime}
                        </span>
                        <span className="meta-dot"></span>
                        <span>{new Date(props.post.date).toLocaleDateString("ar-Eg", {
                            month : "long",
                            day : "numeric",
                            year : "numeric"
                        })}</span>
                    </div>
                    <h3 className="card-title">
                        {props.post.title}
                    </h3>
                    <p className="card-excerpt">
                        {props.post.excerpt}
                    </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between card-footer">
                        <div className="author-info">
                            <img src={props.post.author.avatar} alt={props.post.author.name} className="author-avatar-sm" />
                            <div>
                                <p className="author-name">
                                    {props.post.author.name}
                                </p>
                                <p className="author-role">{props.post.author.role}</p>
                            </div>
                        </div>
                        <div className="card-arrow">
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    </div>
  )
}

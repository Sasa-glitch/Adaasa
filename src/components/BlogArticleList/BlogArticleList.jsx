import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogArticleList(props) {
  return (
    <div className="container-fluid mt-4">
        <article className="blog-card-list p-0">
            <Link to={"/blog/portrait-photography-secrets"} className="row">
                <div className="col-12 col-md-auto">
                    <div className="blog-card-list-image">
                        <img src={props.post.image} alt={props.post.title}/>
                        <div className="list-image-overlay" />
                    </div>
                </div>
                <div className="col-12 col-md">
                <div className="blog-card-list-content">
                    <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                    <span className="category-badge">{props.post.category}</span>
                    <span className="read-time">
                        <i className="fa-regular fa-clock" />
                        {props.post.readTime}
                    </span>
                    <span className="article-date-inline">
                        <i className="fa-regular fa-calendar" />
                        {new Date(props.post.date).toLocaleDateString("ar-Eg", {month:'long', day:'numeric', year:'numeric'})}
                    </span>
                    </div>
                    <h2 className="list-article-title">{props.post.title}</h2>
                    <p className="list-article-excerpt">{props.post.excerpt}</p>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="author-info">
                        <img src={props.post.author.avatar} alt={props.post.author.name} className="author-avatar-list" />
                        <div>
                        <p className="author-name">{props.post.author.name}</p>
                        <p className="author-role">{props.post.author.role}</p>
                        </div>
                    </div>
                    <span className="list-read-more d-none d-sm-inline-flex">
                        اقرأ المقال
                        <i className="fa-solid fa-arrow-left" />
                    </span>
                    </div>
                </div>
                </div>
            </Link>
        </article>
    </div>
  )
}

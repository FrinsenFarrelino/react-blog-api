import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function Blog() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    document.title = 'Blog'
    async function getArticles() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
      const response = await request.json()

      setArticles(response)
      setLoading(false)
    }
    getArticles()
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">Blog Page</h1>
      <p className="section-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, fugit impedit. Dicta obcaecati blanditiis delectus ea dolorem eligendi, modi nobis.</p>

      {loading ? (
        <p>Loading Articles....</p>
      ) : (
        <div className="articles">
          {articles.map(function (article) {
            return (
              <article key={article.id} className="article">
                <h2 className="article-title"><Link to={`/blog/${article.id}`}>{article.title}</Link></h2>
                <p className="article-time">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
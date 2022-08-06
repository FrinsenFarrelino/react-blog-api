import { useEffect } from "react"

export default function Contact() {
  useEffect(function () {
    document.title = 'Contact'
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <div className="section-description">
        <p>You can contact me at</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, incidunt?</p>
        <ul>
          <li>email : frinsenfarrelino@gmail.com</li>
          <li>WA : 081249165641</li>
        </ul>
      </div>
    </section>
  )
}
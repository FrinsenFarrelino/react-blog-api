import { useEffect } from "react"

export default function Profile() {
  useEffect(function () {
    document.title = 'Profile'
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">Profile Page</h1>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui iusto iure consequatur voluptate fugit corrupti. Asperiores nam deleniti nihil, nemo temporibus debitis harum aut tempore voluptatem quae dicta et animi vitae ratione consequatur praesentium neque maxime repudiandae voluptatibus quisquam autem impedit aliquid quibusdam! Maiores, dolores? Itaque sequi nam fugit?</p>
    </section>
  )
}
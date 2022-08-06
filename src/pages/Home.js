import { useEffect } from "react"

export default function Home() {
  useEffect(function () {
    document.title = 'Home'
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">Welcome to my website</h1>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sapiente quibusdam perferendis voluptas porro, labore quos harum in libero impedit?</p>
    </section>
  )
}
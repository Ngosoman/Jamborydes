function PageIntro({ kicker, title, description }) {
  return (
    <section className="page-intro">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

export default PageIntro

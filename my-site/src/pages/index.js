import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default IndexPage

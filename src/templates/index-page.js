import React from 'react'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const IndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll/>
          </div>
        </div>
      </section>
    </Layout>
  )
};

export default IndexPage;
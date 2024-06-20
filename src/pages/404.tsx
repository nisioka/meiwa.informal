import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ location }: { location: Location }) => {
  return (
    <Layout location={location}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Layout>
  )
}

export const Head = ({ location }: { location: Location }) => (
  <Seo title="404: Not Found" location={location} />
)

export default NotFoundPage

import * as React from "react"

import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { categoryAll, convertCategory, removeHtmlTags } from "../utilFunction"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLine } from "@fortawesome/free-brands-svg-icons"
import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image"

const LineFriend = () => {
  const {
    allFile,
  }: {
    allFile: AllFile
  } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "static" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(
                  width: 100
                  height: 100
                  formats: [AUTO, WEBP, AVIF]
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    `
  )


  let allFeaturedImages: { [key: string]: IGatsbyImageData } = {}
  allFile &&
  allFile.edges
  .filter(n => n.node.childImageSharp)
  .forEach(node => {
    allFeaturedImages[node.node.relativePath] =
      node.node.childImageSharp?.gatsbyImageData
  })
  const firstImage = getImage(allFeaturedImages["qr/firstYear.webp"])

  return (
    <LineFriendAllTitle>
      <h5><FontAwesomeIcon icon={faLine} style={{color: "green"}}/>LINE友達</h5>
      <ul>
        <li>
          年少
          {firstImage && (
            <GatsbyImage alt={"年少"} image={firstImage} />
          )}
        </li>
        --------------------
        <li>
          年中: Coming soon
        </li>
        --------------------
        <li>
          年長: Coming soon
        </li>
      </ul>
      <Link to="/other/line-friend">詳細</Link>
    </LineFriendAllTitle>
  )
}

export default LineFriend

const LineFriendAllTitle = styled.div`
  background-color: #fff;

  h5 {
    margin-top: var(--spacing-1);
  }

  li {
    list-style: none;
    margin: var(--spacing-1);
  }
`

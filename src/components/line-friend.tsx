import * as React from "react"

import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { categoryAll, convertCategory, removeHtmlTags } from "../utilFunction"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLine } from "@fortawesome/free-brands-svg-icons"
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image"

const LineFriend = () => {
  return (
    <LineFriendAllTitle>
      <h5>
        <FontAwesomeIcon icon={faLine} style={{ color: "green" }} />
        LINE友達
      </h5>
      <ul>
        <li>
          年少
          <StaticImage
            src={"../../static/qr/firstYear.webp"}
            alt={""}
            width={100}
          />
        </li>
        --------------------
        <li>年中: Coming soon</li>
        --------------------
        <li>年長: Coming soon</li>
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

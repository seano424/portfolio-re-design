import { groq } from 'next-sanity'

export const basicProjectFields = groq`
_id,
title,
slug
`

export const imageFields = groq`
asset-> {
  url,
  metadata {
    dimensions {
      width,
      height
    }
  }
}
`

export const getProjectsQuery = groq`
*[_type == "project"] {
  ${basicProjectFields}
  featuredImage {
    ${imageFields}
  },
  images[] {
    ${imageFields}
  },
  liveUrl,
  githubUrl,
  description
}
`

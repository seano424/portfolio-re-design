import { groq } from 'next-sanity'

export const getProjectsQuery = groq`*[_type == "project"]{
  _id,
  _type,
  title,
  slug,
  featuredImage {
    asset->{
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  images[]{
    asset->{
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  liveUrl,
  githubUrl,
  description
}`

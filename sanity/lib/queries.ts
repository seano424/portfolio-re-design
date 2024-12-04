import { groq } from 'next-sanity'

export const getMostRecentProjectsQuery = groq`*[_type == "project"]| order(_updatedAt desc)[0...3]{
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

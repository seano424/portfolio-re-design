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

export const getPostsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
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
  excerpt,
  content
}`

// Query for getting a single post by slug
export const getPostBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
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
  excerpt,
  content
}`

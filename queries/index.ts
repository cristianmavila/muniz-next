import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      content
      previousPostSlug
      nextPostSlug
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($first: Int!, $category: String) {
    posts(first: $first, where: { categoryName: $category, orderby: { field: IN, order: ASC } }) {
      nodes {
        id
        title
        slug
        content
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              file
              height
              width
            }
          }
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
`;

export const GET_POSTS_HOME = gql`
  query GetPostsByCategory($first: Int!, $category: String) {
    posts(
      first: $first
      where: { categoryName: $category, orderby: { field: MENU_ORDER, order: ASC } }
    ) {
      nodes {
        id
        title
        slug
        content
        homeThumbnail
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              file
              height
              width
            }
          }
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
`;

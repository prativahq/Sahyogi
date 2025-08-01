export const RESOURCES_PAGE_QUERY = `*[_type == "resourcesPage"][0]{
  pageTitle,
  pageSubtitle,
  featuredPosts[]{
    title,
    excerpt,
    category,
    readTime,
    publishDate,
    featuredImage{
      asset->{
        _id,
        url
      }
    },
    author{
      name,
      role,
      avatar{
        asset->{
          _id,
          url
        }
      }
    },
    tags,
    link,
    isFeatured
  },
  categories[]{
    name,
    slug,
    description,
    icon,
    color
  },
  newsletter{
    headline,
    description,
    buttonText,
    placeholderText
  },
  seo{
    metaTitle,
    metaDescription,
    keywords
  }
}`;

export const PRODUCT_PAGE_QUERY = `*[_type == "productPage"][0]{
  headline,
  productIntro,
  interactiveDemo{
    type,
    description,
    videoSelection,
    videoUrl,
    uploadedVideo{
      asset->{
        _id,
        url,
        originalFilename,
        mimeType,
        size
      }
    },
    videoThumbnail{
      asset->{
        _id,
        url
      }
    },
    imageSelection,
    uploadedImage{
      asset->{
        _id,
        url
      }
    },
    imageUrl,
    embedCode
  },
  keyModules[]{
    title,
    icon,
    description,
    features[]
  },
  pricingSnapshot{
    startingPrice,
    ctaText,
    ctaLink
  },
  ctaButtons[]{
    text,
    link,
    type
  },
  seo{
    metaTitle,
    metaDescription,
    keywords
  }
}`;

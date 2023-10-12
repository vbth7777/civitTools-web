import imageNotFound from '~/assets/images/image-not-found.png';
import avatarPlaceholder from '~/assets/images/avatar-placeholder.png';
import { Model } from '~/class';
export function getInformationModel(item) {
  return new Model({
    name: item.name,
    id: item.id,
    type: item.type,
    authorName: item.creator.username,
    authorAvatar: item.creator.image || avatarPlaceholder,
    rating: item.stats.rating,
    ratingCount: item.stats.ratingCount,
    downloadedCount: item.stats.downloadCount,
    favoritedCount: item.stats.favoriteCount,
    commentedCount: item.stats.commentCount,
    description: item.description,
    tags: item.tags,
    modelVersions: item.modelVersions,
    image: (() => {
      const images = item.modelVersions[0].images
      for (let image of images) {
        if (image?.url) {
          return image.url;
        }
      }
      return null;
    })() || imageNotFound,
  })
}

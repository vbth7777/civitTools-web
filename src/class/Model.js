export class Model {
  constructor({
    name,
    id,
    type,
    authorName,
    authorAvatar,
    rating,
    ratingCount,
    downloadedCount,
    favoritedCount,
    commentedCount,
    description,
    tags,
    modelVersions,
    image,
  }) {
    this.name = name;
    this.id = id;
    this.type = type;
    this.authorName = authorName;
    this.authorAvatar = authorAvatar;
    this.rating = rating;
    this.ratingCount = ratingCount;
    this.downloadedCount = downloadedCount;
    this.favoritedCount = favoritedCount;
    this.commentedCount = commentedCount;
    this.description = description;
    this.tags = tags;
    this.modelVersions = modelVersions;
    this.image = image;
  }
}

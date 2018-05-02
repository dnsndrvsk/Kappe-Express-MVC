import models from '../models'

export default (query) => {
  switch (query) {
      case 'Card':
      return models.CardModel
      break
      case 'Testimonial':
      return models.TestimonialModel
      break
      case 'AsidePost':
      return models.AsidePostModel
      break
      case 'GalleryPost':
      return models.GalleryPostModel
      break
      case 'QuotePost':
      return models.QuotePostModel
      break
      case 'StandartPost':
      return models.StandartPostModel
      break
      case 'VideoPost':
      return models.VideoPostModel
      break
      case 'WebsitePost':
      return models.WebsitePostModel
      break
      default:
      console.log('no matching models')
  }
}
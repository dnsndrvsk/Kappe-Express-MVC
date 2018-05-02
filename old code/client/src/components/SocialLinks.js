import React from 'react'
import socialLinksData from '../data/socialLinksData'
import '../styles/components/SocialLinks.scss'

const socialLinks = [
  { linkClass: 'social-links__link--fli', 
    linkTo: 'https://www.flickr.com', 
    iconClass: 'fa-flickr' 
  },
  { linkClass: 'social-links__link--gp', 
    linkTo: 'https://plus.google.com', 
    iconClass: 'fa-google-plus' 
  },
  { linkClass: 'social-links__link--twt', 
    linkTo: 'https://twitter.com', 
    iconClass: 'fa-twitter' 
  },
  { linkClass: 'social-links__link--prin', 
    linkTo: 'https://ru.pinterest.com', 
    iconClass: 'fa-pinterest' 
  },
  { linkClass: 'social-links__link--drib', 
    linkTo: 'https://dribbble.com', 
    iconClass: 'fa-dribbble' 
  },
  { linkClass: 'social-links__link--beh', 
    linkTo: 'https://www.behance.net', 
    iconClass: 'fa-behance' 
  },
  { linkClass: 'social-links__link--fb', 
    linkTo: 'https://facebook.com', 
    iconClass: 'fa-facebook' 
  }
]


const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinksData.map((item, i) => {
        const linkClass=`social-links__link ${item.linkClass}`
        const iconClass=`fa ${item.iconClass}`

        return (
          <a
            className={linkClass}
            href={item.linkTo}
            key={i}
          >
            <i className={iconClass}></i>
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
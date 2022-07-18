import { openInNewTab } from 'utils/openInNewTab'
import content from '../../content'

export function cta () {
  openInNewTab(`https://wa.me/${content.social.whatsAppNumber}`)
}

export function ctaSecondary () {
  openInNewTab(content.social.instagramLink)
}
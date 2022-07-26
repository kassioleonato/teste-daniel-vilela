import { openInNewTab } from 'utils/openInNewTab'
import content from '../../content'
import {CountAPI} from './CountAPI2'

export function cta () {
  CountAPI();
  openInNewTab(`https://wa.me/${content.social.whatsAppNumber}?text=Ol%C3%A1%2C%20conheci%20o%20seu%20trabalho%20atrav%C3%A9s%20do%20site%20e%20quero%20marcar%20uma%20consulta.%20`)
}

export function ctaSecondary () {
  openInNewTab(content.social.instagramLink)
}

export function cta2(){
  CountAPI();
  openInNewTab(`https://wa.me/553588713224`)
}
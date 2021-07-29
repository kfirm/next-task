import './Footer.scss'
import {ReactComponent as YouTube} from './assets/youtube-share-icon.svg'
import {ReactComponent as Facebook} from './assets/facebook-share-icon.svg'
import {ReactComponent as Instagram} from './assets/instagram-share-icon.svg'
import {ReactComponent as Twitter} from './assets/twitter-share-icon.svg'
import {ReactComponent as LinkedIn} from './assets/linkedin-share-icon.svg'


export const Footer = () =>
    <footer className={'Footer'}>
        <div className={'Footer-n-logo'}>
        </div>
        <div className={'title title-center'}>
            Contact Us
        </div>
        <div>
            support@nextmovies.com
        </div>
        <div>
            Mon – Fri | 6:00am – 5:00 pm PT
        </div>
        <section className={'Footer-media flex-space-around'}>
                <Facebook/>
                <LinkedIn/>
                <Twitter/>
                <Instagram/>
                <YouTube/>
        </section>
    </footer>

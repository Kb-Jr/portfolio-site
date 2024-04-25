// import { React_img, Frontend_mentor_img, Django_img, Javascript_img, HtmlxCss_img } from "."
import {default as React_img} from './assets/React_image.png'
import {default as Frontend_mentor_img} from './assets/frontend_mentor_image.png'
import {default as Django_img} from './assets/django_image.png'
import {default as Javascript_img} from './assets/javascript_image.jpg'
import {default as HtmlxCss_img} from './assets/htmlxcss_image.webp'


export const topNavLinks = [
    {
        name:'Twitter',
        icon:'fa-brands fa-twitter', 
        url:'https://twitter.com/Joker__XL'
    },
    {
        name:'Github',
        icon:'fa-brands fa-github',
        url:'https://github.com/Kb-Jr' 
    },
    {
        name:'LinkedIn',
        icon:'fa-brands fa-linkedin', 
        url:'https://www.linkedin.com/in/abdul-kabiru-b00285175/'
    },
    {
        name:'Instagram',
        icon:'fa-brands fa-instagram', 
        url:'https://www.instagram.com/k.b_el_jefe'
    },
    {
        name:'Youtube',
        icon:'fa-brands fa-youtube', 
        url:'https://www.youtube.com/@abdulkabiru2044/videos'
    },


]


export const sideNavLinks = [
    {
        name:'',
        icon:'fa-solid fa-house',
    },
    {
        name:'projects',
        icon:'fa-solid fa-diagram-project',
    },
    {
        name:'certifications',
        icon:'fa-solid fa-certificate',
    },
    {
        name:'contact-me',
        icon:'fa-solid fa-message',
    },
]

export const projectsData = [
    {
        title:'React Projects',
        image: React_img,
        Description:'This section contains details of projects I have worked on  using react js framework as well as other third party libraries.',
    },
    {
        title:'Frontend Mentor Projects',
        image:Frontend_mentor_img,
        Description:'This section contains details of projects I have worked on as Challenges on the frontend mentor platform.',
    },
    {
        title:'Django Projects',
        image:Django_img,
        Description:'This section contains details of projects worked on when I enrolled in Harvards CS50W course. The Projects were executed using the Django framework.',
    },
    {
        title:'Javascript Projects',
        image:Javascript_img,
        Description:'In this section you will find a variety of projects carried out using pure javascript.',
    },
    {
        title:'Landing pages',
        image:HtmlxCss_img,
        Description:'This section contains Web pages built using purely HTML and CSS.',
    }
]


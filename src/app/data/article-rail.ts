

export interface Hero {
  meta: string;
  date: string;
  title: string;
  author_name: string;
  author_img: string;
  content: string;
}

export const HEROES = [
 {
    meta:"Almanac",
    date:"June 8, 2020",
    title:"text-decoration-thickness",
    author_name:"Mojtaba Seyedi",
    author_img:"https://secure.gravatar.com/avatar/7b9f5e341bcb99d32f140c1f08f32f3a?s=80&d=retro&r=pg",
    content:"The text-decoration-thickness property in CSS sets the stroke thickness of the decoration line that is used on text in an element. The text-deocration-line value needs to be either underline, line-through, or overline to reflect the thickness property."

},
  {
    meta:"Article",
    date:"June 8, 2020",
    title:"How to Get All Custom Properties on a Page in JavaScript",
    author_name:"Tyler Gaw",
    author_img:"https://secure.gravatar.com/avatar/e24592d69a67cc66d8a82186e24a129e?s=80&d=retro&r=pg",
    content:"We can use JavaScript to get the value of a CSS custom property. Robin wrote up a detailed explanation about this in Get a CSS Custom Property Value with JavaScript. To review, let’s say we’ve declared a single custom property on the HTML element:"

}, {
    meta:" Link",
    date:"June 5, 2020",
    title:"A/B Testing Instant.Page With Netlify and Speedcurve",
    author_name:"Chris Coyier",
    author_img:"https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg",
    content:"Instant.Page does one special thing to make sites faster: it preloads the next page when it’s pretty sure you’re going to click a link (either by hovering over 65ms or mousedown on desktop, or touchstart on mobile), so when you do complete the click (probably a few hundred milliseconds later), it loads that much faster.It’s one thing to understand that approach, buy into it, integrate it, and consider it a perf win. I have it installed here!It’s another …"

}
]
export const addata=[
    {
    ad_img:"https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/https://cdn4.buysellads.net/uu/7/58884/1580308746-SendGrid_V2.jpg",
    ad_subimg:"https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1544564316/Avatar_qr6vy9.png",
    ad_content:"Implement our SMTP service in under 5 minutes with our quick and easy 2-step sign-up process."
    },
    {
    ad_img:"https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1559739084/0619_White_OnlineForms_2_600x500_zfqkk2.jpg",
    ad_subimg:"https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1544563294/chriscoyier_fmktwo.jpg",
    ad_content:"Wufoo powers all our web forms here at CSS-Tricks, and has for over a decade!"
    },{
    ad_img:"https://res.cloudinary.com/css-tricks/image/fetch/w_250,q_auto,f_auto/https://cdn4.buysellads.net/uu/1/65221/1589476636-Logo-RedHat-A-Color-RGB_1_.png",
    ad_subimg:"https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1544564316/Avatar_qr6vy9.png",
    ad_content:"If your organization wasn’t already digitally transforming, it has to now."
    },{
    ad_img:"https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/https://cdn4.buysellads.net/uu/7/66572/1590680720-CSS_arcade_600x600.jpg",
    ad_subimg:"https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1544564316/Avatar_qr6vy9.png",
    ad_content:"MongoDB Atlas is built as a fully automated database-as-a-service. Get started free."
    } 
]
 

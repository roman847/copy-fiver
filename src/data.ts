export interface ICard {
  id: number;
  title: string;
  desc: string;
  path: string;
  img: string;
}

export interface IProject {
  id: number;
  img: string;
  pp: string;
  cat: string;
  username: string;
  quote: string;
}

export interface IGigsItem {
  id: number;
  img: string;
  pp: string;
  desc: string;
  price: number;
  star: number;
  username: string;
}

export const cards: ICard[] = [
  {
    id: 1,
    title: "AI Artists",
    desc: "Add talent to AI",
    path: "#",
    img: "/img/serviceCarousel/pexels-photo-7532110.jpeg",
  },
  {
    id: 2,
    title: "Logo Design",
    desc: "Build yor brand",
    path: "#",
    img: "/img/serviceCarousel/pexels-photo-11295165 (1).png",
  },
  {
    id: 3,
    title: "WordPress",
    desc: "Customize your site",
    path: "#",
    img: "/img/serviceCarousel/pexels-photo-11295165 (1).png",
  },
  {
    id: 4,
    title: "Voice Over",
    desc: "Share your message",
    path: "#",
    img: "/img/serviceCarousel/pexels-photo-7608079.png",
  },
  {
    id: 5,
    title: "Video Explainer",
    desc: "Engage your audience",
    path: "#",
    img: "/img/serviceCarousel/pexels-photo-13388047.png",
  },
  {
    id: 6,
    title: "Social Media",
    desc: "Reach more customers",
    path: "#",
    img: "/img/serviceCarousel/pexels-photo-11378899.png",
  },
  {
    id: 7,
    title: "SEO",
    desc: "Unlock growth online",
    path: "#",
    img: "/img/serviceCarousel/pexels-photo-4820241.jpeg",
  },
  {
    id: 8,
    title: "Illustration",
    desc: "Color you dreams",
    path: "#",
    img: "/img/serviceCarousel/pexels-photo-15032623.jpeg",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    img: "/img/projects/img/annapietrangeli.png",
    pp: "/img/projects/avatars/avatar1.png",
    cat: "Web and Mobile Design",
    username: "Anna Bell",
    quote: "I will design awesome website or landing page",
  },
  {
    id: 2,
    img: "/img/projects/img/bruno_malagrino.png",
    pp: "/img/projects/avatars/avatar2.png",
    cat: "Logo Design",
    username: "Morton Green",
    quote: "I will create a logo design for modern brands",
  },
  {
    id: 3,
    img: "/img/projects/img/christophbrandl.png",
    pp: "/img/projects/avatars/avatar3.png",
    cat: "Animated GIFs",
    username: "Emmett Potter",
    quote: "I will create a unique short animated GIF",
  },
  {
    id: 4,
    img: "/img/projects/img/eveeelin.png",
    pp: "/img/projects/avatars/avatar4.png",
    cat: "Packaging Design",
    username: "Freddie Johnston",
    quote: "I will design your next amazing product line and packaging",
  },
  {
    id: 5,
    img: "/img/projects/img/fernandobengua.png",
    pp: "/img/projects/avatars/avatar5.png",
    cat: "Social Media Design",
    username: "Audrey Richards",
    quote: "I will design top notch social media content",
  },
  {
    id: 6,
    img: "/img/projects/img/spickex.png",
    pp: "/img/projects/avatars/avatar6.png",
    cat: "Illustration",
    username: "Dalton Hudson",
    quote: "I will create a quirky combination of text and illustration",
  },
  {
    id: 7,
    img: "/img/projects/img/mijalzagier.png",
    pp: "/img/projects/avatars/avatar7.png",
    cat: "Book Design",
    username: "Hannah Dougherty",
    quote: "I will format your book ebook magazine and pdf",
  },
  {
    id: 8,
    img: "/img/projects/img/passionshake.png",
    pp: "/img/projects/avatars/avatar8.png",
    cat: "Portrailts & Caricatures",
    username: "Ward Brewer",
    quote: "I will draw a portrait to support my family in ukraine",
  },
];

export const gigs: IGigsItem[] = [
  {
    id: 1,
    img: "/img/gigs/1jpeg.jpeg",
    pp: "/img/gig/1.jpeg",
    desc: "I will create ai art character from your images and prompts",
    price: 59,
    star: 5,
    username: "Anna Bell",
  },
  {
    id: 2,
    img: "/img/gigs/2.jpeg",
    pp: "/img/gig/2.jpeg",
    desc: "I will create ultra high quality character art with ai",
    price: 79,
    star: 5,
    username: "Lannie Coleman",
  },
  {
    id: 3,
    img: "/img/gigs/3.jpeg",
    pp: "/img/gig/3.jpeg",
    desc: "I will creating unique ai generated artworks mid journey ai artist",
    price: 112,
    star: 5,
    username: "Carol Steve",
  },
  {
    id: 4,
    img: "/img/gigs/4.jpeg",
    pp: "/img/gig/4.jpeg",
    desc: "I will create custom ai generated artwork using your photos",
    price: 99,
    star: 4,
    username: "Don Weber",
  },
  {
    id: 5,
    img: "/img/gigs/5.jpeg",
    pp: "/img/gig/5.jpeg",
    desc: "I will recreate your dreams in high quality pictures",
    price: 59,
    star: 5,
    username: "Audrey Richards",
  },
  {
    id: 6,
    img: "/img/gigs/6.jpeg",
    pp: "/img/gig/6.jpeg",
    desc: "I will create ai digital art illustration hyper realistic painting",
    price: 79,
    star: 4,
    username: "Walton Shepard ",
  },
  {
    id: 7,
    img: "/img/gigs/7.jpeg",
    pp: "/img/gig/7.jpeg",
    desc: "I will generate images with your prompts using ai dalle",
    price: 89,
    star: 5,
    username: "Waverly Schaefer",
  },
  {
    id: 8,
    img: "/img/gigs/8.jpeg",
    pp: "/img/gig/8.jpeg",
    desc: "I will create custom art using midjourney generator",
    price: 110,
    star: 4,
    username: "Wilton Hunt",
  },
];

export const persons = [
  {
    video: "/img/videoCarousel/video1.mp4",
    poster: "/img/videoCarousel/posters/testimonial-video-still-rooted.png",
    name: "Kay Kim",
    profession: "Co-Founder",
    qoute:
      "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything.It was like working with a human right next to you versus being across the world",
  },
  {
    video: "/img/videoCarousel/video2.mp4",
    poster: "/img/videoCarousel/posters/testimonial-video-still-naadam.png",
    name: "Caitlin Tormey",
    profession: "Chief Commercial Odiccer",
    qoute:
      "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
  },
  {
    video: "/img/videoCarousel/video3.mp4",
    poster: "/img/videoCarousel/posters/testimonial-video-still-lavender.png",
    name: "Brighid Gannon",
    profession: "Co-Founder",
    qoute:
      "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
  },
  {
    video: "/img/videoCarousel/video4.mp4",
    poster: "/img/videoCarousel/posters/testimonial-video-still-haerfest.png",
    name: "Tim and Dan Joo",
    profession: "Co-Founder",
    qoute:
      "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
  },
];

import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kevin SANTANDER', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website, my name is kevin SANTANDER', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kevin SANTANDER',
  subtitle: 'FullStack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello, nice to meet you ',
  paragraphTwo: "I'm a student FullStack developer. I try to reconvert myself so I'm coding and working hard to get there.",
  paragraphThree: "I'm quietly confident, naturally curious, and perpetually working on improving my skills.",
  resume: 'https://www.linkedin.com/in/kevin-santander-927723103/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'projet1_patinage.jpg',
    title: 'Club Patinage Artistique',
    info: 'It was my very first site. A lot of things to say but you have to start somewhere.',
    info2: 'HTML / CSS / Bootstrap',
    url: 'https://biglapin.github.io/patinage/#team',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projet2_tindog.jpg',
    title: 'Tindog',
    info: 'Do you know the app Tinder ? So now you know Tindog ! ',
    info2: 'I created this little front page for an exercice on Udemy',
    url: 'https://biglapin.github.io/tindog/',
    repo: 'https://github.com/Biglapin/tindog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projet3_I_want_you.jpg',
    title: 'Maybe you ? ',
    info: "At the beginning we don't have a lot of project to share. So If you want to challenge me",
    info2: "Let's GO ! Send me your project in the contact form !",
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kevin.santander@protonmail.ch',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kevin-santander-927723103/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Biglapin',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

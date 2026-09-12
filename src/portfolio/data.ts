export const projects = [
 {title:'Visionyze',image:'/visionyse.webp',location:'Marseille, France',type:'SaaS development',key:'portfolio.project1.description',tech:'Node.js · Next.js · PostgreSQL',links:[]},
 {title:'Webdesign Agentur Nürnberg',image:'/nuremberg.webp',location:'Nürnberg, Germany',type:'Ongoing partnership',key:'portfolio.project2.description',tech:'WordPress · Shopify · PHP',links:[['autohaus-stahmer.de','https://autohaus-stahmer.de/'],['pgl-obermeitingen.de','https://www.pgl-obermeitingen.de/'],['orso-gmbh.de','https://orso-gmbh.de/'],['sb-nbg.de','https://sb-nbg.de']]},
 {title:'UltraPC',image:'/ultrapc.webp',location:'Marrakesh, Morocco',type:'E-commerce',key:'portfolio.project3.description',tech:'Laravel · PrestaShop · Stripe',links:[['ultrapc.ma','https://www.ultrapc.ma/']]},
];
export const services = [
 {key:'frontend',items:['React.js / Next.js','Vue.js / Nuxt','Tailwind CSS / SCSS','TypeScript']},
 {key:'backend',items:['Node.js / Express','PHP / Laravel','Python / Django','API Development (REST/GraphQL)']},
 {key:'infrastructure',items:['PostgreSQL / MongoDB','AWS / DigitalOcean','Docker / CI/CD Pipelines','Firebase']},
 {key:'platforms',items:['WordPress (Custom Themes)','Shopify (Liquid)','Headless CMS (Strapi)','Stripe Integration']},
];
export const contact = (message='Hi, I’d like to book a 15-minute intro call') => `https://wa.me/212702002742?text=${encodeURIComponent(message)}`;

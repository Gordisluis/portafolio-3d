import { logo, meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    
    
    snapgram,
    summiz,
    tailwindcss,
    threads,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
    
];

export const experiences = [
    {
        title: "Desarrollador Django",
        company_name: "Alex Villae - fotografo profesional",
        icon: starbucks,
        iconBg: "#38bdf8",
        date: "Marzo 2021",
        points: [
            "Desarrollo de pagina simple con django.",
            "Creacion de BD con Django integrando funcionalidad nativa de django.",
            "implementando diseño responsivo con django multiplataforma, para dispositivos moviles.",
        ],
    },
    {
        title: "Desarrollador React",
        company_name: "Marathon truck & Trailer",
        icon: "transparent",
        iconBg: "#38bdf8",
        date: "enero 2022 - Febrero 2022",
        points: [
            "Desarrollo de pagina simple con React consolidando conocimientos de JavaScript.",
            "Colaborando con el equipo del cliente para crear una mejor experiencia de usuario.",
            "Implementando diseño responsivo con react, para mejorar la experiencia.",
            "Creacion de diseño moderno con react.",
        ],
    },
    {
        title: "Desarrollador Web - WordPress",
        company_name: "Quality lugo services llt",
        icon: "transparent",
        iconBg: "#38bdf8",
        date: "septiembre 2022 - diciembre 2022",
        points: [
            "Desarrollo realizado con wordpress y plugins para la creacion de sitios web.",
            "Colaborando con el equipo del cliente para crear una mejor experiencia de usuario.",
            "Implementando diseño responsivo con wordpress, haciendo mas facil la utilizacion de los recursos web para el facil acceso a estos desde dispositivos moviles de acuerdo a requerimientos del cliente.",
            
        ],
    },
    {
        title: "Desarrollador Web - Django",
        company_name: "Rockwell Solutions, Inc.",
        icon: "transparent",
        iconBg: "#38bdf8",
        date: "Mayo 2023",
        points: [
            "Desarrollo de una pagina web para la venta de servicios de emergencia vial.",
            "Diseño conciso de la pagina web. simple practico y funcional.",
            "Creacion de una base de datos para almacenar la informacion. de conductores con necesidades de emergencia, facilitando la busqueda y rescate.",
            
        ],
    },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Gordisluis',
    }
    
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'marathonttr - Pagina web',
        description: 'Desarrolle una pagina web que permite al usuario contactar y obtener servicios de emergencia vial en el estado de la florida, USA.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
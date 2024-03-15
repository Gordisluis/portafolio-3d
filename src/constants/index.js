import {  meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
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
        company_name: "Apollo Breakdowns",
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
        icon: tesla,
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
        icon: shopify,
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
        icon: meta,
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
        link: 'https://wa.me/5840144023967',
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
        link: 'https://www.marathonttr.com/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Apollobreakdowns - Pagina web',
        description: 'Desarrollo de pagina con django para mi cliente con la finalidad de crear un sitio web para la ayuda vial.',
        link: 'https://apollobreakdownfleetservices.com/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Quality lugo services llt',
        description: 'Desarrollo realizado con wordpress y plugins para la creacion de sitios web. Implementando diseño responsivo con wordpress, haciendo mas facil la utilizacion de los recursos web para el facil acceso a estos desde dispositivos moviles',
        link: 'https://qualitylugoservicesllc.com/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Rockwell Solutions, Inc.',
        description: 'Desarrolle de una pagina web para la venta de servicios de emergencia vial, Diseño conciso de la pagina web. simple practico y funcional.',
        link: 'https://www.rockwellfleets.com/',
    },
    
];
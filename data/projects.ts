export type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Antar Ke Dapur",
        description: "This project was a freelance project that I worked on with my senior colleague. The project was designed as a platform that bridges food suppliers and consumers within a single ecosystem. I was responsible as a Backend Developer, handling system requirements analysis, database relationship structure design, and API development.",
        tech: ["Next Js", "React", "PostgreSQL", "Prisma"],
        link: "https://antarkedapur.com/",
        image: "/projects/image4.png"
    },
    {
        id: 2,
        title: "Website MTI UNIMAL",
        description: "I completed this project with my friend using Fullstack Laravel and Docker technologies. My responsibilities included analyzing system requirements, building the database, developing API endpoints, and implementing the business logic of the web application.",
        tech: ["Laravel", "Docker", "MYSQL", "PHP"],
        link: "https://mti.unimal.ac.id/",
        image: "/projects/image5.png"
    },
    {
        id: 3,
        title: "Landing Page Website",
        description: "this project is landing page website that I developed independently. The project was designed as a platform educational in a visually appealing and user-friendly manner. I built this project using Next.js and Tailwind CSS, focusing on responsive design, smooth navigation, and an engaging user experience.",
        tech: ["next js", "react", "tailwind css"],
        link: "https://learningwith-us.vercel.app/",
        image: "/projects/image6.png"
    },
    {
        id: 4,
        title: "E-Commerce Dashboard",
        description: "An interactive analytics dashboard built to analyze e-commerce business data and provide meaningful insights for decision-making. The application visualizes sales performance, customer behavior, and transaction trends through clear and dynamic charts using Streamlit. This project focuses on transforming raw e-commerce data into actionable business intelligence with the help of Python and Pandas.",
        tech: ["Streamlit", "Python", "Pandas"],
        link: "https://eccomercee.streamlit.app/",
        image: "/projects/image.png"
    },
    {
        id: 5,
        title: "TelcoReco",
        description: "A capstone team project developed for the final program at Asah led by Dicoding. TelcoReco is a web-based recommendation system designed to help users discover suitable telecommunication products based on their needs and preferences. The platform integrates Machine Learning models with a modern web interface to provide personalized recommendations, fast data processing, and an interactive user experience using React, Next.js, and Flask.",
        tech: ["React", "Next.js", "Machine Learning", "Flask"],
        link: "https://telcoreco.vercel.app/",
        image: "/projects/image3.png"
    },
    {
        id: 6,
        title: "Template-in Ai",
        description: "An AI-powered web application designed to help students review and validate academic documents more efficiently using the Llama 3.1 model. This platform assists users in identifying document inconsistencies, improving accuracy, and simplifying the academic document checking process through an intelligent and user-friendly interface. Built with Laravel and MySQL, the system focuses on delivering fast, reliable, and scalable document management solutions for students.",
        tech: ["Laravel", "Llama 3.1", "MYSQL", "PHP"],
        link: "https://github.com/Indraaai/Templatein_Ai",
        image: "/projects/picture3.png"
    },
    {
        id: 7,
        title: " Absensi Keanggotaan Lab Informatika",
        description: "This project is a personal project that I developed independently. The project was designed as a platform to manage attendance lists and a QR code–based attendance system, allowing real-time usage and monitoring. I built this project using Fullstack Laravel.",
        tech: ["Laravel", "MYSQL", "PHP"],
        link: "https://github.com/Indraaai/AbsensiQrCode-Laravel",
        image: "/projects/image7.png"
    },
    {
        id: 8,
        title: " Form Jurusan Informatika",
        description: "This project is an internal system that I developed for the Informatics Engineering department. The project was built by adopting a concept similar to Google Forms, allowing the department to manage internal forms that can be filled out by students. This project was developed using Fullstack Laravel",
        tech: ["Laravel", "MYSQL", "PHP"],
        link: "https://github.com/Indraaai/FormJurusan",
        image: "/projects/image8.png"
    },
    {
        id: 9,
        title: "Invoice Ai",
        description: "web application and chatbot telegram and website, designed to help users manage and analyze their invoices more efficiently using the Llama 3.1 model. This platform assists users in extracting key invoice information from invoice pictures, and providing insights into spending patterns through an chatbot and user-friendly interface. Built with Laravel and MySQL, the system focuses on delivering fast, reliable, and scalable invoice management solutions for individuals and businesses.",
        tech: ["Laravel", "MYSQL", "Llama 3.1", "python"],
        link: "https://github.com/Indraaai/Invoice_Ai",
        image: "/projects/image9.png"
    }
];

export default projects;

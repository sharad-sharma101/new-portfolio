import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'sharadsharma.dev@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi sharad sharma, I am reaching out to you because...',

    oldPortfolio: 'https://sharad-sharma.onrender.com',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/sharad sharma' },
    { name: 'linkedin', url: 'https://in.linkedin.com/in/sharad-sharma-575226192' },
    { name: 'Old Version', url: 'https://github.com/sharad-sharma101' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer',
        company: 'Strategy Co Global',
        duration: 'Dec 2023 - Present',
    },
    {
        title: 'Full Stack Developer',
        company: 'Attryb Tech',
        duration: 'March 2023 - Dec 2023',
    },
    {
        title: 'Web Devloper',
        company: 'Kidaura',
        duration: 'Oct 2022 - March 2023',
    },
    {
        title: 'MERN Stack Trainee',
        company: 'Newton School',
        duration: 'May 2022 - Oct 2022',
    },
];

export const PROJECTS: IProject[] = [
    {
        title: 'Hire With Eve',
        slug: 'hirewitheve',
        techStack: [
            'React',
            'AWS',
            'Internationalization i18n',
            'Cron Job',
            'Mongo DB',
            'Node JS',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/scg.jpeg',
        longThumbnail: '/projects/long/scg.jpeg',
        images: [
            '/projects/images/scg-1.png',
            '/projects/images/scg-2.png',
            '/projects/images/scg-3.png',
            '/projects/images/scg-4.png',
            '/projects/images/scg-5.png',
        ],
        liveUrl: 'https://hirewitheve.ai/',
        year: 2025,
        description: `Platform to provide a strategic and competitive edge to internet businesses worldwide through data-backed marketing. These technology solutions level the playing field for small and medium-sized businesses to compete against market leaders.`,
        role: `As the full stack developer in a team of three, I: <br/>
        - Migrated application from React 16.12.0 to 18.1.0, improving architecture and eliminating redundant code, leading to a 30% faster build process.<br/>
        - Increase average user rating from 3.2 to 4.1 ( out of 5 ) through integrating tools like Posthog, which help improve UX pain points.<br/>
        - Implemented CI/CD pipelines and containerized applications using Docker, decreased deployment time by 70%, and minimized manual intervention. Implementing internationalization (i18n) on the platform helps connect 4 new firms, e.g., KPMG Finland, Duunitori, etc.<br/>
        - It increases revenue by $ 600 K. Integrated cron jobs to save the engineering team 20% of time and handle bulk operations in the background with better efficiency.`,
    },
    {
        title: 'attryb tech',
        slug: 'attrybtech',
        techStack: [
            'Shopify App',
            'Custom UI Library',
            'PostgreSQL',
            'Mongo pipeline',
            'Mongo DB',
            'Node JS',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/attryb.png',
        longThumbnail: '/projects/long/attryb.png',
        images: [
            '/projects/images/attryb.png',
            '/projects/images/attryb-2.png',
            '/projects/images/attryb-3.png',
            '/projects/images/attryb-4.png',
            '/projects/images/attryb-5.png',
        ],
        liveUrl: 'https://attryb.com/',
        year: 2023,
        description: `Platform for transforming your talent acquisition with realistic job simulations, tailored skill assessments, and deep analytics to find the right talent faster.`,
        role: `As the full stack developer in a team of three, I: <br/>
        - Deployed a custom UI library on npm, establishing a CI/CD pipeline that automated testing & deployment processes, resulting in a 40% reduction in release time & improved code quality across the development team<br/>
        - Using both MongoDB and PostgreSQL databases for different types of data and use cases reduces data retrieval times by 30%. like Posthog, which help improve UX pain points.<br/>
        - Increasing the conversion rate by an average of 14% per month for brands like Tarinika, Zandu Care, and Ashba that have over 1 million+ users through Dynamic Segments targeting.<br/>
        - Conducted regular code reviews, leading to a 15% decrease in production bugs & facilitating clean code`,
    },
    {
        title: 'Manage book',
        slug: 'managebook',
        techStack: [
            'React',
            'Syncfusion Component',
            'Tailwind CSS',
            'context Api',
        ],
        thumbnail: '/projects/thumbnail/manage.png',
        longThumbnail: '/projects/long/manage.png',
        images: [
            '/projects/images/manage-1.png',
            '/projects/images/manage-2.png',
            '/projects/images/manage-3.png',
            '/projects/images/manage-4.png',
            '/projects/images/manage-5.png',
        ],
        liveUrl: 'https://manage-book.netlify.app/',
        year: 2022,
        description: `ManageBook is a web-based library management system designed to streamline the process of browsing, borrowing, and managing books. Developed using React, the application offers an intuitive user interface and responsive design to ensure a smooth experience across devices.`,
        role: `This is solo project build by me, where I work on :<br/>
        - Developed the entire frontend using React, implementing core features like book listing, search, and user interaction.<br/>
        - Built a user authentication system with login, signup, and session handling.<br/>
        - Implemented borrowing and reservation logic, including due date tracking and renewals.<br/>
        - Designed a responsive and user-friendly UI, using React Router and Hooks for seamless navigation and state management.`,
    },
    {
        title: 'Visiar',
        slug: 'visiar',
        techStack: [
            'React',
            'DALL·E API',
            'node js',
            'Image Generation',
        ],
        thumbnail: '/projects/thumbnail/visiar.png',
        longThumbnail: '/projects/long/visiar.png',
        images: [
            '/projects/images/visiar.png',
            '/projects/images/visiar-2.png',
            '/projects/images/visiar-3.png',
        ],
        liveUrl: 'https://dall-e-cl.onrender.com',
        year: 2022,
        description: `DALL·E Clone is a full-stack web application that leverages OpenAI's DALL·E API to generate unique images from textual descriptions. Users can input prompts to create AI-generated images, which can be viewed and shared within the application. `,
        role: `this is solo project build by me, where I work on: <br/>
        - Utilizes OpenAI's DALL·E API to create images based on user-provided text prompts.<br/>
        - Designed with React and Tailwind CSS to ensure a responsive and intuitive user experience.<br/>
        - Displays a collection of generated images, allowing users to browse and explore creations.<br/>
        - Deploys Node.js and Express for server-side operations, with MongoDB for data storage`,
    },
]
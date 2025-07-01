import { WorkTypes } from './work'

export interface WorkExperience {
    companyName: string
    from: string
    to?: string
    present?: boolean
    designation: string
    projects?: WorkTypes[]
    description: string
    image?: string
    skills?: string[]
}

const path = '/assets/images/companies/'

const experience: WorkExperience[] = [
    {
        companyName: 'Hytech Professionals',
        from: 'Jan 2024',
        present: true,
        description: `
            ✅ Built and optimized React Native mobile apps with 30% faster load times
            ✅ Integrated REST APIs and managed authentication using JWT
            ✅ Led migration from monolith to microservices using Node.js & Docker
            ✅ Collaborated with cross-functional teams in Agile sprints
        `,
        designation: 'Software Engineer',
        image: `${path}hytech1.png`,
        skills: [
            'React.js',
            'Next.js',
            'Docker',
            'Google Kubernetes Engine (GKE)',
            'Kubernetes',
            'Microsoft Azure',
            'Microservices',
            'Microservice Architecture',
            'Angular CLI',
            'Angular',
            'AngularJS',
        ],
    },
    {
        companyName: 'Vizlogic Digital Solutions',
        from: 'Jan 2023',
        to: 'Jan 2024',
        description: `
            I was responsible for managing and delivering both internal and client-facing IT projects across web and mobile platforms. My role included:

            Collaborated with cross-functional teams to gather requirements, define scope, and ensure timely delivery of software solutions.

            Led the end-to-end execution of full-stack applications, from planning and architecture to deployment and support.

            Worked closely with clients to understand business goals and align technical solutions with their needs.

            Oversaw multiple projects simultaneously, ensuring quality, performance, and client satisfaction.

            Facilitated communication between development, QA, and business teams to streamline processes and resolve roadblocks.

            Contributed to continuous improvement by proposing enhancements in system design and team workflows.
        `,
        designation: 'Associate Application Consultant',
        image: `${path}vizLogic.png`,
        skills: [
            'Payment Gateways',
            'Git BASH',
            'Xcode',
            'Google Maps',
            'Firebase',
            'CI/CD',
            'React Native',
            'React.js',
            'Agile Development',
            'Front-End Design',
            'Redux.js',
            'JavaScript',
            'Skill Development',
            'iOS',
            'Realtime Programming',
            'App Store',
            'User Experience (UX)',
        ],
    },
    {
        companyName: 'NeoSOFT Technologies',
        from: 'Feb 2022',
        to: 'Oct 2022',
        description: `
           Worked as a Software Engineer focusing on building efficient and scalable React Native cross-platform mobile applications for diverse clients across industries.

            Key responsibilities:

            Developed high-performance mobile apps using React Native for both Android and iOS platforms.

            Collaborated with designers and backend developers to deliver seamless user experiences.

            Integrated RESTful APIs, third-party libraries, and native modules as needed.

            Participated in code reviews, sprint planning, and agile ceremonies to ensure timely and quality deliveries.

            Optimized app performance, handled debugging, and resolved production issues effectively.
        `,
        designation: 'Software Engineer',
        image: `${path}neosoft.svg`,
        skills: [
            'Payment Gateways',
            'Git BASH',
            'Xcode',
            'Google Maps',
            'Firebase',
            'CI/CD',
            'React Native',
            'React.js',
            'Agile Development',
            'Front-End Design',
            'Redux.js',
            'JavaScript',
            'Skill Development',
            'iOS',
            'Realtime Programming',
            'App Store',
            'User Experience (UX)',
        ],
    },
    {
        companyName: 'Microalien',
        from: 'June 2020',
        to: 'Dec 2021',
        description: `
           Led a team of developers in designing, building, and maintaining full-stack web and mobile applications using React.js, React Native, and Node.js.

            Key responsibilities:

            Oversaw end-to-end development of scalable web and mobile solutions across multiple client projects.

            Provided technical leadership and mentorship to junior developers, conducting regular code reviews and guiding architecture decisions.

            Worked closely with stakeholders to define requirements, translate business needs into technical specs, and ensure on-time delivery.

            Built reusable components and implemented clean, maintainable code across front-end and back-end systems.

            Managed project workflows, ensured sprint goals, and coordinated with cross-functional teams to align on priorities.

            Actively contributed to deployment, API integration, and performance optimization.

        `,
        designation: 'Development Team Lead',
        image: '',
        skills: [
            'React.js',
            'React Native',
            'Node.js',
            'Express',
            'MongoDB',
            'REST APIs',
            'JSON',
            'Git',
            'Redux',
        ],
    },
    {
        companyName: 'Squareknot',
        from: 'Jan 2019',
        to: 'May 2020',
        description: `
           Worked as a Full Stack Developer, leading the development and maintenance of high-quality websites and internal applications tailored to business needs.

            Key responsibilities:

            Developed responsive, user-friendly web applications using React.js, Node.js, and MongoDB.

            Integrated secure and reliable payment gateways for e-commerce platforms.

            Collaborated with UI/UX designers to bring seamless user experiences to production.

            Handled both client-side and server-side development, database design, and deployment.

            Maintained existing codebases, fixed bugs, and ensured performance optimization across all platforms.

            Delivered projects in agile sprints while aligning with business goals and timelines.
        `,
        designation: 'Full Stack Engineer',
        image: '',
        skills: [
            'React.js',
            'Node.js',
            'Express',
            'MongoDB',
            'JavaScript',
            'HTML/CSS',
            'REST APIs',
            'Payment Gateway Integration',
            'Git',
        ],
    },
]

export default experience

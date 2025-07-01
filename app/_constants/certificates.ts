export interface CertTypes {
    title: string
    description?: string
    provider: string
    code?: string
    url?: string
    image?: string
    issuedOn?: string
}

const path = `/assets/images/certificates/`

const certificates: CertTypes[] = [
    {
        title: 'Angular - The Complete Guide (2025 Edition)',
        description:
            'This certificate above verifies that Tarun Bhardwaj successfully completed the course Angular - The Complete Guide (2025 Edition) on 06/16/2025 as taught by Maximilian Schwarzmüller on Udemy. The certificate indicates the entire course was completed as validated by the student. The course duration represents the total video hours of the course at time of most recent completion.',
        provider: 'Udemy',
        code: 'UC-ff1cef2f-6ee4-4d0f-8a3e-503d2a6dc5c7',
        url: 'https://www.udemy.com/certificate/UC-ff1cef2f-6ee4-4d0f-8a3e-503d2a6dc5c7/',
        image: `${path}angular.jpg`,
        issuedOn: 'June 16, 2025',
    },
    {
        title: 'Docker and Kubernetes: The Complete Course from Zero to Hero',
        description:
            'This certificate above verifies that Tarun Bhardwaj successfully completed the course Docker and Kubernetes: The Complete Course from Zero to Hero on 06/10/2025 as taught by Lauro Fialho Müller on Udemy. The certificate indicates the entire course was completed as validated by the student. The course duration represents the total video hours of the course at time of most recent completion.',
        provider: 'Udemy',
        code: 'UC-3c322c98-67d6-4155-bb43-7b1b6640687a',
        url: 'https://www.udemy.com/certificate/UC-3c322c98-67d6-4155-bb43-7b1b6640687a/',
        image: `${path}docker-kubernetes.jpg`,
        issuedOn: 'June 10, 2025',
    },
    {
        title: 'AZ-900: Microsoft Azure Fundamentals Exam Prep - MAY 2025',
        provider: 'Udemy',
        code: 'UC-73ce6547-2ea4-4cba-8273-45f785da987d',
        url: 'https://www.udemy.com/certificate/UC-73ce6547-2ea4-4cba-8273-45f785da987d/',
        image: `${path}azure-az-900.jpg`,
        issuedOn: 'May 24, 2025',
    },
    {
        title: 'React Native: Advanced Concepts',
        provider: 'Udemy',
        code: 'UC-98e9cd6c-fe78-4147-a458-99d00546faee',
        url: 'https://www.udemy.com/certificate/UC-98e9cd6c-fe78-4147-a458-99d00546faee/',
        image: `${path}RN-advance.jpg`,
        issuedOn: 'May 6, 2025',
    },
    {
        title: 'Data Privacy and PII Protection: Safeguarding Information in IT Firms',
        provider: 'HyTech Pro - L&D',
        image: `${path}pii.png`,
        issuedOn: 'April 9, 2025',
    },
    {
        title: 'Employee of the month',
        provider: 'HyTech Pro - HyValue Awards',
        image: `${path}htp-eotm-apr-25.png`,
        issuedOn: 'April 1, 2025',
    },
    {
        title: 'On Spot Award',
        provider: 'HyTech Pro - HyValue Awards',
        image: `${path}os-feb-25.png`,
        issuedOn: 'February 1, 2025',
    },
    {
        title: 'Platinum Award',
        provider: 'HyTech Pro - Project Award',
        issuedOn: 'January 2, 2025',
    },
    {
        title: 'On Spot Award',
        provider: 'HyTech Pro - HyValue Awards',
        image: `${path}os-oct-24.png`,
        issuedOn: 'October 1, 2024',
    },
    {
        title: 'Employee of the month',
        provider: 'HyTech Pro - HyValue Awards',
        image: `${path}htp-eotm-july-24.png`,
        issuedOn: 'July 1, 2024',
    },
    {
        title: 'Basics of Finance Management & Tax Saving',
        provider: 'HyTech Pro - L&D',
        image: `${path}finance.png`,
        issuedOn: 'January 29, 2024',
    },
    {
        title: 'Time Management',
        provider: 'HyTech Pro - L&D',
        image: `${path}time.png`,
        issuedOn: 'January 24, 2024',
    },
]

export default certificates

import { Slide } from '../_components/Carousel'

export interface WorkTypes {
    projectName: string
    url?: string
    images: string[]
    techStacks: string[]
    description: string
    client?: string
    title?: string
    thoughts?: string
    mobile?: boolean
}

const path = '/assets/images/projects/'

const work: WorkTypes[] = [
    {
        projectName: 'StreetLink',
        url: 'https://thestreetlink.org.uk',
        images: [
            `${path}streetlink/1.png`,
            `${path}streetlink/2.png`,
            `${path}streetlink/3.png`,
            `${path}streetlink/4.png`,
        ],
        techStacks: ['NextJs', 'MongoDB', 'NodeJs', 'Express', 'Azure'],
        description:
            'StreetLink is a platform that connects people rough sleeping in England and Wales to support provided by local authorities and charities. This includes anyone who is sleeping outside, preparing to bed down, or sleeping somewhere not designed for habitation, such as a car. To make these connections, the platform relies on alerts submitted by members of the public and people sleeping rough.',
        client: 'Home Connections | UK Government',
        title: 'Helping UK Rough Sleepers Find Help',
        thoughts:
            'StreetLink connects people sleeping rough in the UK with local support services. The platform enables quick reporting to ensure timely help and outreach.',
    },
    {
        projectName: 'WorkWeb',
        url: 'https://workweb.in/',
        images: [
            `${path}workweb/1.png`,
            `${path}workweb/2.png`,
            `${path}workweb/3.png`,
            `${path}workweb/4.png`,
            `${path}workweb/5.png`,
        ],
        techStacks: ['NextJs', 'MongoDB', 'NodeJs', 'Express', 'Microservices'],
        description:
            'Welcome to Work Web, where synergy thrives! Seamlessly integrating employee, customer, vendor, project management, knowledge sharing, social media, and more. Experience effortless access to every facet of your organization, fostering collaboration and unified success.',
        client: 'VizLogic Digital Solutions',
        title: 'Empowering your business with seamless intranet solution',
        thoughts:
            'Unlock the power of collaboration and efficiency with our tailored intranet solutions. Connect, Communicate, and thrive as One.',
    },
    {
        projectName: 'HiKinjo',
        url: 'https://apps.apple.com/pk/app/hikinjo/id1643296861',
        client: 'HiKinjo',
        images: [
            `${path}hikinjo/1.webp`,
            `${path}hikinjo/2.webp`,
            `${path}hikinjo/3.webp`,
            `${path}hikinjo/4.webp`,
        ],
        techStacks: [
            'React Native',
            'MongoDB',
            'NodeJs',
            'Express',
            'Stripe',
            'Material UI',
            'Firebase',
            'Google Analytics',
        ],
        description: `Hikinjo’s mission is to bring back that friendly neighbourhood feeling - something we feel has been lost in recent years…


HOW COME? TOGETHER, PEOPLE ARE STRONGER:

We want to be a welcoming hub where communities can grow together, laugh together and be there for one another. On top of this, we want our users to feel part of a thriving sharing economy… And this is where things get really interesting…


PROMOTE YOUR SIDE HUSTLE AND EARN:

HiKinjo provides you with a platform whereby you can earn an extra income, all in your local community! From cooking to gardening to hairdressing to DIY to tech support and tutoring, the possibilities are endless. Download today and get started earning!


HIRE LOCAL PROFESSIONALS:

Need a beautician quick and sharp? HiKinjo it. Need someone to redecorate your living room? HiKinjo it. Need to fix that leaky tap? HiKinjo it. Need to distress with a massage? HiKinjo it. HiKinjo strives to bolster the circle economy by utilising local talent, which will often be much more cost-effective than hiring big brand companies.`,
        title: 'HIKINJO ARE RECLAIMING THE MEANING OF NEIGHBOURHOOD',
        thoughts:
            'Hikinjo is a brand new app that connects you with people in your nearby area. Make new friends, earn money, and hire locals.',
        mobile: true,
    },
    {
        projectName: 'IDFC First Bank',
        url: 'https://www.idfcfirstbank.com/',
        images: [
            `${path}idfc/1.png`,
            `${path}idfc/2.png`,
            `${path}idfc/3.png`,
            `${path}idfc/4.png`,
        ],
        client: 'IDFC First Bank',
        techStacks: [
            'React Native',
            'ReactJs',
            'MongoDB',
            'NodeJs',
            'Express',
            'Stripe',
            'RazorPay',
            'Firebase',
            'Google Analytics',
            'Jest',
            'SonarQube',
            'EsLint',
            'Husky',
        ],
        description: `IDFC FIRST Bank is a fast growing, new age Private Sector Bank created in India with a vision of building a world-class Bank in India, focused on Ethical, Digital, and Social Good Banking. The Bank has 35.5 million live customers, a customer deposit base of Rs. 2,42,543 crores and loans and advances of Rs. 2,41,926 crores, spread over 60,000 cities, towns, and villages across India. It has 1,002 branches but is built as a digital first Bank in scale, scope, and approach. \n

Its customer deposits are growing at 25.2% YoY and Loans & Advances growing by 20.4% YoY (March 31, 2025) based on friendly user digital interface, ethical approach, customer friendly products, strong brand, and high corporate governance. Its technology stack is built on advanced technology using cloud native experience layer, microservices led architecture, and powered by advanced data platform, analytics, and Artificial Intelligence.\n

Its mobile App is rated 4.9 on Google Playstore with 30 million downloads and 1.7 million ratings and 4.8 on Appstore with 1.86 lakh downloads and 1.5 lakh ratings . The App is rated #1 in India and #4 App in the world by The Forrester Digital Experience Review™: Global Mobile Banking Apps, Q4 2024 for prioritising Customers’ financial well-being, comprehensive suite of financial management features, and personalized financial insights, providing educational resources and expert guidance through its Financial Wellness Corner and IDFC First Academy.`,
        title: 'Building a world class bank in India',
        thoughts: `To build a world class Bank in India guided by ethics, powered by technology and be a force for social good`,
    },
    {
        projectName: 'PrabhuBhakti',
        url: 'https://www.prabhubhakti.com/',
        images: [
            `${path}prabhubhakti/1.png`,
            `${path}prabhubhakti/2.png`,
            `${path}prabhubhakti/3.png`,
            `${path}prabhubhakti/4.png`,
            `${path}prabhubhakti/5.png`,
            `${path}prabhubhakti/6.png`,
        ],
        techStacks: [
            'React Native',
            'ReactJs',
            'MySql',
            'NodeJs',
            'Express',
            'Stripe',
            'RazorPay',
            'Firebase',
            'Google Analytics',
            'Php',
            'CodeIgniter',
            'WordPress',
        ],
        description: `At Prabhubhakti, our mission is to bridge the timeless essence of tradition with the vibrant spirit of modern youth by creating unique spiritual products designed for today’s generation. Our journey began with a strong belief: spirituality should be more than a ritual—it should be a meaningful and dynamic experience for the youth. \n

In a world that’s rapidly evolving, Prabhubhakti offers a fresh take on spirituality, infusing authenticity and relevance into everything we create. We honor the sanctity of religious practices while reimagining them in ways that resonate with contemporary lifestyles.\n

Our vision is to present a diverse collection of spiritual products that embody both tradition and youthful energy. From intricately crafted artifacts to thoughtfully curated merchandise, each piece reflects our passion for blending cultural heritage with modern design.\n

Authenticity lies at the heart of everything we do. We carefully source our materials to ensure each product carries the true spirit of spirituality. Our aim is to foster a deeper connection with faith—encouraging young individuals to explore and embrace the richness of our cultural and spiritual roots.`,
        title: 'Welcome to Prabhubhakti, where spirituality meets innovation!',
        thoughts: `At Prabhubhakti, our mission is to bridge the timeless essence of tradition with the vibrant spirit of modern youth by creating unique spiritual products designed for today’s generation. Our journey began with a strong belief: spirituality should be more than a ritual—it should be a meaningful and dynamic experience for the youth.`,
    },
    {
        projectName: 'Smart Garage / Pikpart',
        url: 'https://pikpartsmartgarage.com/',
        images: [`${path}pikpart/1.webp`],
        techStacks: [
            'React Native',
            'ReactJs',
            'Postgres',
            'NodeJs',
            'Express',
            'Stripe',
            'Firebase',
            'Google Analytics',
            'Heroku',
            'AWS',
        ],
        description: `PIKPART is one of the leading two-wheeler multi-brand workshop chains, Our brand is committed to serving the best quality and most efficient services to our customers. PIKPART mechanic services are performed by highly qualified mechanics. We train our mechanics on a timely and technological evolution basis. PIKPART Service Centers provide our customers with a world-class ambiance while going through servicing. PIKPART supports its customers in upgrading their two-wheelers on a requirement basis. PIKPART provides annual maintenance packages that help to ease customers.`,
        title: 'Online booking service for two-wheelers and four-wheelers',
        thoughts: `PIKPART is one of the leading two-wheeler multi-brand workshop chains, Our brand is committed to serving the best quality and most efficient services to our customers.`,
    },
]

export default work

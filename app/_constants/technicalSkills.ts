import {
    FaReact,
    FaNodeJs,
    FaAngular,
    FaDocker,
    FaStripeS,
    FaGithub,
} from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import { RiNextjsFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import {
    SiExpress,
    SiRedux,
    SiTailwindcss,
    SiMysql,
    SiKubernetes,
    SiRazorpay,
} from 'react-icons/si'
import { MdMiscellaneousServices } from 'react-icons/md'
import { IoLogoFirebase } from 'react-icons/io5'
import { VscAzureDevops } from 'react-icons/vsc'

export interface Skill {
    name: string
    icon?: React.JSX.Element | React.ReactNode | any
    exp: number
}

const skills: Skill[] = [
    {
        name: 'ReactJs',
        exp: 7,
        icon: FaReact,
    },
    {
        name: 'React Native',
        exp: 7,
        icon: TbBrandReactNative,
    },
    {
        name: 'NextJs',
        exp: 2.5,
        icon: RiNextjsFill,
    },
    {
        name: 'NodeJs',
        exp: 6,
        icon: FaNodeJs,
    },
    {
        name: 'MongoDB',
        exp: 5,
        icon: SiMongodb,
    },
    {
        name: 'Express',
        exp: 5,
        icon: SiExpress,
    },
    {
        name: 'Angular',
        exp: 1,
        icon: FaAngular,
    },
    {
        name: 'Redux',
        exp: 6,
        icon: SiRedux,
    },
    {
        name: 'Tailwind',
        exp: 2.5,
        icon: SiTailwindcss,
    },
    {
        name: 'MySql',
        exp: 2,
        icon: SiMysql,
    },
    {
        name: 'Docker',
        exp: 0.5,
        icon: FaDocker,
    },
    {
        name: 'Kubernetes',
        exp: 0.5,
        icon: SiKubernetes,
    },
    {
        name: 'Microservices with NodeJs',
        exp: 0.5,
        icon: MdMiscellaneousServices,
    },
    {
        name: 'Firebase',
        exp: 6,
        icon: IoLogoFirebase,
    },
    {
        name: 'Microsoft Azure (Basics)',
        exp: 0.5,
        icon: VscAzureDevops,
    },
    {
        name: 'RazorPay',
        exp: 1,
        icon: SiRazorpay,
    },
    {
        name: 'Stripe',
        exp: 1,
        icon: FaStripeS,
    },
    {
        name: 'Git',
        exp: 7,
        icon: FaGithub,
    },
]

export default skills

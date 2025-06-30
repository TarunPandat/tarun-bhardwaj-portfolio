export interface Blog {
    title: string
    content: string
    slug: string
    date: string
    image: string
}

const path = '/assets/images/blogs/'

const blogs: Blog[] = [
    {
        title: 'Docker + Kubernetes',
        content: `Over the last few weeks, I’ve been spending a good amount of time getting my hands dirty with Docker and Kubernetes, and honestly — I now understand why they’ve become such a big deal in the world of cloud computing.\n\n

I used to think containers were just another tech trend. But once I started building with Docker, it clicked. Being able to package an app with everything it needs and run it anywhere — locally, staging, production — without a single environment issue? That’s a game-changer.\n\n

With Docker:\n
✅ My local dev environment is clean and consistent\n
✅ I can spin things up or tear them down in seconds\n
✅ Everything is isolated, portable, and lightweight\n\n

No more “but it worked on my machine” moments 😅\n\n

Then came Kubernetes, which honestly felt overwhelming at first. But once I stuck with it, it started making sense — and now I can’t imagine managing multiple containers without it.\n\n

K8s takes care of:\n
🔁 Auto-scaling when traffic spikes\n
🛠️ Self-healing (it literally restarts failed containers on its own)\n
🚀 Rolling deployments without downtime\n
⚖️ Load balancing between pods\n
📄 Declarative configs that actually make infra changes predictable\n\n

And when you combine both in a cloud environment — AWS, Azure, GCP, wherever — things just scale naturally. You get speed, control, resilience, and flexibility all in one package. Plus, you save on cloud costs when your resources are actually being used smartly.\n\n

Got certified recently, but honestly the hands-on experience has taught me way more. If you’re working with microservices, APIs, or modern web apps — don’t sleep on Docker and Kubernetes. They’re not just for big companies anymore. These tools help any developer or team build smarter and deploy faster.\n\n

This is just the beginning for me, but it feels good to finally have a solid foundation in these tools.\n\n

Let’s keep building 🚀`,
        slug: 'docker-kubernetes',
        date: '10 June, 2025',
        image: `${path}docker-kubernetes.jpeg`,
    },

    {
        title: `🚀 Why Microservices + Cloud = Future-Proof Architecture`,
        content: `In the last few years, I’ve had the opportunity to work on projects where shifting from monolithic to microservice architecture — backed by cloud infrastructure — made a night and day difference.\n\n

Here’s what stood out to me:\n\n

🔹 Scalability without chaos – Need to scale one service? No need to touch the rest. This makes handling real-time traffic spikes far more manageable.\n\n

🔹 Faster deployments – Teams can work on different services independently. Less waiting, more building.\n\n

🔹 Improved fault isolation – If one service crashes, the whole system doesn’t go down with it. Debugging also becomes more focused.\n\n

🔹 Tech freedom – Microservices let you pick the right tool/language for the job. One team can use Node.js, another Go or Python — no problem.\n\n

🔹 Cloud-native advantages – Containerization with Docker + orchestration via Kubernetes + CI/CD = smooth rollouts and rollbacks, better monitoring, and resource optimization.\n\n

For me, the biggest win has been how these patterns promote agility, ownership, and resilience in both code and teams.\n\n

Not every app needs microservices from day one, but if your system is growing fast — or you’re rebuilding for scale — it’s definitely worth considering.\n\n

Curious to hear how others are approaching microservices or hybrid cloud strategies. Let’s connect and discuss! `,
        slug: `microservices`,
        date: `20 June, 2025`,
        image: `${path}microservices.jpeg`,
    },
]

export default blogs

import uniqid from 'uniqid';

const exampleData = {
    personalInfo: {
        first_name: 'Nikola',
        last_name: 'Tesla',
        professional_title: 'Senior Software Developer',
        address: 'San Francisco, US',
        email: 'nikolatesla@gmail.com',
        phone_number: '777-777-7777',
        description: 'Motivated and results-driven Senior Software Engineer with 8+ years of experience in my field. I have continuously demonstrated experience in improving software performance by implementing new ideas, updating, testing and coding. Experience in development tools which increase accuracy and performance of software, especially in React and with React Redux, are my specialization. In my free time, I read books or spend time with friends.'
    },

    education: [
        {
            university_name: 'Stanford University',
            city: 'Palo Alto, California, US',
            degree: 'Master of Science',
            subject: 'Quantum Computing',
            from: '2014',
            to: '2017',
            id: uniqid()
        },
        {
            university_name: 'MIT',
            city: 'Cambridge, MA, US',
            degree: 'Bachelor of Science',
            subject: 'Nuclear Science',
            from: '2010',
            to: '2014',
            id: uniqid()
        }
    ],

    experience: [
        {
            position: 'Senior Software Engineer',
            company: 'Xerox PARC',
            task: 'I provided technical leadership for complex projects. I used the latest technologies such as Cloud Service, Visual Studio 2019 and Azure DevOps. My daily work consisted mostly of maintaining full project life-cycle tasks including debugging, technical analysis, design and coding.',
            city: 'Palo Alto, California, US',
            from: '2020',
            to: 'present',
            id: uniqid()
        },
        {
            position: 'Software Engineer',
            company: 'General Magic',
            task: "I worked on the company's software development plans including all aspects of the SDLC in collaboration with peer programmers. My daily workflow here consisted of performing error analysis, assisting with IT issues. I, together with my team of peers, developed 25+ Java Applications in the time of my employment.",
            city: 'Mountain View, California, US',
            from: '2018',
            to: '2020',
            id: uniqid()
        }
    ]
}

export default exampleData;
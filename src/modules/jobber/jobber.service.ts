export default class JobberService {
    static getJobberProfile = async (jobberid: any) => {
        const JOBBER = {
            _id: 'j_1',
            fullName: 'John Doe',
            profilePicture: 'https://randomuser.me/api/portraits/men/72.jpg',
            phone: '+213657000000',
            email: 'johndoe@gmail.com',
            category: 'Cleaning',
            subCategory: 'Ironing',
            activityZones: ['Alger', 'Blida', 'Tipaza'],
            yearsOfExperiences: 10,
            rating: 5,
            reviews: 123,
            jobsDone: 320,
            comments: [
                {
                    _id: 'cm_1',
                    rating: 5,
                    postedAt: {
                        date: '2022/10/06',
                        time: '19:00',
                    },
                    message: 'does clean work, definetly worth recommending',
                    client: {
                        c_id: 'c_2',
                        fullName: 'Herbert Ramirez',
                        profilePicture:
                            'https://randomuser.me/api/portraits/men/85.jpg',
                        phone: '+213681000081',
                        email: 'herbert@gmail.com',
                        adresses: [
                            'Rue de la gare, Boumerdes, Boumerdes',
                            'Rue de la Méditerranée, Tipaza, Tipaza',
                        ],
                        requests: [],
                    },
                },
                {
                    _id: 'cm_2',
                    rating: 4,
                    postedAt: {
                        date: '2022/10/05',
                        time: '10:00',
                    },
                    message:
                        'overall work is done good, some minor improvements needed',
                    client: {
                        c_id: 'c_3',
                        fullName: 'Kylie Mendoza',
                        profilePicture:
                            'https://randomuser.me/api/portraits/women/12.jpg',
                        phone: '+213653303030',
                        email: 'kylie@gmail.com',
                        adresses: ["Rue de l'université, Bab Ezzouar, Alger"],
                        requests: ['cr_5'],
                    },
                },
            ],
        }

        return JOBBER
    }

    static getJobberAvailableJobs = async (jobberid: any) => {
        const JOBBER_AVAILABLE_JOBS = [
            {
                _id: 'cr_5',
                category: 'Cleaning',
                subCategory: 'Ironing',
                decription: 'I have 5 napkins to be ironed',
                address: "Rue de l'université, Bab Ezzouar, Alger",
                postedAt: {
                    date: '2022/10/11',
                    time: '15:00',
                },
                isProfessionalRequested: false,
                jobStatus: 'open',
            },
        ]

        return JOBBER_AVAILABLE_JOBS
    }

    static getJobberAcceptedJobs = async (jobberid: any) => {
        const JOBBER_ACCEPTED_JOBS = [
            {
                _id: 'cro_1',
                clientRequest: {
                    _id: 'cr_1',
                    category: 'Cleaning',
                    subCategory: 'Ironing',
                    decription:
                        'I have a stack of 3 sweaters and 2 pants that needs to be ironed',
                    address: "2 Rue Larbi Ben M'hidi, Alger Centre, Alger",
                    postedAt: {
                        date: '2022/10/11',
                        time: '07:00',
                    },
                    isProfessionalRequested: false,
                    jobStatus: 'accepted',
                },
                jobberOffer: [
                    {
                        _id: 'jo_1',
                        proposedPrice: 3000,
                        message:
                            'I have an expertise of 10 years in ironing, quality garanteed',
                        jobber: {
                            _id: 'j_1',
                            fullName: 'John Doe',
                            profilePicture:
                                'https://randomuser.me/api/portraits/men/72.jpg',
                            phone: '+213657000000',
                            email: 'johndoe@gmail.com',
                            category: 'Cleaning',
                            subCategory: 'Ironing',
                            activityZones: ['Alger', 'Blida', 'Tipaza'],
                            yearsOfExperiences: 10,
                            rating: 5,
                            reviews: 123,
                            jobsDone: 320,
                            comments: [
                                {
                                    _id: 'cm_1',
                                    rating: 5,
                                    postedAt: {
                                        date: '2022/10/06',
                                        time: '19:00',
                                    },
                                    message:
                                        'does clean work, definetly worth recommending',
                                    client: {
                                        c_id: 'c_2',
                                        fullName: 'Herbert Ramirez',
                                        profilePicture:
                                            'https://randomuser.me/api/portraits/men/85.jpg',
                                        phone: '+213681000081',
                                        email: 'herbert@gmail.com',
                                        adresses: [
                                            'Rue de la gare, Boumerdes, Boumerdes',
                                            'Rue de la Méditerranée, Tipaza, Tipaza',
                                        ],
                                        requests: [],
                                    },
                                },
                                {
                                    _id: 'cm_2',
                                    rating: 4,
                                    postedAt: {
                                        date: '2022/10/05',
                                        time: '10:00',
                                    },
                                    message:
                                        'overall work is done good, some minor improvements needed',
                                    client: {
                                        c_id: 'c_3',
                                        fullName: 'Kylie Mendoza',
                                        profilePicture:
                                            'https://randomuser.me/api/portraits/women/12.jpg',
                                        phone: '+213653303030',
                                        email: 'kylie@gmail.com',
                                        adresses: [
                                            "Rue de l'université, Bab Ezzouar, Alger",
                                        ],
                                        requests: ['cr_5'],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        ]

        return JOBBER_ACCEPTED_JOBS
    }

    // for the dashboard
    static getAllJobbersProfiles = async () => {
        const JOBBERS = [
            {
                _id: 'j_1',
                fullName: 'John Doe',
                profilePicture:
                    'https://randomuser.me/api/portraits/men/72.jpg',
                phone: '+213657000000',
                email: 'john@gmail.com',
                category: 'Cleaning',
                subCategory: 'Ironing',
                activityZones: ['Alger', 'Blida', 'Tipaza'],
                yearsOfExperiences: 10,
                rating: 5,
                reviews: 123,
                jobsDone: 320,
                comments: [
                    {
                        _id: 'cm_1',
                        rating: 5,
                        postedAt: {
                            date: '2022/10/06',
                            time: '19:00',
                        },
                        message:
                            'does clean work, definetly worth recommending',
                        client: {
                            c_id: 'c_2',
                            fullName: 'Herbert Ramirez',
                            profilePicture:
                                'https://randomuser.me/api/portraits/men/85.jpg',
                            phone: '+213681000081',
                            email: 'herbert@gmail.com',
                            adresses: [
                                'Rue de la gare, Boumerdes, Boumerdes',
                                'Rue de la Méditerranée, Tipaza, Tipaza',
                            ],
                            requests: [],
                        },
                    },
                    {
                        _id: 'cm_2',
                        rating: 4,
                        postedAt: {
                            date: '2022/10/05',
                            time: '10:00',
                        },
                        message:
                            'overall work is done good, some minor improvements needed',
                        client: {
                            c_id: 'c_3',
                            fullName: 'Kylie Mendoza',
                            profilePicture:
                                'https://randomuser.me/api/portraits/women/12.jpg',
                            phone: '+213653303030',
                            email: 'kylie@gmail.com',
                            adresses: [
                                "Rue de l'université, Bab Ezzouar, Alger",
                            ],
                            requests: ['cr_5'],
                        },
                    },
                ],
            },
            {
                _id: 'j_2',
                fullName: 'Benjamin Jackson',
                profilePicture: 'https://randomuser.me/api/portraits/men/9.jpg',
                phone: '+213657151515',
                email: 'benjamin@gmail.com',
                category: 'Private classes',
                subCategory: 'High school english teacher',
                activityZones: ['Alger', 'Blida'],
                yearsOfExperiences: 5,
                rating: 4,
                reviews: 88,
                jobsDone: 120,
                comments: [
                    {
                        _id: 'cm_3',
                        rating: 4,
                        postedAt: {
                            date: '2022/10/05',
                            time: '11:00',
                        },
                        message:
                            'teacher with working experience and pedagogical approach',
                        client: {
                            c_id: 'c_2',
                            fullName: 'Herbert Ramirez',
                            profilePicture:
                                'https://randomuser.me/api/portraits/men/85.jpg',
                            phone: '+213681000081',
                            email: 'herbert@gmail.com',
                            adresses: [
                                'Rue de la gare, Boumerdes, Boumerdes',
                                'Rue de la Méditerranée, Tipaza, Tipaza',
                            ],
                            requests: [],
                        },
                    },
                ],
            },
        ]

        return JOBBERS
    }
}

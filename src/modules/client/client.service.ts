export default class ClientService {
    static getClientProfile = async (clientid: any) => {
        const CLIENT_DETAILS = {
            c_id: 'c_1',
            fullName: 'Patrick Matthews',
            profilePicture: 'https://randomuser.me/api/portraits/men/21.jpg',
            phone: '+213690000000',
            email: 'patrick@gmail.com',
            adresses: [
                "2 Rue Larbi Ben M'hidi, Alger",
                'Cité 1 Mai, Blida, Blida',
            ],
            requests: ['cr_1', 'cr_2', 'cr_3', 'cr_4'],
        }

        return CLIENT_DETAILS
    }

    static getClientAllRequests = async (clientid: any) => {
        const CLIENT_ALL_REQUESTS = [
            {
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
            {
                _id: 'cr_2',
                category: 'Cleaning',
                subCategory: 'Car washing',
                decription: 'I have a car to wash, inside and outside',
                address: "2 Rue Larbi Ben M'hidi, Alger Centre, Alger",
                postedAt: {
                    date: '2022/10/10',
                    time: '08:30',
                },
                isProfessionalRequested: true,
                jobStatus: 'canceled',
            },
            {
                _id: 'cr_3',
                category: 'Cleaning',
                subCategory: 'Carpet & sofa cleaning',
                decription: 'I have a 10 windows to be washed',
                address: 'Cité 1 Mai, Blida, Blida',
                postedAt: {
                    date: '2022/10/09',
                    time: '18:30',
                },
                isProfessionalRequested: false,
                jobStatus: 'completed',
            },
            {
                _id: 'cr_4',
                category: 'Cleaning',
                subCategory: 'Home Cleaning',
                decription: 'I have 1 floor that need to be cleaned',
                address: 'Cité 1 Mai, Blida, Blida',
                postedAt: {
                    date: '2022/10/11',
                    time: '18:30',
                },
                isProfessionalRequested: false,
                jobStatus: 'open',
            },
        ]

        return CLIENT_ALL_REQUESTS
    }

    static getClientRequestAcceptedOffer = async ({
        clientid,
        requestid,
    }: {
        clientid: any
        requestid: any
    }) => {
        const CLIENT_REQUEST_ACCEPTED_OFFER = [
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

        return CLIENT_REQUEST_ACCEPTED_OFFER
    }

    // for the dashboard
    static getAllClientsProfiles = () => {
        const CLIENTS = [
            {
                c_id: 'c_1',
                fullName: 'Patrick Matthews',
                profilePicture:
                    'https://randomuser.me/api/portraits/men/21.jpg',
                phone: '+213690000000',
                email: 'patrick@gmail.com',
                adresses: [
                    "2 Rue Larbi Ben M'hidi, Alger",
                    'Cité 1 Mai, Blida, Blida',
                ],
                requests: ['cr_1', 'cr_2', 'cr_3', 'cr_4'],
            },
            {
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
            {
                c_id: 'c_3',
                fullName: 'Kylie Mendoza',
                profilePicture:
                    'https://randomuser.me/api/portraits/women/12.jpg',
                phone: '+213653303030',
                email: 'kylie@gmail.com',
                adresses: ["Rue de l'université, Bab Ezzouar, Alger"],
                requests: ['cr_5'],
            },
        ]

        return CLIENTS
    }
}

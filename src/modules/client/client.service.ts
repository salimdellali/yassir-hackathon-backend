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
                postedAt: '2022-10-11T07:00:00.000Z',
                isProfessionalRequested: false,
                jobStatus: 'accepted',
            },
            {
                _id: 'cr_2',
                category: 'Cleaning',
                subCategory: 'Car washing',
                decription: 'I have a car to wash, inside and outside',
                address: "2 Rue Larbi Ben M'hidi, Alger Centre, Alger",
                postedAt: '2022-10-10T08:30:00.000Z',
                isProfessionalRequested: true,
                jobStatus: 'canceled',
            },
            {
                _id: 'cr_3',
                category: 'Cleaning',
                subCategory: 'Carpet & sofa cleaning',
                decription: 'I have a 10 windows to be washed',
                address: 'Cité 1 Mai, Blida, Blida',
                postedAt: '2022-10-09T18:30:00.000Z',
                isProfessionalRequested: false,
                jobStatus: 'completed',
            },
            {
                _id: 'cr_4',
                category: 'Cleaning',
                subCategory: 'Home Cleaning',
                decription: 'I have 1 floor that need to be cleaned',
                address: 'Cité 1 Mai, Blida, Blida',
                postedAt: '2022-10-10T18:30:00.000Z',
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
                    postedAt: '2022-10-11T07:00:00.000Z',
                    isProfessionalRequested: false,
                    jobStatus: 'accepted',
                },
                jobberOffer: [
                    {
                        proposedPrice: 3000,
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

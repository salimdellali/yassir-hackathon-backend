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
                postedAt: '2022-10-11T15:00:00.000Z',
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
            },
        ]

        return JOBBERS
    }
}

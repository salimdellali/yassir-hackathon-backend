export default class ClientService {
    static getClientDetails = async (clientid: any) => {
        const CLIENT_DETAILS = {
            _id: '1',
            fullName: 'Will Smith',
            profilePicture: 'https://randomuser.me/api/portraits/men/21.jpg',
            phone: '+213690000000',
            adresses: [
                "2 Rue Larbi Ben M'hidi, Alger",
                "Rue de l'université Saad Dahlab, Blida, Blida ",
            ],
            requests: ['1', '2'],
        }

        return CLIENT_DETAILS
    }

    static getClientRequests = async (clientid: any) => {
        const CLIENT_REQUESTS = [
            {
                _id: '1',
                category: 'Cleaning',
                subCategory: 'Ironing',
                decription:
                    'I have a pile of 3 sweaters and 2 pants that needs to be ironned',
                address: "2 Rue Larbi Ben M'hidi, Alger Centre, Alger",
                postedAt: '2022-10-11T07:00:00.000Z',
                isProfessionalRequest: 'true',
            },
            {
                _id: '2',
                category: 'Cleaning',
                subCategory: 'Car Washing',
                decription: 'I have a car to wash, inside and outside',
                address: "2 Rue Larbi Ben M'hidi, Alger Centre, Alger",
                postedAt: '2022-10-10T08:30:00.000Z',
                isProfessionalRequest: 'false',
            },
        ]

        return CLIENT_REQUESTS
    }
}

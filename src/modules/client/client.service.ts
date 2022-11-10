export default class ClientService {
    static getClientRequests = async () => {
        // TODO : implement Database request

        // retunr fake data
        const CLIENT_REQUESTS = [
            {
                category: 'Cleaning',
                subCategory: 'Ironing',
                decription:
                    'I have a pile of 3 sweaters and 2 pants that needs to be ironned',
                address: "2 Rue Larbi Ben M'hidi, Alger",
                postedAt: '2022-10-11T07:00:00.000Z',
            },
            {
                category: 'Cleaning',
                subCategory: 'Car Washing',
                decription: 'I have a car to wash, inside and outside',
                address: "2 Rue Larbi Ben M'hidi, Alger",
                postedAt: '2022-10-10T08:30:00.000Z',
            },
        ]

        return CLIENT_REQUESTS
    }
}

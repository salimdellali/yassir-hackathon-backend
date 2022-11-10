export default class JobberService {
    static getJobberDetails = async (jobberid: any) => {
        const JOBBER = {
            _id: '1',
            fullName: 'John Doe',
            profilePicture: 'https://randomuser.me/api/portraits/men/72.jpg',
            phone: '+213657000000',
            email: 'johndoe@gmail.com',
            category: 'Cleaning',
            subCategory: 'Car Washing',
            activityZones: ['Alger', 'Blida', 'Tipaza'],
            yearsOfExperiences: '10',
            rating: '5',
            reviews: '123',
            jobsDone: '320',
        }

        return JOBBER
    }
}

import { IUserStore } from '../redux/reducers/userReducer'
import { Vlad } from './users'

export const SampleAds = [
    {
        id: '43452322',
        userId: 'dsdfsf',
        createDate: new Date(),
        data: {
            title: 'Вакансия 1',
            field: 'it',
            experience: '3 year',
            schedule: 'asda',
            sex: 'male',
            education: 'university',
            language: 'english',
            salary: '150000',
            photo: 'https://yt3.ggpht.com/ytc/AAUvwnh-6ik6sGBI4-fHDxQ1VvID-xmgitMfwUDrs6kxrYk=s900-c-k-c0x00ffffff-no-rj',
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
    },
    {
        id: '434dfg4',
        userId: 'dsdfsf',
        createDate: new Date(),
        data: {
            title: 'Вакансия 2',
            field: 'manager',
            experience: '3 year',
            schedule: 'asdfsgda',
            sex: 'female',
            education: 'university',
            language: 'russian',
            salary: '100000',
            photo: 'https://i.pinimg.com/originals/97/17/e5/9717e5cf185c1e7dd55196a882903601.jpg',
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
    },
    {
        id: '43434rgd',
        userId: 'dsdfsf',
        createDate: new Date(),
        data: {
            title: 'Вакансия 3',
            field: 'manager',
            experience: '3 year',
            schedule: 'asdfsgda',
            sex: 'female',
            education: 'university',
            language: 'russian',
            salary: '100000',
            photo: 'https://phonoteka.org/uploads/posts/2021-05/1622467118_16-phonoteka_org-p-vselennaya-kosmos-art-krasivo-18.jpg',
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
    },
    {
        id: '4er34345',
        userId: 'dsdfsf',
        createDate: new Date(),
        data: {
            title: 'Вакансия 4',
            field: 'engineer',
            experience: '1 year',
            schedule: 'asdfsgda',
            sex: 'female',
            education: 'university',
            language: 'russian',
            salary: '100000',
            photo: 'https://a.d-cd.net/3a66326s-1920.jpg',
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
    },
]

export const testUser: IUserStore = {
    login: 'Vladislav',
    password: '123',
    email: 'vladshevela@gmail.com',
    phone: '+79657841295',
    id: Vlad.id,
}

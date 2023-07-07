import * as yup from 'yup'

export const createAdsValidationSchema = yup.object({
    title: yup.string().required('Title is required'),
    field: yup.string().required('Field is required'),
    // experience: '',
    // schedule: '',
    // sex: yup.string().required(),
    // education: '',
    // languages: '',
    // salary: '',
    photo: yup.mixed().required('You need to provide a file'),
})

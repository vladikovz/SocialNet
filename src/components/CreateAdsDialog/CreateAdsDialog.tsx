import React from 'react'
import {
    Button,
    Dialog,
    styled,
    TextareaAutosize,
    TextField,
} from '@mui/material'
import { Formik } from 'formik'
import { FormCreateLayout } from '../../layouts/FormCreateLayout/FormCreateLayout'
import { createAdsValidationSchema } from '../../constants/validationSchemes'
import { AddPhotoButton } from './AddPhotoButton/AddPhotoButton'
import { IAddsInitialValues } from '../../Interfaces/IAddsInitialValues'
import { SubmitButtonsLayout } from './SubmitButtonsLayout/SubmitButtonsLayout'
import { DialogTitleLayout } from './DialogTitleLayout/DialogTitleLayout'
import { SwitchButton } from './SwitchButton/SwitchButton'
import { SelectValue } from './SelectValue/SelectValue'
import { useDispatch } from 'react-redux'
import { AddAds } from '../../redux/actions/adsActions'
import { IAds } from '../../Interfaces/IAds'

interface ICreateAdsDialogProps {
    title: string
    isOpen: boolean
    handleClose: () => void
    onSubmit: () => void
}
type widthT = {
    width?: string
}

const TextFieldStyled = styled(TextField)<widthT>`
    .MuiInputLabel-shrink {
        color: ${(props) => props.width};
    }
`

const languagesList = ['English', 'Russian', 'Japanese']

export const CreateAdsDialog = (props: ICreateAdsDialogProps) => {
    const initialValues: IAddsInitialValues = {
        title: '',
        field: '',
        experience: '',
        schedule: '',
        sex: '',
        education: '',
        language: '',
        salary: '',
        photo: null,
        description: '',
    }
    const dispatch = useDispatch()

    const getAds = (data: IAddsInitialValues) => {
        const ads: IAds = {
            id: '6346',
            userId: '',
            createDate: new Date(),
            data,
        }
        return ads
    }

    return (
        <Dialog
            open={props.isOpen}
            sx={{
                '& .MuiFormControl-root': {
                    width: '90%',
                    margin: '0 auto',
                },
            }}
        >
            <DialogTitleLayout>{props.title}</DialogTitleLayout>
            <Formik
                initialValues={initialValues}
                validationSchema={createAdsValidationSchema}
                // validate={(values) => {
                //     const errors: any = {}
                //     if (!values.login) {
                //         errors.email = 'Required'
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                //             values.login
                //         )
                //     ) {
                //         errors.email = 'Invalid email address'
                //     }
                //     return errors
                // }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(false)
                    props.handleClose()
                    dispatch(AddAds(getAds(values)))
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <FormCreateLayout>
                            <TextFieldStyled
                                fullWidth
                                id="title"
                                name="title"
                                label="Title"
                                value={values.title}
                                onChange={handleChange}
                                error={touched.title && Boolean(errors.title)}
                                helperText={touched.title && errors.title}
                            />
                            <TextFieldStyled
                                fullWidth
                                id="field"
                                name="field"
                                label="Field"
                                value={values.field}
                                onChange={handleChange}
                                error={touched.field && Boolean(errors.field)}
                                helperText={touched.field && errors.field}
                            />
                            <TextFieldStyled
                                fullWidth
                                id="experience"
                                name="experience"
                                label="Experience"
                                type="experience"
                                value={values.experience}
                                onChange={handleChange}
                                error={
                                    touched.experience &&
                                    Boolean(errors.experience)
                                }
                                helperText={
                                    touched.experience && errors.experience
                                }
                            />
                            <TextFieldStyled
                                fullWidth
                                id="schedule"
                                name="schedule"
                                label="Schedule"
                                value={values.schedule}
                                onChange={handleChange}
                                error={
                                    touched.schedule && Boolean(errors.schedule)
                                }
                                helperText={touched.schedule && errors.schedule}
                            />
                            <SwitchButton
                                error={touched.sex}
                                getSex={(sexValue) =>
                                    setFieldValue('sex', sexValue)
                                }
                            />
                            <TextFieldStyled
                                fullWidth
                                id="education"
                                name="education"
                                label="Education"
                                value={values.education}
                                onChange={handleChange}
                                error={
                                    touched.education &&
                                    Boolean(errors.education)
                                }
                                helperText={
                                    touched.education && errors.education
                                }
                            />
                            <TextFieldStyled
                                fullWidth
                                id="salary"
                                name="salary"
                                label="Salary"
                                type="number"
                                value={values.salary}
                                onChange={handleChange}
                                error={touched.salary && Boolean(errors.salary)}
                                helperText={touched.salary && errors.salary}
                            />
                            <AddPhotoButton
                                error={!!touched.photo}
                                id="photo"
                                name="Add Photo"
                                type="file"
                                handleChangeInput={(event) => {
                                    setFieldValue('photo', event)
                                }}
                            />
                            <SelectValue
                                id={'language'}
                                name={'Language'}
                                items={languagesList}
                                getValue={(value) =>
                                    setFieldValue('language', value)
                                }
                            />
                            <TextareaAutosize
                                id="description"
                                aria-label="Description"
                                placeholder="Description"
                                minRows={3}
                                style={{ maxWidth: 200 }}
                                value={values.description}
                                onChange={handleChange}
                            />
                        </FormCreateLayout>
                        <SubmitButtonsLayout>
                            <Button
                                sx={{ margin: '10px' }}
                                color={'secondary'}
                                disabled={isSubmitting}
                                type="submit"
                            >
                                Submit
                            </Button>
                            <Button
                                sx={{ margin: '10px' }}
                                color={'secondary'}
                                onClick={props.handleClose}
                            >
                                Cancel
                            </Button>
                        </SubmitButtonsLayout>
                    </form>
                )}
            </Formik>
        </Dialog>
    )
}

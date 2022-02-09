import React from 'react'
import { AdsCard } from './AdsCard'
import { SampleAds } from '../../constants/dataFilling'
import { Container, DateInfo, MainInfo } from './styles'
import moment from 'moment'

const setUp = (props) => enzymeShallow(<AdsCard {...props} />)

describe('Should render AdsCard component', () => {
    let component
    beforeEach(() => {
        component = setUp({
            data: SampleAds[0],
            onClick: () => console.log(),
        })
    })
    it('Should contain Container component', () => {
        const wrapper = component.find(Container)
        expect(wrapper.length).toBe(1)
    })

    it('Should contain DateInfo', () => {
        const dateSample = '01-03-2020'
        component = setUp({ data: { createDate: dateSample } })
        const MainInfoComponent = component.find(MainInfo)
        let DateInfoComponent = MainInfoComponent.find(DateInfo)
        expect(DateInfoComponent.props().children).toBe(
            moment().calendar(dateSample)
        )
    })

    // it('Should render correctly', () => {
    //     expect(component).toMatchSnapshot()
    // })
})

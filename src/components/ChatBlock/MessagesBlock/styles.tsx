import styled from 'styled-components'

const BORDER_COLOR = '#cecece'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    margin: 10px 0;
    border: 1px solid ${BORDER_COLOR};
    border-radius: 4px;
`

export const HeaderField = styled.div`
    display: flex;
    height: 58px;
    border-bottom: 1px solid ${BORDER_COLOR};
`
export const HeaderField__BackBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
`
export const HeaderField__AdsInfo = styled.div`
    height: 100%;
    width: 100%;
`
export const HeaderField__Params = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
`
export const MainField = styled.div`
    height: 100%;
`
// export const MainField = styled.div`
// `

export const FooterField = styled.div`
    width: 100%;
    height: 58px;
    background-color: #bebebe;
`

// export const InputField = styled.div`
// `

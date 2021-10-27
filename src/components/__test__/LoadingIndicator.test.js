import ReactDom from 'react-dom'
import {render} from '@testing-library/react'
import LoadingIndicator from '../LoadingIndicator'
import '@testing-library/jest-dom'

it("renders without crashing", () =>{
    const div = document.createElement("div")
    ReactDom.render(<LoadingIndicator/>, div)
})

it("render correctly ", () =>{
    const {getByTestId} = render(<LoadingIndicator/>)
    expect(getByTestId('loading-indicator')).toHaveTextContent("loading ...")
})


import ReactDom from 'react-dom'
import {render} from '@testing-library/react'
import Modal from '../Modal'
import '@testing-library/jest-dom'

it("it renders", () =>{
    const div = document.createElement("div")
    ReactDom.render(<Modal/>, div)
})

it("render correctly ", () =>{
    const {getByTestId} = render(<Modal>Modal Content</Modal>)
    expect(getByTestId('modal')).toHaveTextContent("Modal Content")
})


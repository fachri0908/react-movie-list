import ReactDom from 'react-dom'
import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import SearchItem from '../SearchItem'
import '@testing-library/jest-dom'

it("it renders", () =>{
    const div = document.createElement("div")
    ReactDom.render(
        <BrowserRouter>
            <SearchItem/>
        </BrowserRouter>, div)
})

it("it renders correctly ", () =>{
    const div = document.createElement("div")
    const {getByTestId} = render(
        <BrowserRouter>
            <SearchItem data={{Poster:'sample.jpg', imdbId:1, Title:'Title',Year:2004}}/>
        </BrowserRouter>, div)
    expect(getByTestId('search-item')).toHaveTextContent("Title")
    expect(getByTestId('search-item')).toHaveTextContent("2004")
})


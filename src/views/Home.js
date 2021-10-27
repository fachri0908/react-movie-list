import React, {useState} from 'react';
import Modal from '../components/Modal';
import LoadingIndicator from '../components/LoadingIndicator';
import SearchItem from '../components/SearchItem';
import {search} from '../plugins/api';
import {addMovies, setPage} from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const [delay, setDelay] = useState(null)
    const [currentSearch, setCurrentSearch] = useState(1)
    const [fetching, setFetching] = useState(false)
    const [reachEnd, setReachEnd] = useState(false)
    const [currentTotal, setCurrentTotal] = useState(1)
    const [posterModal, setPosterModal] = useState(false)
    const [selectedPoster, setSelectedPoster] = useState(null)

    const movieList = useSelector( state => state.movies)
    const page = useSelector( state => state.page)

    const handleScroll = (event) => {
        if(event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
            if(!reachEnd){
                setFetching(true)
                clearTimeout(delay);
    
                setDelay(setTimeout(function() {
                    getMovie(currentSearch, page+1)
                }, 1000));
            }
        }
    }

    const searchMovie= (v) => {
        dispatch(addMovies([]))
        dispatch(setPage(1))
        setCurrentTotal(1)
        setReachEnd(false)
        setFetching(true)

        clearTimeout(delay);
        setDelay(setTimeout(function() {
            setCurrentSearch(v.target.value)
            if(v.target.value){
                getMovie(v.target.value, 1)
            }
        }, 1000));
    }

    const getMovie = (s, p) => {
        search(s, p).then((res) => {
            if(res.data.Response==='True'){
                dispatch(addMovies(movieList.concat(res.data.Search)))
                dispatch(setPage(p))
                setCurrentTotal(parseInt(res.data.totalResults))
            }else{
                if(currentTotal === movieList.length){
                    setReachEnd(true)
                    setFetching(false)
                }else{
                    alert(res.data.Error)
                }
            }
            setFetching(false)
        })
    }


    const showPoster = (p) => {
        setSelectedPoster(p)
        setPosterModal(true)
    }
    return (
        <div className="content-container">
            <div style={{flex:'row', padding:0, margin:0}}>
                <div style={{display:'inline-block', marginRight:10, width:'100%'}}>
                    <input placeholder="Type Movie Name" type="text" onChange={searchMovie} style={{width:'100%', maxWidth:'300px', height:30}}/>
                </div>
            </div>
            {
                (movieList && movieList.length > 0) ? 
                    <div style={{width:'100%', maxHeight:'90vh', overflowY:'auto'}} onScroll={handleScroll}>
                        {
                            movieList.map((el, key) => (
                                <SearchItem onShowPoster={() => showPoster(el.Poster)} key={key} data={el}/>
                            ))
                        }
                        {
                            (fetching) ?
                                <LoadingIndicator/>
                            : null
                        }
                        {
                            (reachEnd) ?
                                <div style={{width:'100%',textAlign:'center', height:10, padding:15, color:'#808080'}}> no more results</div>
                            : null
                        }
                    </div>
                : null
            }
            {
                (posterModal) ?
                    <Modal onClosePosterModal={() => setPosterModal(false)}>
                        <img alt="cover-movie" style={{width:'300px'}} src={selectedPoster}/>
                    </Modal>
                : null
            }
        </div>
    );
}

export default Home;

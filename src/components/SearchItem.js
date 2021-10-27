import {Link} from 'react-router-dom'

const SearchItem = (props) => {
    const {data={Poster:null,imdbId:null,Year:null,Type:null}} = props
    return (
        <div data-testid="search-item" style={{width:'100%', padding:15, borderBottom:' 1px solid #ededed', flex:'row'}}>
            <div style={{display:'inline-block',width:'50px'}}>
                <img onEr onClick={() =>props.onShowPoster()} alt="movie-poster" src={data.Poster} style={{width:'50px', cursor:'pointer'}}/>
            </div>
            <div style={{display:'inline-block', verticalAlign:'top', paddingLeft:5}}>
                <Link to={'/movie/'+data.imdbID} style={{textDecoration:'none', }}>
                    <span style={{fontWeight:400, color:'#000'}}>{data.Title} ({data.Year})</span><br/>
                </Link>
                <span style={{color:"#808080"}}>{data.Type}</span>
            </div>
        </div>
    );
}

export default SearchItem;

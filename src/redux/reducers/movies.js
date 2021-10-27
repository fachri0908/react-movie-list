const movieReducer = (state =[], action) => {
  switch(action.type){
    case "SETMOVIES" :
      return action.payload
    default:
      return state
  }
}
export default movieReducer
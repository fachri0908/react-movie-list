export const addMovies = (movies) => {
  return {
    type: "SETMOVIES",
    payload: movies
  }
};

export const setPage = (page) => {
  return {
    type: "SETPAGE",
    payload: page
  }
};


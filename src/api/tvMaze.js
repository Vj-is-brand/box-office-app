const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  //    throw new Error('bad request');
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  console.log(body);

  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);

export const searchForPeople = query => apiGet(`/search/people?q=${query}`);

export const searchShowInfo = (showId) => apiGet( `/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':' d755251d3bmsh543712c15b9aa58p17ab39jsn7f8c12bb0d32',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd755251d3bmsh543712c15b9aa58p17ab39jsn7f8c12bb0d32',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  
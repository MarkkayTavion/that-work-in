export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':
      'cd6c3877d6mshaca288c1fa7bcc6p11450djsn836f14273775',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'cd6c3877d6mshaca288c1fa7bcc6p11450djsn836f14273775',
    },
  };
  
  export const fetchData = async (url, exerciseOptions) => {
    const res = await fetch(url, exerciseOptions);
    const data = await res.json();
  
    return data;
  };
  
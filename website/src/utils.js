export const fetchData = async () => {
  // Need to find another way to store data
  //const url = "https://www.pythonanywhere.com/api/v0/user/LeagueTeam/files/path/home/LeagueTeam/randomteamgenerator/static/elo_system.json";
  const url = 'https://www.pythonanywhere.com/api/v0/user/LeagueTeam/cpu/'
  const options = {
      method: 'GET',
      mode: 'no-cors',
      headers: {
          'Authorization': 'Token a0a64aa63bbdc2e4efbe678c64df5b5777904731',
      }
  };
  try {
      const response = await fetch(url, options);
      if (response.ok) {
          const json = await response.json();
          console.info(json);
          return json;
      } else {
          console.error('Failed to fetch data');
          console.error(response);
      }
  } catch (error) {  
      console.error(error);
  }
}
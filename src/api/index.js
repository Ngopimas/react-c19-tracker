import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(apiUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {

  }
}

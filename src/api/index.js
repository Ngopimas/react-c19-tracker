import axios from 'axios';

const apiUrl = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(apiUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

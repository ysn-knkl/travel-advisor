import axios from 'axios';

export const getPlacesData = async (type, sw,ne) => {

    try {
        const { data : { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
   
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '8c6b3e7775msha4b2c0bfb70d421p11030fjsn37d15c6d45bd'
            }
          });

        return data;
    }catch (error) {
        console.log(error);
    }
}
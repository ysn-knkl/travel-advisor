import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData = async (sw,ne) => {

    try {
        const { data : { data }} = await axios.get(URL, {
   
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
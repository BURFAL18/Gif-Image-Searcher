import axios from 'axios';


export default  axios.create(
    {
baseURL:'https://api.unsplash.com',
headers: 
        {
            Authorization:
             'Client-ID veGrYWk5BFFQW7--_5psTMN6trmO-Wqxu6R_dOcmMWY'
         }
    });

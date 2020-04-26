import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 5pRJLcGNp-vqPptUYbMaC0eEYjjq273WuJjGgsm0ApHaY2suC4vZYZ-he1F3Ym20mxt-O43uWHxGADfSFc3HIoeeOn5CLB48V8oPnGw96ubfbT8J3wzudsApT-qkXnYx'
    }
});
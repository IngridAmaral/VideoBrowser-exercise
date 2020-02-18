import axios from 'axios'

const KEY = 'AIzaSyAKwRb517n-QFPaKdoPSz2BvHjIDo2JxZg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY    
    }
})
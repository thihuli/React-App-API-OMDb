import axios from 'axios'
import Search from '../components/Search/search'


const apikey = 'apikey=4eb20ef9'
let filme = 'Terminator+2'
const api = axios.create({baseURL: `http://www.omdbapi.com/?t=${filme}&${apikey}`})


export default api
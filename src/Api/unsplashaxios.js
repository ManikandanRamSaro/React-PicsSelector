import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com', 
    headers:{
       Authorization: 'Client-ID PBGi7Q5g1Ar9-XfoWiPp6i9sy9Jbxp0BKQaIt82dl1w'
    }
})
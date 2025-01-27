import axios from "axios";

export default axios.create({
    baseURL: `https://api.rawg.io/api`,
    params: {
        key:"f2e2af4362b04da09147e95d2a66eb5b"
    }
})
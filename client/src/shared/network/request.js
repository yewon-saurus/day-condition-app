import axios from "axios";

async function httpRequest(method='GET', url='/', data={}) {
    let response = null;
    const baseURL = "http://localhost:5001";
    let requestURL = baseURL + url;

    axios.create({
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (method === 'GET') {
        response = await axios.get(requestURL);
    }

    if (method === 'PATCH') {
        response = await axios.patch(requestURL, data)
    }

    return response;
}

export default httpRequest;
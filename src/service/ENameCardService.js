import axios from 'axios';


const E_NAME_CARD_API_BASE_URL = "http://localhost:8080/e-name-card";

class ENameCardService {

    getENameCard(){
        return axios.get(E_NAME_CARD_API_BASE_URL);
    }

    createEmployee(eNameCard){
        return axios.post(E_NAME_CARD_API_BASE_URL, eNameCard);
    }

}

export default new ENameCardService()

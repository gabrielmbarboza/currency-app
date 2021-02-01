import axios from "axios";

class CurrencyService {
    constructor() {
        this.baseUrl = "http://0.0.0.0:5000";
    }

    async getCurrencies() {
        const { data } = await axios.get(`${this.baseUrl}/currencies`);
        return data;
    }

    async getConvertedAmount(from, to, amount) {
        const { data } = await axios.get(`${this.baseUrl}/exchanges/convert`, {
            params: {
                from: from,
                to: to,
                amount: amount,
            },
        });
        return data;
    }
}

export default new CurrencyService();

import Axios from 'axios';

const tokenUrl = 'https://accounts.spotify.com/api/token';
const baseUrl = 'https://api.spotify.com';
const version =  'v1';

Axios.defaults.headers.post['Accept'] = 'application/json';
Axios.interceptors.response.use(response => response.data)

class Spotify {
    constructor(id, secret) {
        this.token = this.generateToken(id, secret).then(data => data.access_token);
    }

    generateToken(id, secret) {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        params.append('client_id', id);
        params.append('client_secret', secret);

        return Axios.post(tokenUrl, params, { headers: { 'Content-Type' : 'application/x-www-form-urlencoded' }});
    }

    async searchByBpm(bpm) {
        const token = await this.token;

        return Axios.get([baseUrl, version, 'recommendations'].join('/'), {
            headers: {
                Authorization: 'Bearer '+token,
            },
            params: {
                limit: 5,
                target_tempo: bpm,
                seed_genres: 'rock,metal',
            },
        });
    }
}

export default Spotify;
import axios from "axios";

const authEndpoint = 'https://accounts.spotify.com/authorize?'
const clintID = '481b89b1120549a38c32e8acb8e95654'
const redirectUri = 'http://localhost:5173';
const scopes = ["user-library-read","playlist-read-private"];

const accessToken = "http://localhost:5173/#access_token=BQD8z0nLAz4kCd8SZD_4zzzKeMq8VNB_SYEDoDx9G_KyGNCLyTELMwOa0oKiXrpB1lMmrs_c5sysyXrYTXTavPdYUGbHwYXyyUvqkyXiaXzK5lBGSpCipLkSlSLZ4Tz4lWhkPPcxGJ-aeEFxr2ypGDMWGdV5HB2O0uLX7CiyAI13gQmhxaKM_tJtjZHdGSGCrBMwHT1fCjbzw_Guy0iZi0o&token_type=Bearer&expires_in=3600"

export const loginEndpoint = `${authEndpoint}client_id=${clintID}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };

  export const APIkit = {
    getMyPlaylists: () => {
      return apiClient.get("/me/playlists");
    },
  };
  
  export default apiClient;
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});
const apiParam = {
  api_key: "a6aa6a9a7743c91baae062883b724db6",
  language: "ko-KR"
};
const apiGet = prop => {
  api.get(prop, { params: apiParam });
};

export const moviesApi = {
  nowPlaying: () => apiGet("movie/now_playing"),
  upcoming: () => apiGet("movie/upcoming"),
  popular: () => apiGet("movie/popular"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        ...apiParam,
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        ...apiParam,
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => apiGet("tv/top_rated"),
  popular: () => apiGet("tv/popular"),
  airingToday: () => apiGet("tv/airing_today"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        ...apiParam,
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        ...apiParam,
        query: encodeURIComponent(term)
      }
    })
};

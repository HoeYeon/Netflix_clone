import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "../../api";

function GetSearch() {
  const defaultState = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };
  const [state, setState] = useState(defaultState);
  const handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = state;
    if (searchTerm !== "") {
      searchByTerm();
    }
  };
  const updateTerm = event => {
    const {
      target: { value }
    } = event;
    setState({
      ...state,
      searchTerm: value
    });
  };

  const searchByTerm = async () => {
    const { searchTerm } = state;
    setState({ ...state, loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      setState({
        ...state,
        movieResults,
        tvResults,
        loading: false
      });
    } catch {
      setState({ ...state, error: "Can't find results.", loading: false });
    }
  };
  const { movieResults, tvResults, searchTerm, loading, error } = state;

  return (
    <SearchPresenter
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      updateTerm={updateTerm}
    />
  );
}

export default GetSearch;
// export default class extends React.Component {
//   state = {
//     movieResults: null,
//     tvResults: null,
//     searchTerm: "",
//     loading: false,
//     error: null
//   };
//   handleSubmit = () => {
//     const { searchTerm } = this.state;
//     if (searchTerm !== "") {
//       this.searchByTerm();
//     }
//   };

//   searchByTerm = async () => {
//     const { searchTerm } = this.state;
//     this.setState({ loading: true });
//     try {
//       const {
//         data: { results: movieResults }
//       } = await moviesApi.search(searchTerm);
//       const {
//         data: { results: tvResults }
//       } = await tvApi.search(searchTerm);
//       this.setState({
//         movieResults,
//         tvResults
//       });
//     } catch {
//       this.setState({ error: "Can't find results." });
//     } finally {
//       this.setState({ loading: false });
//     }
//   };

//   render() {
//     const { movieResults, tvResults, searchTerm, loading, error } = this.state;
//     return (
//       <SearchPresenter
//         movieResults={movieResults}
//         tvResults={tvResults}
//         searchTerm={searchTerm}
//         loading={loading}
//         error={error}
//         handleSubmit={this.handleSubmit}
//       />
//     );
//   }
// }

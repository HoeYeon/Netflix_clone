import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

function GetTV() {
  const defaultstate = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  const [state, setState] = useState(defaultstate);

  useEffect(() => {
    try {
      const getTVInfo = async () => {
        const {
          data: { results: topRated }
        } = await tvApi.topRated();
        const {
          data: { results: popular }
        } = await tvApi.popular();
        const {
          data: { results: airingToday }
        } = await tvApi.airingToday();

        setState({
          ...state,
          topRated,
          popular,
          airingToday,
          loading: false
        });
      };
      getTVInfo();
    } catch {
      setState({
        ...state,
        error: "Can't find TV"
      });
    }
  }, []);

  const { topRated, popular, airingTday, loading, error } = state;
  console.log(state);
  return (
    <TVPresenter
      topRated={topRated}
      popular={popular}
      airingTday={airingTday}
      loading={loading}
      error={error}
    />
  );
}
export default GetTV;
// export default class extends React.Component {
//   render() {
//     const { topRated, popular, airingTday, loading, error } = this.state;
//     return (
//       <TVPresenter
//         topRated={topRated}
//         popular={popular}
//         airingTday={airingTday}
//         loading={loading}
//         error={error}
//       />
//     );
//   }
// }

import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

// 이런식으로 props를 주면 Router에서 기본적으로 정보들을 넘겨주는걸 확인 가능
function GetDetail(props) {
  const {
    location: { pathname }
  } = props;
  const defaultState = {
    result: null,
    error: null,
    loading: true,
    isMovie: pathname.includes("/movie/")
  };

  const [state, setState] = useState(defaultState);
  useEffect(() => {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = props;
    const { isMovie } = state;
    const parseId = Number(id);
    if (isNaN(parseId)) {
      return push("/");
    }

    let result = null;
    try {
      const getProps = async () => {
        if (isMovie) {
          // let 으로 설정한 변수에 대해 destructuring을 해주려면 ()로 감싸주고 해야한다.
          ({ data: result } = await moviesApi.movieDetail(parseId));
        } else {
          ({ data: result } = await tvApi.showDetail(parseId));
        }
        console.log(result);
        setState({ ...state, loading: false, result });
      };
      getProps();
    } catch {
      setState({ ...state, error: "Can't find anything.", loading: false });
    }
  }, []);

  const { result, error, loading } = state;
  console.log(state);
  return <DetailPresenter result={result} error={error} loading={loading} />;
}

export default GetDetail;
// export default class extends React.Component {
//   state = {
//     result: null,
//     error: null,
//     loading: true
//   };

//   render() {
//     const { result, error, loading } = this.state;
//     return <DetailPresenter result={result} error={error} loading={loading} />;
//   }
// }

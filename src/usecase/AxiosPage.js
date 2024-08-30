import React from "react";
import useAxios from "../hooks/useAxios";
const url = "https://yts.am/api/v2/list_movies.json";
const AxiosPage = () => {
  const { isLoading, data, error, refetch } = useAxios({ url });
  console.log(isLoading, data, error);
  return (
    <div>
      AxiosPage
      <button onClick={refetch}>refetch</button>
      <p>isLoading:{`${isLoading}`}</p>
    </div>
  );
};

export default AxiosPage;

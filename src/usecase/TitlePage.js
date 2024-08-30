import React from "react";
import useTitle from "../hooks/useTitle";

const TitlePage = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return <div> 3초 뒤 타이틀이 Home으로 바뀝니다.</div>;
};

export default TitlePage;

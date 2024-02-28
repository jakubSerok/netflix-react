import React from "react";
import Main from "../components/Main/main";
import Row from "../components/Row/Row";
import requests from "../Request";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="0" title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="2" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="4" title="Gorror" fetchURL={requests.requestHorror} />
    </div>
  );
};
export default Home;

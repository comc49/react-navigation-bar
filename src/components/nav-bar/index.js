import React, {useReducer}  from "react";
import "./index.css";
import Home from '../home/index.js';
import News from "../news";
import Contact from "../contact";
import About from "../about";

const pages = {
  home: (<Home/>),
  news: (<News/>),
  about: (<About/>),
  contact: (<Contact/>),
}


window.history.pushState({}, '', `./home`);

export default function NavBar() {

  let page;
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  function handleRouteChange(routeURL) {
    window.history.pushState({}, '', `./${routeURL}`);
    forceUpdate();
  }


  page = pages[document.location.pathname.replace('/','')];


  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <a onClick={() => {handleRouteChange('home')}}>Home</a>
          <a onClick={() => handleRouteChange('news')}>News</a>
          <a onClick={() => handleRouteChange('contact')}>Contact</a>
          <a onClick={() => handleRouteChange('about')}>About</a>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
        <span>{page}</span>
        </section>
      </div>
    </div>
  );
}
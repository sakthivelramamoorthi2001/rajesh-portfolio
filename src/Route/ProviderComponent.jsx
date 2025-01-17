import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { ROUTE } from ".";
import Layout from "../Layout";
import { useEffect } from "react";


const ScrollToTop = () => {
  const { pathname } = useLocation(); // Must be inside Router

  useEffect(() => {
    window.scroll({
      behavior:'smooth',
      top:0
    });
  }, [pathname]);

  return null;
};


const ProviderComponent = () => {

  

  const setRoutes = () => {
    return ROUTE.map((route, index) => {
      const { path, component: Component } = route;
      return <Route key={index} path={path} element={<Component />} />;
    });
  };


  return (
    <Router>

      <div className="call_top_model">
        <Layout>
          <div className="children_component">
            <ScrollToTop />
            <Routes>
              <>{setRoutes()}</>
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
};

export default ProviderComponent;

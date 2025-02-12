import React from 'react';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from './About.js';

export default function App() {


  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);


  return (
    <Router>
      <div className="App">

      <Routes>
        <Route path = "/" element = {<Header />} />
        <Route path = "/about" element = {<About />} />
      </Routes>
      </div>

    </Router>
  );
}
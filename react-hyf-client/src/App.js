import React from 'react';
import Home from './components/Home'
import ToDoDynamicW1 from './components/w1/TodoDynamic'
import ToDoDynamicW2 from './components/w2/TodoDynamic'
import WeekThreeHW from './components/w3/WeekThreeHW';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Link to="/" >Home</Link><br />
        <Link to="/week1" >Week 1 HW</Link><br />
        <Link to="/week2" >Week 2 HW</Link><br />
        <Link to="/week3" >Week 3 HW</Link><br />
        <hr />
        <Route path="/" exact component={Home} />
        <Route path="/week1" component={ToDoDynamicW1} />
        <Route path="/week2" component={ToDoDynamicW2} />
        <Route path="/week3" component={WeekThreeHW} />
      </div>
    </BrowserRouter>
  )

}

export default App;

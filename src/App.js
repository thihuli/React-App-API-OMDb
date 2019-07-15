import React from 'react';
import Header from './components/Header/index'
import './style.css'
import Routes from './routers'
import Search from './components/Search/search'




const App = () => (
  <div className="App">
      <Header/>
      <Search/>
      <Routes/>
    </div>
)



export default App;

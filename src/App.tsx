import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './component/TopNav';
import Footer from './component/Footer';
import ListingPage from './pages/UserListing';
import './material-ui.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        <ListingPage />
        <Footer />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './component/TopNav';
import Footer from './component/Footer';
import ListingPage from './pages/UserListing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './material-ui.css';
import AddUser from './pages/AddUser';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        {/* <ListingPage /> */}
        <AddUser />
        <Footer />
      </header>
    </div>
  );
}

export default App;

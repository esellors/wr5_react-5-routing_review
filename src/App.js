import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
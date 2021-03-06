import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import routes from './routes';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        { routes }
      </main>
      <Footer />
    </div>
  );
}
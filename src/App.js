import React from 'react';
import './sass/style.scss';
import Landing from './components/landing'
import Technologies from './components/technologies'
import Services from './components/services'

function App() {
  return (
    <div>
      <Landing />
      <Technologies />
      <Services />
    </div>
  );
}

export default App;

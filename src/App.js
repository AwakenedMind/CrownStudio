import React from 'react';
import './sass/style.scss';
import Landing from './components/landing'
import Technologies from './components/technologies'
import Services from './components/services'
import Form from './components/form'
import Footer from '../src/components/footer'

const App = () => {
  return (
    <div>
      <Landing />
      <Technologies />
      <Services />
      <Form />
      <Footer/>
    </div>
  )
}

export default App;

import React from 'react';
import './sass/style.scss';
import Landing from './components/landing'
import Technologies from './components/technologies'
import Services from './components/services'
import Study from './components/casestudy'
import Form from './components/form'
import Footer from '../src/components/footer'

const App = () => {
  return (
    <div>
      <Landing />
      <Technologies />
      <Services />
      <Study />
      <Form />
      <Footer/>
    </div>
  )
}

export default App;

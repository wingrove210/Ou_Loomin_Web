import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SecondSection />
    <ThirdSection/>
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />
  </React.StrictMode>
);
reportWebVitals();

import React from 'react';
import logo from './logo.svg';
import InfoCard from './components/InfoCard';
import ActiveContacts from './components/ActiveContacts';
import SocialMedia from './components/SocialMedia';
import './App.css';

import Man1 from './assets/profile-man-1.jpg';
import Man2 from './assets/profile-man-2.jpg';
import Woman1 from './assets/profile-woman-1.jpg';
import Woman2 from './assets/profile-woman-2.jpg';

const socialMediaItems = [
  {
    logo: Man1,
    number: 400,
    text: "Twitter followers",
  },
  {
    logo: Man1,
    number: 1000,
    text: "Facebook followers",
  },
  {
    logo: Man1,
    number: 90,
    text: "Instagram followers",
  },
  {
    logo: Man1,
    number: 350,
    text: "LinkedIn followers",
  },
];

const contactsList = [
  {
   name: "Jezebel",
   image: Woman1,
   eventsCount: 20,
  },
  {
   name: "Samantha",
   image: Woman2,
   eventsCount: 60,
  },
  {
   name: "Greg",
   image: Man1,
   eventsCount: 10,
  },
  {
   name: "Bob",
   image: Man2,
   eventsCount: 66,
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <InfoCard title="New Events" mainNumber="4" additional="+1 from last week" />
          <InfoCard title="Upcoming Events" mainNumber="2" additional="2 created by you" />
          <InfoCard title="Pending Tasks" mainNumber="7" additional="3 in this week" />
        </div>
        <ActiveContacts contactsList={contactsList} />
        <SocialMedia socialMediaItems={socialMediaItems} />
      </header>
    </div>
  );
}

export default App;

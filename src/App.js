import React from 'react';
import logo from './logo.svg';
import InfoCard from './components/InfoCard';
import ActiveContacts from './components/ActiveContacts';
import SocialMedia from './components/SocialMedia';
import ExpendableBlock from './components/ExpendableBlock';
import LeftMenu from './components/LeftMenu';
import Chart from './components/Chart';
import Row from './components/Row';
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
      <LeftMenu>
      <ExpendableBlock title="Meetings">
        <ul>
          <li><a href="#">Create new</a></li>
          <li><a href="#">Upcoming</a></li>
          <li><a href="#">View Calendar</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </ExpendableBlock>
      <ExpendableBlock title="Meetings">
        <ul>
          <li><a href="#">Create new</a></li>
          <li><a href="#">Upcoming</a></li>
          <li><a href="#">View Calendar</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </ExpendableBlock>
      <ExpendableBlock title="Meetings">
        <ul>
          <li><a href="#">Create new</a></li>
          <li><a href="#">Upcoming</a></li>
          <li><a href="#">View Calendar</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </ExpendableBlock>
      <ExpendableBlock title="Meetings">
        <ul>
          <li><a href="#">Create new</a></li>
          <li><a href="#">Upcoming</a></li>
          <li><a href="#">View Calendar</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </ExpendableBlock>
      </LeftMenu>
        <Row>
          <InfoCard title="New Events" mainNumber="4" additional="+1 from last week" />
          <InfoCard title="Upcoming Events" mainNumber="2" additional="2 created by you" />
          <InfoCard title="Pending Tasks" mainNumber="7" additional="3 in this week" />
        </Row>
        <Row>
          <ActiveContacts contactsList={contactsList} />
          <Chart />
        </Row>
        <SocialMedia socialMediaItems={socialMediaItems} />
    </div>
  );
}

export default App;

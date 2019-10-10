import React, { useState } from 'react';
import NewMemberForm from './components/NewMemberForm.js';
import TeamMember from './components/TeamMember.js';
import './App.css';

// import { Route } from 'react-router-dom';

function App() {

  const [members, setMember] = useState ([
    {
      id: Date.now(),
      name: "Chris Lien",
      email: "cnlien@gmail.com",
      role: "Front End Developer"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...members, newMember]);
  };

  return (
    <div className="App">
      <NewMemberForm addMemberFn={addMember} />
      <hr/>
      <h3>Meet The Team</h3>
      <TeamMember memberList={members} />
    </div>
  );
}

export default App;

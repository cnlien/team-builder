import React, { useState } from 'react';
import { Card, Button, Form , FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



const NewMemberForm = props => {

  const [member, setMember] = useState({name: "", email: "", role: ""});

  const handleChange = e => {
    setMember({...member, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addMemberFn(member);
    setMember({name: "", email: "", role: ""});
  };


  return (

    <Card className="newTeamMember">
        <h1>New Team Member</h1>
        <hr/>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              id="name"
              value={member.name}
              name="name"
              type="text"
              placeholder="Team Member's Name"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="email"
              value={member.email}
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              id="role"
              name="role"
              type="select"
              value={member.role}
              onChange={handleChange}
            >
              <option>Member Role</option>
              <option>Front End Developer</option>
              <option>UX Designer</option>
              <option>Senior Software Engineer</option>
              <option>Project Lead</option>
            </Input>
          </FormGroup>

          <Button type="submit">Submit</Button>

        </Form>
    </Card>
  )
}

export default NewMemberForm;
import React, { useState } from 'react';
import { Card, Button, Form , FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



const NewTeamMember = () => {

    const [teamMember, setTeamMember] = useState ({ memberName: "", memberEmail: "", memberRole: "" });

    const handleChange = event => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(teamMember.memberName);
        console.log(teamMember.memberEmail);
        console.log(teamMember.memberRole);
        setTeamMember({ memberName: "", memberEmail: "", memberRole: "" })
    }

    return(
        <Card className="newTeamMember">
            {console.log(teamMember)}
            <h1>New Team Member</h1>
            <hr/>
            <Form onSubmit={event=>handleSubmit(event)}>
                <FormGroup>
                    <Label for="memberName">Member Name</Label>
                    <Input
                        type="text"
                        name="memberName"
                        value={teamMember.memberName}
                        onChange={event=>handleChange(event)}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="emailAddress">Email Address</Label>
                    <Input
                        type="email"
                        name="memberEmail"
                        value={teamMember.memberEmail}
                        onChange={event=>handleChange(event)}
                        placeholder="name@example.com"
                    />
                </FormGroup>

                <FormGroup>
                   <Label>Member Role</Label> 
                   <Input
                        type="select"
                        name="memberRole"
                        value={teamMember.memberRole}
                        onChange={event=>handleChange(event)}
                    >
                            <option></option>
                            <option>Front End Developer</option>
                            <option>UX Designer</option>
                            <option>Senior Software Engineer</option>
                            <option>Project Lead</option>
                   </Input>
                </FormGroup>

                <Button>Submit</Button>
            </Form>
        </Card>
    )
}

export default NewTeamMember;
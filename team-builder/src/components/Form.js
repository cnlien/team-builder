import React from 'react';
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



const NewTeamMember = () => {
    return(
        <Card className="newTeamMember">
            <h1>New Team Member</h1>
            <hr/>
            <Form>
                <FormGroup>
                    <Label for="memberName">Member Name</Label>
                    <Input type="text" name="memberName" id="memberName"></Input>
                </FormGroup>

                <FormGroup>
                    <Label for="emailAddress">Email Address</Label>
                    <Input type="email" name="email" id="emailAddress" placeholder="name@example.com"/>
                </FormGroup>

                <FormGroup>
                   <Label>Member Role</Label> 
                   <Input type="select" name="role" id="memberRole">
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
import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const TeamMember = props => {
  
  console.log(props);

  return (
    <div className="team-members">
      {props.memberList.map(member => {
        return (
          <Card className="team-member" key={member.id}>
          <CardTitle className="member-name">{member.name}</CardTitle>
          <CardBody>
            <CardText className="member-email"><strong>Email Address:</strong> {member.email}</CardText>
            <CardText className="member-role"><strong>Role:</strong> {member.role}</CardText>
            <CardText>
              <small className="text-muted">Card Created: {member.id}</small>
            </CardText>
          </CardBody>
        </Card>
        );
      })}
    </div>
  );
};

export default TeamMember;
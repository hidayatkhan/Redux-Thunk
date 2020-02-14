import React, { Component } from "react";
import {Card,ListGroup, ListGroupItem} from 'react-bootstrap'

const onhandleclk=()=>{

}
const UserInfo = props => {
  return (
       <div className="user-info">
       <Card style={{ width: '18rem' }}>
     <Card.Body>
     <Card.Title >{props.user.name}</Card.Title>
      <button onClick={onhandleclk} class="btn btn-primary">Click for Details</button>
         <div className="avatar">  
      <Card.Img variant="top" src={props.user.avatar_url} alt="avatar" width="250px" />
      <Card.Text>{props.user.bio}</Card.Text>
      <ListGroup className="list-group-flush">
      <ListGroupItem>{props.user.location}</ListGroupItem>
      <ListGroupItem>{props.user.followers}</ListGroupItem>
      <ListGroupItem>{props.user.following}</ListGroupItem>
   </ListGroup>
   </div>
   </Card.Body>
  </Card>
    </div>
  );
};

export default UserInfo;

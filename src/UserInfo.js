import React, { Component } from "react";
import {Card,ListGroup, ListGroupItem} from 'react-bootstrap'
import ModalExample from "./modal"


class UserInfo extends Component{
  constructor(props){
    super(props)
    this.state={
      openModal: false
    }
  }
  toggleModal = () =>{
    this.setState({openModal: !this.state.openModal});
  }
  
  render(){
    let {props} = this;
    return (
         <div className="user-info">
         <Card style={{ width: '18rem' }}>
       <Card.Body>
       <Card.Title >{props.user.name}</Card.Title>
{/*       <Card.Img variant="top" src={this.props.user.avatar_url} alt="avatar" width="250px" />
 */}
       <ModalExample toggleModal={this.toggleModal} openModal={this.state.openModal} data={props.user}/>
        <div className="avatar">  
    {/**  <Card.Text>{props.user.name}</Card.Text>
          <ListGroup className="list-group-flush">
        <ListGroupItem>{props.user.location}</ListGroupItem>
        <ListGroupItem>{props.user.followers}</ListGroupItem>
        <ListGroupItem>{props.user.following}</ListGroupItem>
</ListGroup> */}
     </div>
    </Card.Body>
    </Card> 
      </div>
    );
  }
};

export default UserInfo;

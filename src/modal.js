import React from "react";
import {Card,ListGroup, ListGroupItem} from 'react-bootstrap'

import { Modal, Button } from "react-bootstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }
  closeModal = () => this.setState({ openModal: false });
  openModal = () => {
    this.setState({ openModal: true });
  };

  render() {
    /*    let saveAndClose = () => {
             api.saveData()
            .then(() => this.setState({ open: false }))
            }
        */
    return (
      <div>
        <Button variant="primary" onClick={this.props.toggleModal}>
          Launch demo modal
        </Button>

        <Modal
          show={this.props.openModal}
          onHide={this.props.toggleModal}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
            <Card.Img variant="top" src={this.props.data.avatar_url} alt="avatar" height="300px" width="110px" />

            </Card>
          <ListGroupItem><strong>Name :</strong> {this.props.data.name}</ListGroupItem>  
           <ListGroupItem><strong>Bio :</strong> {this.props.data.bio}</ListGroupItem>
           <ListGroupItem><strong>Followers :</strong> :{this.props.data.followers}</ListGroupItem>
          <ListGroupItem><strong>Following :</strong>{this.props.data.following}</ListGroupItem>
          <ListGroupItem><strong>Location :</strong>{this.props.data.location}</ListGroupItem>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.toggleModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModalExample;

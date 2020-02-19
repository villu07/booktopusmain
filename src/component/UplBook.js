import React, { Component } from 'react'
import { Form, Button, Table, Container, Col, Row, Card } from 'react-bootstrap'
import axios from 'axios';
//import axios from 'axios';
export class UplBook extends Component {
     state = {
          step: 1,

          // step 1
          file: null,
          pictures: [],
          msg: ''
          // step 2

     }
     nextStep = () => {
          const { step } = this.state;
          this.setState({
               step: step + 1
          });
     }
     prevStep = () => {
          const { step } = this.state;
          this.setState({
               step: step - 1
          });
     }
     handleChange = input => e => {
          this.setState({ [input]: e.target.value });
     }
     fileChange = event => {
          this.setState({
               file: event.target.files[0],
          })
     }
     imageTraceHandler = async () => {

          /**
           * Here we convert our image into text
           */
          try {
               await axios('/book/imageTrace', {
                    file: this.state.file
               })
                    .then(res => {
                         alert('Into the right one');
                         this.setState({
                              msg: res.data.msg
                         })
                         alert(this.state.msg);

                         // this.setState({
                         //      step: step + 1
                         // });

                    })
                    .catch(err => {

                         this.setState({
                              msg: err.response.data.msg
                         })
                         alert(this.state.msg)
                    })
          }
          catch (error) {
               this.setState({
                    msg: error
               })
               alert(this.state.msg);
          }


          this.nextStep();
     }
     showStep = () => {
          const { step, } = this.state;
          if (step === 1)
               return (
                    <div style={{ overflow: 'hidden', backgroundColor: '#e0e0e0', margin: 'auto', width: '30%', marginTop: '20%', padding: '0', borderRadius: '53px' }}>

                         <Form style={{ marginTop: '15%', marginLeft: '15%', marginBottom: '15%', fontFamily: 'Verdana' }}>
                              <Form.Group >
                                   <Form.Label for="exampleFile" style={{ fontSize: '16px' }} >Cover Photo</Form.Label>
                                   <Form.Control type="file" id="file" name="images" accept="image" onChange={this.fileChange} style={{ width: '251px' }} />
                              </Form.Group>
                              <Form.Group className="mt-3 mb-3">
                                   <Button onClick={this.imageTraceHandler}>Next</Button>
                              </Form.Group>
                         </Form>
                    </div>
               );
          if (step === 2)
               return (
                    <Container>
                         <Row>
                              <Col>
                                   <Card text="white" style={{ overflow: 'hidden', backgroundColor: '#e0e0e0', fontFamily: 'Roboto', margin: 'auto', marginTop: '50%', padding: '0', borderRadius: '53px', width: '70%' }}>
                                        <Card.Header style={{ color: '#000000' }}>Suggestions</Card.Header>
                                        <Card.Body>
                                             <Card.Text>
                                                  Some quick example text to build on the card title and make up the bulk
                                                  of the card's content.
                                             </Card.Text>
                                        </Card.Body>
                                   </Card>
                                   <br />

                              </Col>
                              <Col>
                                   <Table style={{ overflow: 'hidden', backgroundColor: '#e0e0e0', margin: 'auto', marginTop: '5%', padding: '0', borderRadius: '53px' }}>
                                        <tr>
                                             <td>
                                                  <Form style={{ maxWidth: '75%', margin: 'auto', marginTop: '15%', marginBottom: '15%', fontFamily: 'Roboto', fontSize: '16px' }} >
                                                       <Form.Group>
                                                            <Form.Label>Title</Form.Label>
                                                            <Form.Control type="text" name="text" id="Name" placeholder="Title" style={{ borderRadius: '53px', }} />
                                                       </Form.Group>
                                                       <Form.Group>
                                                            <Form.Label >Description</Form.Label>
                                                            <Form.Control type="textarea" name="text" id="Description" placeholder="Description" style={{ borderRadius: '53px', }} />
                                                       </Form.Group>
                                                       <Form.Group>
                                                            <Form.Label for="text">Author Name</Form.Label>
                                                            <Form.Control type="text" name="text" id="Name" placeholder="Author name" style={{ borderRadius: '53px', }} />
                                                       </Form.Group>
                                                       <Form.Group>
                                                            <Form.Label for="text">Branch</Form.Label>
                                                            <Form.Control type="text" name="text" id="Name" placeholder="Branch" style={{ borderRadius: '53px', }} />
                                                       </Form.Group>
                                                       <Form.Group controlId="formGridState">
                                                            <Form.Label>Semester</Form.Label>
                                                            <Form.Control as="select" value="Choose..." style={{ borderRadius: '53px', }}>
                                                                 <option>1</option>
                                                                 <option>2</option>
                                                                 <option>3</option>
                                                                 <option>4</option>
                                                                 <option>5</option>
                                                                 <option>6</option>
                                                                 <option>7</option>
                                                                 <option>8</option>
                                                            </Form.Control>
                                                       </Form.Group>
                                                       <Form.Group controlId="formGridState">
                                                            <Form.Label>Edition</Form.Label>
                                                            <Form.Control as="select" value="Choose..." style={{ borderRadius: '53px', }}>
                                                                 <option>1</option>
                                                                 <option>2</option>
                                                                 <option>3</option>
                                                                 <option>4</option>
                                                                 <option>5</option>
                                                                 <option>6</option>
                                                                 <option>7</option>
                                                                 <option>8</option>
                                                            </Form.Control>
                                                       </Form.Group>
                                                       <Form.Group>
                                                            <Form.Label for="exampleNumber">ISBN Code</Form.Label>
                                                            <Form.Control
                                                                 type="number"
                                                                 name="number"
                                                                 id="exampleNumber"
                                                                 placeholder="ISBN code" style={{ borderRadius: '53px', }} />
                                                       </Form.Group>
                                                       <Button onClick={this.prevStep} style={{ marginRight: '15px' }}>Back</Button>
                                                       {/*
                                                        Ahiya on submit wali method banavani baki che !! Suta pehla banavi deje 
                                                       Ho ne !!
                                                        */}
                                                       <Button onClick={() => alert("New Book uploaded successfully!!")}>Upload Book</Button>
                                                  </Form>
                                             </td>
                                        </tr>
                                   </Table>
                              </Col>
                         </Row>
                    </Container>
               );
     }
     render() {
          return (
               <>
                    {this.showStep()}
               </>
          );
     }
}
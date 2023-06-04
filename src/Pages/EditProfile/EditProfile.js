import React from 'react';
import User from '../../Assets/person/user.jpg';
import ProfileCover from '../../Assets/person/profileCover.jpeg';
import DefaultProfileCover from '../../Assets/person/DefaultProfile.jpg';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import './EditProfile.scss';

export const EditProfile = () => {
  return (
    <div className="editProfile">
      <Navbar />
      <div className="editProfileWrapper">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={ProfileCover}
                alt="company logo"
                className="profileCoverImg"
              />
              <img src={User} alt="user" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Amber Logan</h4>
              <span className="profileInfoDesc">Hi Team!</span>
            </div>
          </div>
          <div className="editProfileRightBottom">
            <div className="editProfileRightBottomTop">
              <span className="editProfileRightBottomTopTitle">
                Edit User Profile
              </span>
            </div>
            <div className="editProfileRightBottomBottom">
              <div className="editProfileRightBottomLeft">
                <img
                  src={DefaultProfileCover}
                  className="editProfileRightBottomLeftImg"
                  alt="default user profile"
                />
                 <Button variant="primary" className='editProfileDeleteAccountButton'>Delete Account</Button>
              </div>
              <div className="editProfileRightBottomForm">
                <Form className="editProfileForm">
                  <Row className="mb-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Image:</Form.Label>
                      <Form.Control type="file" className='editProfileFormInput' />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="email" className='editProfileFormInput' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} sm={12} md={6} controlId="formGridPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        className='editProfileFormInput'
                        placeholder="Enter new password"
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridPosition">
                    <Form.Label>Position:</Form.Label>
                    <Form.Control className='editProfileFormInput' placeholder="Enter position" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridDepartment">
                    <Form.Label>Department:</Form.Label>
                    <Form.Control className='editProfileFormInput' placeholder="Enter department" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridPhone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control className='editProfileFormInput' placeholder="555-555-1234" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control className='editProfileFormInput' placeholder="123 Main St" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control className='editProfileFormInput'/>
                    </Form.Group>

                    <Form.Group as={Col} sm={12} md={6} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select  className='editProfileFormInput' defaultValue="Choose...">
                        <option>choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control className='editProfileFormInput'/>
                    </Form.Group>
                  </Row>

                  <Button variant="primary" type="submit">
                    Update Profile
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile


  
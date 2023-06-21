 // imports the React library and the EditProfile.scss file
import React from 'react';
import './EditProfile.scss';
// imports useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports the useState hook
import { useState } from 'react';
// imports the store
import { store } from '../../App/store';
// imports the getUser selector
import { getUser } from '../../App/Features/User/userSlice';
// imports the update action from the profileSlice
import { update } from '../../App/Features/Profile/profileSlice';
// imports the react bootstrap components
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
// imports the Navbar, Sidebar, and images
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
// imports the States array
import { States } from '../../States';
// imports the WorkOffices array
import { WorkOffice } from '../../WorkOffice';
// imports the images
import ProfileCover from '../../Assets/person/profileCover.jpeg';
import DefaultProfileCover from '../../Assets/person/DefaultProfile.jpg';


// creates the EditProfile page
export const EditProfile = () => {
  // gets the user from the store
  const { formFile, name, userId } = getUser(store.getState());

  // creates a navigate object
  const navigate = useNavigate();

  // creates a form data object and sets the initial state
  const [formGridEmail, setFormGridEmail] = useState("");
  const [formGridPassword, setFormGridPassword] = useState("");
  const [formGridPhone, setFormGridPhone] = useState("");
  const [formGridWorkOffice, setFormGridWorkOffice] = useState("");
  const [formGridPosition, setFormGridPosition] = useState("");
  const [formGridCity, setFormGridCity] = useState("");
  const [formGridState, setFormGridState] = useState("");
  const [formGridZip, setFormGridZip] = useState("");

  // creates a handleSubmit function
  const handleSubmit = (e) => {
    // prevents page from reloading on submit
    e.preventDefault();
    // creates a form data object
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("formGridEmail", formGridEmail);
    formData.append("formFile", formFile);
    formData.append("formGridPassword", formGridPassword);
    formData.append("formGridPhone", formGridPhone);
    formData.append("formGridWorkOffice", formGridWorkOffice);
    formData.append("formGridPosition", formGridPosition);
    formData.append("formGridCity", formGridCity);
    formData.append("formGridState", formGridState);
    formData.append("formGridZip", formGridZip);
    // Send form data to backend
    fetch("/api/user/userId", {
      method: "PUT",
      body: formData,
    })
      // Convert response to JSON
      .then((response) => {
        // Check for errors
        if (response.status === 404 || !response.ok) {
          throw new Error("Unable to update profile!");
        }
        // Return response body as JSON
        return response.json();
      })
      // Update store
      .then((data) => {
        // Update store
        store.dispatch(update(data));
        // navigates user to profile page
        navigate("/profile");
        console.log(data);
      })
      // Catch errors
      .catch((error) => {
        console.error(error);
      });
  };

  // creates a handleDelete function
  const handleDelete = (e) => {
    // prevents page from reloading on submit
    e.preventDefault();
    // creates a form data object
    const formData = new FormData();
    formData.append("userId", userId);
    // Send form data to backend
    fetch("/api/user/userId", {
      method: "DELETE",
      body: formData,
    })
      // Convert response to JSON
      .then((response) => {
        // Check for errors
        if (response.status === 404 || !response.ok) {
          throw new Error("Unable to delete profile!");
        }
        // Return response body as JSON
        return response.json();
      })
      // Update store
      .then((data) => {
        // navigates user to profile page
        navigate("/profile");
        console.log(data);
      })
      // Catch errors
      .catch((error) => {
        console.error(error);
      });
  };


  // returns the EditProfile page
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
              <img src={formFile} alt="user" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{name}</h4>
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
                  src={formFile ? formFile : DefaultProfileCover}
                  className="editProfileRightBottomLeftImg"
                  alt="default user profile"
                />
              </div>
              <div className="editProfileRightBottomForm">
                <Form className="editProfileForm" onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Image:</Form.Label>
                      <Form.Control
                        type="file"
                        className="editProfileFormInput"
                      />
                      <p
                        id="editProfileFileErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Form.Group>
                    <Form.Group as={Col} controlId="email">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        className="editProfileFormInput"
                        placeholder="Enter email"
                        value={formGridEmail}
                        onChange={(e) => setFormGridEmail(e.target.value)}
                      />
                      <p
                        id="editProfilePasswordErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        className="editProfileFormInput"
                        placeholder="Enter new password"
                        onChange={(e) => setFormGridPassword(e.target.value)}
                        value={formGridPassword}
                      />
                      <p
                        id="editProfilePasswordErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md={3}
                      controlId="formGridPhone"
                    >
                      <Form.Label>Phone Number:</Form.Label>
                      <Form.Control
                        className="editProfileFormInput"
                        placeholder="555-555-1234"
                        onChange={(e) => setFormGridPhone(e.target.value)}
                        value={formGridPhone}
                      />
                      <p
                        id="editProfilePhoneErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={3}
                      className="mb-3"
                      controlId="formGridWorkOffice"
                    >
                      <Form.Label>Work Office: </Form.Label>
                      <Form.Select
                        className="editProfileFormInput"
                        onChange={(e) => setFormGridWorkOffice(e.target.value)}
                        value={formGridWorkOffice}
                        defaultValue="Choose..."
                      >
                        <option>Work Office...</option>
                        {WorkOffice.map((office) => (
                          <option key={office.id}>{office.office}</option>
                        ))}
                      </Form.Select>
                      <p
                        id="editProfileAddressErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPosition">
                      <Form.Label>Position:</Form.Label>
                      <Form.Control
                        className="editProfileFormInput"
                        placeholder="Enter Title"
                        onChange={(e) => setFormGridPosition(e.target.value)}
                        value={formGridPosition}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={6}
                      controlId="formGridCity"
                    >
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        className="editProfileFormInput"
                        onChange={(e) => setFormGridCity(e.target.value)}
                        value={formGridCity}
                      />
                      <p
                        id="editProfileCityErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={3}
                      controlId="formGridState"
                    >
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        className="editProfileFormInput"
                        onChange={(e) => setFormGridState(e.target.value)}
                        value={formGridState}
                        defaultValue="Choose..."
                      >
                        <option>select state...</option>
                        {States.map((state) => (
                          <option key={state.id}>{state.abbr}</option>
                        ))}
                      </Form.Select>
                      <p
                        id="editProfileStateErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Form.Group>
                    <Form.Group as={Col} md={3} controlId="formGridZip">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control
                        className="editProfileFormInput"
                        onChange={(e) => setFormGridZip(e.target.value)}
                        value={formGridZip}
                      />
                      <p
                        id="editProfileZipErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Form.Group>
                  </Row>
                  <div className="editProfileButtons">
                    <Button variant="primary" onClick={handleDelete}>
                      Delete Profile
                    </Button>
                    <Button variant="primary" type="submit">
                      Update Account
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;


  
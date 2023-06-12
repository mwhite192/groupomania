// imports the React library and the EditProfile.scss file
import React from 'react';
import './EditProfile.scss';
// imports useNavigate hook
// import { useNavigate } from 'react-router-dom';
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
// imports the images
import User from '../../Assets/person/user.jpg';
import ProfileCover from '../../Assets/person/profileCover.jpeg';
import DefaultProfileCover from '../../Assets/person/DefaultProfile.jpg';


// creates the EditProfile page
export const EditProfile = () => {
  // // creates a navigate object
  // const navigate = useNavigate();

  // creates a form data object
  const formValues = {
    formGridEmail: "",
    formGridPassword: "",
    formGridPosition: "",
    formGridDepartment: "",
    formGridPhone: "",
    formGridAddress: "",
    formGridCity: "",
    formGridState: "",
    formGridZip: "",
  };
  const [formData, setFormData] = React.useState(formValues);

  // creates a handleChange function
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // creates a handleSubmit function
  const handleSubmit = (e) => {
    // prevents page from reloading on submit
    e.preventDefault();
    // // navigates user to profile page
    // navigate("/profile");
    // Send form data to backend
    fetch("/api/profile/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      // Convert response to JSON
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      // Catch errors
      .catch((error) => {
        console.error(error);
      });
  };

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
                <Button
                  variant="primary"
                  className="editProfileDeleteAccountButton"
                >
                  Delete Account
                </Button>
              </div>
              <div className="editProfileRightBottomForm">
                <Form className="editProfileForm" onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Image:</Form.Label>
                      <Form.Control
                        type="file"
                        className="editProfileFormInput"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        className="editProfileFormInput"
                        placeholder="Enter email"
                        onChange={handleChange}
                        value={formData.formGridEmail}
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      sm={12}
                      md={6}
                      controlId="formGridPassword"
                    >
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type="password"
                        className="editProfileFormInput"
                        placeholder="Enter new password"
                        onChange={handleChange}
                        value={formData.formGridPassword}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridPosition">
                    <Form.Label>Position:</Form.Label>
                    <Form.Control
                      className="editProfileFormInput"
                      placeholder="Enter position"
                      onChange={handleChange}
                      value={formData.formGridPosition}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridDepartment">
                    <Form.Label>Department:</Form.Label>
                    <Form.Control
                      className="editProfileFormInput"
                      placeholder="Enter department"
                      onChange={handleChange}
                      value={formData.formGridDepartment}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridPhone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control
                      className="editProfileFormInput"
                      placeholder="555-555-1234"
                      onChange={handleChange}
                      value={formData.formGridPhone}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      className="editProfileFormInput"
                      placeholder="123 Main St"
                      onChange={handleChange}
                      value={formData.formGridAddress}
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control 
                      className="editProfileFormInput" 
                      onChange={handleChange}
                      value={formData.formGridCity}
                      />
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
                        onChange={handleChange}
                        value={formData.formGridState}
                        defaultValue="Choose..."
                      >
                        <option>select state...</option>
                        {States.map((state) => (
                          <option key={state.id}>{state.abbr}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control 
                      className="editProfileFormInput" 
                      onChange={handleChange}
                      value={formData.formGridZip}
                      />
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

export default EditProfile;


  
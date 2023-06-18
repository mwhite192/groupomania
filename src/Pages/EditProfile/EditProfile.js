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
// imports the WorkOffices array
import { WorkOffice } from '../../WorkOffice';
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
    // formGridEmail: "",
    formGridPassword: "",
    formGridConfirmPassword: "",
    formGridPosition: "",
    // formGridDepartment: "",
    formGridPhone: "",
    formGridWorkOffice: "",
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

  // handles form validation
  const validateForm = () => {
    let isValid = true;
    // checks if email is empty
    // if (formData.formGridEmail === "") {
    //   document.getElementById("editProfileEmailErrorMsg").innerHTML =
    //     "Email cannot be empty";
    //   isValid = false;
    // }
    // if (!formData.formGridEmail.match(/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,63})$/)) {
    //   document.getElementById("editProfileEmailErrorMsg").innerHTML =
    //     "Email must be in the correct format";
    //   isValid = false;
    // } else {
    //   document.getElementById("editProfileEmailErrorMsg").innerHTML = "";
    // }
    // checks if password is empty
    if (formData.formGridPassword === "") {
      document.getElementById("editProfilePasswordErrorMsg").innerHTML =
        "Password cannot be empty";
      isValid = false;
    }
    if (formData.formGridPassword.length < 8) {
      document.getElementById("editProfilePasswordErrorMsg").innerHTML =
        "Password must be at least 8 characters";
      isValid = false;
    } 
    if (formData.formGridPassword.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
      document.getElementById("editProfilePasswordErrorMsg").innerHTML =
        "Password cannot contain special characters";
      isValid = false;
    } else {
      document.getElementById("editProfilePasswordErrorMsg").innerHTML = "";
    }
    // checks if confirm password matches password
    if (formData.formGridConfirmPassword !== formData.formGridPassword) {
      document.getElementById("editProfilePasswordErrorMsg").innerHTML =
        "Passwords do not match";
      isValid = false;
    } else {
      document.getElementById("editProfilePasswordErrorMsg").innerHTML = "";
    }
    // // checks if position is empty
    // if (formData.formGridPosition === "") {
    //   document.getElementById("editProfilePositionErrorMsg").innerHTML =
    //     "Position cannot be empty";
    //   isValid = false;
    // } else {
    //   document.getElementById("editProfilePositionErrorMsg").innerHTML = "";
    // }
    // // checks if department is empty
    // if (formData.formGridDepartment === "") {
    //   document.getElementById("editProfileDepartmentErrorMsg").innerHTML =
    //     "Department cannot be empty";
    //   isValid = false;
    // } else {
    //   document.getElementById("editProfileDepartmentErrorMsg").innerHTML = "";
    // }
    // checks if phone number is empty
    if (formData.formGridPhone === "") {
      document.getElementById("editProfilePhoneErrorMsg").innerHTML =
        "Phone number cannot be empty";
      isValid = false;
    }
    if (formData.formGridPhone.length < 10) {
      document.getElementById("editProfilePhoneErrorMsg").innerHTML =
        "Phone number must be at least 10 characters";
      isValid = false;
    }
    if (formData.formGridPhone.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
      document.getElementById("editProfilePhoneErrorMsg").innerHTML =
        "Phone number cannot contain special characters";
      isValid = false;
    } else {
      document.getElementById("editProfilePhoneErrorMsg").innerHTML = "";
    }
    // checks if address is empty
    if (formData.formGridWorkOffice === "") {
      document.getElementById("editProfileAddressErrorMsg").innerHTML =
        "Address cannot be empty";
      isValid = false;
    } else {
      document.getElementById("editProfileAddressErrorMsg").innerHTML = "";
    }
    // checks if city is empty
    if (formData.formGridCity === "") {
      document.getElementById("editProfileCityErrorMsg").innerHTML =
        "City cannot be empty";
      isValid = false;
    } else {
      document.getElementById("editProfileCityErrorMsg").innerHTML = "";
    }
    // checks if state is empty
    if (formData.formGridState === "") {
      document.getElementById("editProfileStateErrorMsg").innerHTML =
        "State cannot be empty";
      isValid = false;
    } else {
      document.getElementById("editProfileStateErrorMsg").innerHTML = "";
    }
    // checks if zip is empty
    if (formData.formGridZip === "") {
      document.getElementById("editProfileZipErrorMsg").innerHTML =
        "Zip cannot be empty";
      isValid = false;
    }
    if (formData.formGridZip.length < 5) {
      document.getElementById("editProfileZipErrorMsg").innerHTML =
        "Zip must be at least 5 characters";
      isValid = false;
    }
    if (formData.formGridZip.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
      document.getElementById("editProfileZipErrorMsg").innerHTML =
        "Zip cannot contain special characters";
      isValid = false;
    } else {
      document.getElementById("editProfileZipErrorMsg").innerHTML = "";
    }
    return isValid;
  };


    // checks if position is empty


  // creates a handleSubmit function
  const handleSubmit = (e) => {
    // prevents page from reloading on submit
    e.preventDefault();
    // checks if form is valid
    if (!validateForm()) {
      return;
    }
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
                    <p
                      id="editProfileFileErrorMsg"
                      className="editProfileErrorMsg"
                    ></p>
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
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={6}
                      controlId="formGridConfirmPassword"
                    >
                      <Form.Label>Confirm Password:</Form.Label>
                      <Form.Control
                        type="password"
                        className="editProfileFormInput"
                        placeholder="Confirm password"
                        onChange={handleChange}
                        value={formData.formGridPassword}
                      />
                    </Form.Group>
                    <p
                      id="editProfilePasswordErrorMsg"
                      className="editProfileErrorMsg"
                    ></p>
                  </Row>

                  <Form.Group
                    className="mb-3"
                    controlId="formGridPosition"
                  ></Form.Group>
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
                      onChange={handleChange}
                      value={formData.formGridPhone}
                    />
                  </Form.Group>
                  <p
                    id="editProfilePhoneErrorMsg"
                    className="editProfileErrorMsg"
                  ></p>
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
                      onChange={handleChange}
                      value={formData.formGridWorkOffice}
                      defaultValue="Choose..."
                    >
                      <option>Work Office...</option>
                      {WorkOffice.map((office) => (
                        <option key={office.id}>{office.office}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                    <p
                      id="editProfileAddressErrorMsg"
                      className="editProfileErrorMsg"
                    ></p>
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={6}
                      controlId="formGridPosition"
                    >
                      <Form.Label>Position:</Form.Label>
                      <Form.Control
                        type="password"
                        className="editProfileFormInput"
                        placeholder="Enter Title"
                        onChange={handleChange}
                        value={formData.formGridPosition}
                      />
                    </Form.Group>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        sm={12}
                        md={3}
                        controlId="formGridCity"
                      >
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          className="editProfileFormInput"
                          onChange={handleChange}
                          value={formData.formGridCity}
                        />
                      </Form.Group>
                      <p
                        id="editProfileCityErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
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
                      <p
                        id="editProfileStateErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                      <Form.Group as={Col} md={3} controlId="formGridZip">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          className="editProfileFormInput"
                          onChange={handleChange}
                          value={formData.formGridZip}
                        />
                      </Form.Group>
                      <p
                        id="editProfileZipErrorMsg"
                        className="editProfileErrorMsg"
                      ></p>
                    </Row>
                  <div className="editProfileButtons">
                    <Button variant="primary" type="submit">
                      Update Profile
                    </Button>
                    <Button variant="primary" type="submit">
                      Delete Account
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


  
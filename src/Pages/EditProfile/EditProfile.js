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
  const { formFile, name, _id  } = getUser(store.getState());

  // creates a navigate object
  const navigate = useNavigate();

  // creates a form data object and sets the initial state
  const [formGridEmail, setFormGridEmail] = useState('');
  const [formGridPassword, setFormGridPassword] = useState('');
  const [formGridPhone, setFormGridPhone] = useState('');
  const [formGridWorkOffice, setFormGridWorkOffice] = useState('');
  const [formGridPosition, setFormGridPosition] = useState('');
  const [formGridCity, setFormGridCity] = useState('');
  const [formGridState, setFormGridState] = useState('');
  const [formGridZip, setFormGridZip] = useState('');

  // handles form validation
  // const validateForm = () => {
  //   let isValid = true;
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
  //   if (formData.formGridPassword === "") {
  //     document.getElementById("editProfilePasswordErrorMsg").innerHTML =
  //       "Password cannot be empty";
  //     isValid = false;
  //   }
  //   if (formData.formGridPassword.length < 8) {
  //     document.getElementById("editProfilePasswordErrorMsg").innerHTML =
  //       "Password must be at least 8 characters";
  //     isValid = false;
  //   }
  //   if (formData.formGridPassword.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
  //     document.getElementById("editProfilePasswordErrorMsg").innerHTML =
  //       "Password cannot contain special characters";
  //     isValid = false;
  //   } else {
  //     document.getElementById("editProfilePasswordErrorMsg").innerHTML = "";
  //   }
  //   // checks if confirm password matches password
  //   if (formData.formGridConfirmPassword !== formData.formGridPassword) {
  //     document.getElementById("editProfilePasswordErrorMsg").innerHTML =
  //       "Passwords do not match";
  //     isValid = false;
  //   } else {
  //     document.getElementById("editProfilePasswordErrorMsg").innerHTML = "";
  //   }
  //   // // checks if position is empty
  //   // if (formData.formGridPosition === "") {
  //   //   document.getElementById("editProfilePositionErrorMsg").innerHTML =
  //   //     "Position cannot be empty";
  //   //   isValid = false;
  //   // } else {
  //   //   document.getElementById("editProfilePositionErrorMsg").innerHTML = "";
  //   // }
  //   // // checks if department is empty
  //   // if (formData.formGridDepartment === "") {
  //   //   document.getElementById("editProfileDepartmentErrorMsg").innerHTML =
  //   //     "Department cannot be empty";
  //   //   isValid = false;
  //   // } else {
  //   //   document.getElementById("editProfileDepartmentErrorMsg").innerHTML = "";
  //   // }
  //   // checks if phone number is empty
  //   if (formData.formGridPhone === "") {
  //     document.getElementById("editProfilePhoneErrorMsg").innerHTML =
  //       "Phone number cannot be empty";
  //     isValid = false;
  //   }
  //   if (formData.formGridPhone.length < 10) {
  //     document.getElementById("editProfilePhoneErrorMsg").innerHTML =
  //       "Phone number must be at least 10 characters";
  //     isValid = false;
  //   }
  //   if (formData.formGridPhone.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
  //     document.getElementById("editProfilePhoneErrorMsg").innerHTML =
  //       "Phone number cannot contain special characters";
  //     isValid = false;
  //   } else {
  //     document.getElementById("editProfilePhoneErrorMsg").innerHTML = "";
  //   }
  //   // checks if address is empty
  //   if (formData.formGridWorkOffice === "") {
  //     document.getElementById("editProfileAddressErrorMsg").innerHTML =
  //       "Address cannot be empty";
  //     isValid = false;
  //   } else {
  //     document.getElementById("editProfileAddressErrorMsg").innerHTML = "";
  //   }
  //   // checks if city is empty
  //   if (formData.formGridCity === "") {
  //     document.getElementById("editProfileCityErrorMsg").innerHTML =
  //       "City cannot be empty";
  //     isValid = false;
  //   } else {
  //     document.getElementById("editProfileCityErrorMsg").innerHTML = "";
  //   }
  //   // checks if state is empty
  //   if (formData.formGridState === "") {
  //     document.getElementById("editProfileStateErrorMsg").innerHTML =
  //       "State cannot be empty";
  //     isValid = false;
  //   } else {
  //     document.getElementById("editProfileStateErrorMsg").innerHTML = "";
  //   }
  //   // checks if zip is empty
  //   if (formData.formGridZip === "") {
  //     document.getElementById("editProfileZipErrorMsg").innerHTML =
  //       "Zip cannot be empty";
  //     isValid = false;
  //   }
  //   if (formData.formGridZip.length < 5) {
  //     document.getElementById("editProfileZipErrorMsg").innerHTML =
  //       "Zip must be at least 5 characters";
  //     isValid = false;
  //   }
  //   if (formData.formGridZip.match(/([A-Za-z0-9]+(_[A-Za-z0-9]+)+)!/)) {
  //     document.getElementById("editProfileZipErrorMsg").innerHTML =
  //       "Zip cannot contain special characters";
  //     isValid = false;
  //   } else {
  //     document.getElementById("editProfileZipErrorMsg").innerHTML = "";
  //   }
  //   return isValid;
  // };

  // checks if position is empty

  // creates a handleSubmit function
  const handleSubmit = (e) => {
    // prevents page from reloading on submit
    e.preventDefault();
  // creates a form data object
  const formData = new FormData();
  formData.append('_id', _id);
  formData.append('formGridEmail', formGridEmail)
  formData.append('formFile', formFile);
  formData.append('formGridPassword', formGridPassword);
  formData.append('formGridPhone', formGridPhone);
  formData.append('formGridWorkOffice', formGridWorkOffice);
  formData.append('formGridPosition', formGridPosition);
  formData.append('formGridCity', formGridCity);
  formData.append('formGridState', formGridState);
  formData.append('formGridZip', formGridZip);

    // checks if form is valid
    // if (!validateForm()) {
    //   return;
    // }
    // Send form data to backend
    fetch("/api/user/_id", {
      method: "PUT",
      body: formData,
    })
      // Convert response to JSON
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // navigates user to profile page
        navigate("/profile");
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
                  src={DefaultProfileCover}
                  className="editProfileRightBottomLeftImg"
                  alt="default user profile"
                />
              </div>
              <div className="editProfileRightBottomForm">
                <Form className="editProfileForm" onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group  controlId="formFile" className="mb-3">
                      <Form.Label>Image:</Form.Label>
                      <Form.Control
                        type="file"
                        className="editProfileFormInput"
                        // onChange={(e) => setFormFile(e.target.files[0])}
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
                    <Button variant="primary" type="submit">
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


  
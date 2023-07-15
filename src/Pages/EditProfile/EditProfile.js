// imports the React library and the EditProfile.scss file
import React from 'react';
import './EditProfile.scss';
// imports the store
import { store } from '../../App/store';
// imports the getUser, deauthenticate, and getAuthenticated actions and selectors
import { getUser, deauthenticate, getAuthenticated } from '../../App/Features/User/userSlice';
// imports the update action and get profile selector from the profileSlice
import { update } from '../../App/Features/Profile/profileSlice';
// imports useNavigate hook
import { useNavigate } from 'react-router-dom';
// imports the useState hook
import { useState, useEffect } from 'react';
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
import ProfileCover from '../../Assets/Person/profileCover.jpeg';
import DefaultProfileCover from '../../Assets/Person/DefaultProfile.jpg';


// creates the EditProfile page
export const EditProfile = () => {
  // creates a navigate variable and sets it to the useNavigate hook
  const navigate = useNavigate();
  // creates an authenticated variable and sets it to the getAuthenticated function
  const authenticated = getAuthenticated(store.getState());


  // checks if the user is authenticated
  useEffect(() => {
    // if the user is not authenticated, navigate to the login page
    if (!authenticated) {
      navigate('/');
      // if the user is authenticated, navigate to the edit profile page
    }
  }, [authenticated]);
  
  
  // gets the user from the store
  const {
    formFile,
    name,
    userId,
    token,
    formGridEmail: email,
  } = getUser(store.getState());


  // sets the initial state of the form data
  const [profileData, setProfileData] = useState({
    userId: userId,
    formFile: formFile,
    formGridPassword: '',
    formGridPhone: '',
    formGridWorkOffice: '',
    formGridPosition: '',
    formGridCity: '',
    formGridState: '',
    formGridZip: '',
  });


  // creates a handleSubmit function
  const handleSubmit = (e) => {
    // prevents default form submission
    e.preventDefault();
    // PUTS form data to backend
    fetch('/api/user/userId', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
         Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(profileData),
    })
      // converts response to JSON
      .then((response) => {
        // checks for errors
        if (response.status === 404 || !response.ok) {
          throw new Error('unable to update profile!');
        }
        // returns response body as JSON
        return response.json();
      })
      // handles JSON response
      .then((data) => {
        // dispatches UPDATE action profile to store
        store.dispatch(update(data));
        // Show alert message
        alert('Account updated successfully!');
        // navigates user to profile page
        navigate('/profile');
      })
      // catches errors
      .catch((error) => {
        console.error(error);
      });
  };


  // creates a handleDelete function
  const handleDelete = (e) => {
    // prevents page from reloading on submit
    e.preventDefault();
    // DELETES form data to backend
    fetch('/api/user/' + email, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      // converts response to JSON
      .then((response) => {
        // checks for errors
        if (response.status === 403 || !response.ok) {
          throw new Error('unable to delete profile!');
        }
        // returns response body as JSON
        return response.json();
      })
      // handles JSON response
      .then((data) => {
        // dispatches DEAUTHENTICATE action to store
        store.dispatch(deauthenticate());
        // deletes user from local storage
        localStorage.removeItem('persist:root');
        // Show alert message
        alert('Account deleted successfully!');
        // navigates user to login page
        navigate('/');
      })
      // catches errors
      .catch((error) => {
        console.error(error);
      });
  };


  // returns the EditProfile page
  return (
    <div className='editProfile'>
      <Navbar />
      <div className='editProfileWrapper'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src={ProfileCover}
                alt='company logo'
                className='profileCoverImg'
              />
              <img src={formFile} alt='user' className='profileUserImg' />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{name}</h4>
              <span className='profileInfoDesc'>Hi Team!</span>
            </div>
          </div>
          <div className='editProfileRightBottom'>
            <div className='editProfileRightBottomTop'>
              <span className='editProfileRightBottomTopTitle'>
                Team Member Profile
              </span>
            </div>
            <div className='editProfileRightBottomBottom'>
              <div className='editProfileRightBottomLeft'>
                <img
                  src={formFile ? formFile : DefaultProfileCover}
                  className='editProfileRightBottomLeftImg'
                  alt='default user profile'
                />
              </div>
              <div className='editProfileRightBottomForm'>
                <Form className='editProfileForm' onSubmit={handleSubmit}>
                  <Row className='mb-3'>
                    <Form.Group controlId='formFile' className='mb-3'>
                      <Form.Label>Image:</Form.Label>
                      <Form.Control
                        type='file'
                        className='editProfileFormInput'
                      />
                      <p
                        id='editProfileFileErrorMsg'
                        className='editProfileErrorMsg'
                      ></p>
                    </Form.Group>
                    <Form.Group as={Col} controlId='email'>
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type='email'
                        className='editProfileFormInput'
                        placeholder='Enter email'
                        value={profileData.formGridEmail}
                        onChange={(e) => setProfileData({ ...profileData, formGridEmail: e.target.value })}
                      />
                      <p
                        id='editProfilePasswordErrorMsg'
                        className='editProfileErrorMsg'
                      ></p>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGridPassword'>
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type='password'
                        className='editProfileFormInput'
                        placeholder='Enter new password'
                        value={profileData.formGridPassword}
                        onChange={(e) => setProfileData({ ...profileData, formGridPassword: e.target.value })}
                      />
                      <p
                        id='editProfilePasswordErrorMsg'
                        className='editProfileErrorMsg'
                      ></p>
                    </Form.Group>
                  </Row>
                  <Row className='mb-3'>
                    <Form.Group
                      className='mb-3'
                      as={Col}
                      md={3}
                      controlId='formGridPhone'
                    >
                      <Form.Label>Phone Number:</Form.Label>
                      <Form.Control
                        className='editProfileFormInput'
                        value={profileData.formGridPhone}
                        onChange={(e) => setProfileData({ ...profileData, formGridPhone: e.target.value })}
                      />
                      <p
                        id='editProfilePhoneErrorMsg'
                        className='editProfileErrorMsg'
                      ></p>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={3}
                      className='mb-3'
                      controlId='formGridWorkOffice'
                    >
                      <Form.Label>Work Office: </Form.Label>
                      <Form.Select
                        className='editProfileFormInput'
                        value={profileData.formGridWorkOffice}
                        onChange={(e) => setProfileData({ ...profileData, formGridWorkOffice: e.target.value })}
                        //defaultValue='Choose...'
                      >
                        <option>select Office...</option>
                        {WorkOffice.map((office) => (
                          <option key={office.id}>{office.office}</option>
                        ))}
                      </Form.Select>
                      <p
                        id='editProfileAddressErrorMsg'
                        className='editProfileErrorMsg'
                      ></p>
                    </Form.Group>
                    <Form.Group as={Col} controlId='formGridPosition'>
                      <Form.Label>Position:</Form.Label>
                      <Form.Control
                        className='editProfileFormInput'
                        placeholder='Enter Title'
                        value={profileData.formGridPosition}
                        onChange={(e) => setProfileData({ ...profileData, formGridPosition: e.target.value})}
                      />
                    </Form.Group>
                  </Row>
                  <Row className='mb-3'>
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={6}
                      controlId='formGridCity'
                    >
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        className='editProfileFormInput'
                        value={profileData.formGridCity}
                        onChange={(e) => setProfileData({ ...profileData, formGridCity: e.target.value})}
                      />
                      <p
                        id='editProfileCityErrorMsg'
                        className='editProfileErrorMsg'
                      ></p>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      sm={12}
                      md={3}
                      controlId='formGridState'
                    >
                      <Form.Label>State</Form.Label>
                      <Form.Select
                        className='editProfileFormInput'
                        value={profileData.formGridState}
                        onChange={(e) => setProfileData({ ...profileData, formGridState: e.target.value})}
                        //defaultValue='Choose...'
                      >
                        <option>select state...</option>
                        {States.map((state) => (
                          <option key={state.id}>{state.name}</option>
                        ))}
                      </Form.Select>
                      <p
                        id='editProfileStateErrorMsg'
                        className='editProfileErrorMsg'
                      ></p>
                    </Form.Group>
                    <Form.Group as={Col} md={3} controlId='formGridZip'>
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control
                        className='editProfileFormInput'
                        value={profileData.formGridZip}
                        onChange={(e) => setProfileData({...profileData, formGridZip: e.target.value})}
                      />
                      <p
                        id='editProfileZipErrorMsg'
                        className='editProfileErrorMsg'
                      ></p>
                    </Form.Group>
                  </Row>
                  <div className='editProfileButtons'>
                    <Button variant='primary' onClick={handleDelete}>
                      Delete Account
                    </Button>
                    <Button variant='primary' type='submit'>
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


  
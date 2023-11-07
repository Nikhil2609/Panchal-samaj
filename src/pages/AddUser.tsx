// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import { gamList, talukaList } from "./nativePlaceList";
import { client } from "../api/axios";

// import Buffer from "buffer";

interface UserDetail {
    firstName: string;
    fatherName: string;
    gender: string;
    dob: string;
    birthPlace: string;
    educationQualification: string;
    businessOrJob: string;
    maritalStatus: string;
    talukaId: string;
    gamId: string;
    hobby: string;

    fathersFullName: string;
    fatherBusinessOrJob: string;
    fathersMobileNo: string;
    motherName: string;
    motherTalukaId: string;
    motherGamId: string;

    Address: string;
    City: string;
    profilePhoto: string;
    photo2: string;
    photo3: string;
}

const AddUser = () => {

    const [displayProfilePhoto1, setProfilePhoto] = React.useState("");
    const [displayPhoto2, setPhoto2] = React.useState("");
    const [displayPhoto3, setPhoto3] = React.useState("");

    // user modal
    const userModalInitialValue = {
        // personal details
        fisrtName: '',
        fatherName: '',
        gender: '',
        dob: '',
        birthPlace: '',
        educationQualification: '',
        businessOrJob: '',
        maritalStatus: '',
        talukaId: '',
        gamId: '',
        hobby: '',

        // family details
        fathersFullName: '',
        fatherBusinessOrJob: '',
        fathersMobileNo: '',
        motherName: '',
        motherTalukaId: '',
        motherGamId: '',

        // family details
        Address: '',
        City: '',

        profilePhoto: undefined,
        photo2: undefined,
        photo3: undefined
    }

    const menuProps = {
        style: { maxHeight: "300px" },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };

    // Define the validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    });

    // Handle form submission
    // const handleSubmit = (values, { resetForm }) => {
    //     // Your form submission logic goes here
    //     console.log("value", values);
    //     // resetForm();
    // };

    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    // image display 1
    const displayProfilePhoto = async (fileData) => {
        console.log("display image")
        let base64String = await toBase64(fileData);
        console.log("base64String", base64String);
        setProfilePhoto(base64String)
    }

    // image display 2
    const displayProfilePhoto2 = async (fileData) => {
        console.log("display image")
        let base64String = await toBase64(fileData);
        console.log("base64String", base64String);
        setPhoto2(base64String)
    }

    // image display 3
    const displayProfilePhoto3 = async (fileData) => {
        console.log("display image")
        let base64String = await toBase64(fileData);
        console.log("base64String", base64String);
        setPhoto3(base64String)
    }

    // api calling
    const addUserProfileDetail = async (values: UserDetail) => {
        console.log("user form", values);

        // const imageBase64String = displayProfilePhoto1;

        const httpBody = {
            firstName: values.firstName,
            fatherName: values.fatherName,
            gender: values.gender,
            dob: values.dob,
            birthPlace: values.birthPlace,
            educationQualification: values.educationQualification,
            businessOrJob: values.businessOrJob,
            maritalStatus: values.maritalStatus,
            talukaId: values.talukaId,
            gamId: values.gamId,
            hobby: values.hobby,
            fathersFullName: values.fathersFullName,
            fatherBusinessOrJob: values.fatherBusinessOrJob,
            fathersMobileNo: values.fathersMobileNo,
            motherName: values.motherName,
            motherTalukaId: values.motherTalukaId,
            motherGamId: values.motherGamId,
            Address: values.Address,
            City: values.City,
            profilePhoto: displayProfilePhoto1,
            photo2: displayPhoto2,
            photo3: displayPhoto3
        }

        const response = await client.post('updateuser', httpBody);
        console.log("api response result===>>>", response);
    }


    const getUserProfileDetail = async (values) => {
        const response = await client.get('getuser');

        console.log("result===>>>", response?.data);
        const users: IUserResponse[] = response.data;
        // setProfilePhoto(response.data.profile_photo_1);
    }

    getUserProfileDetail();
    return (
        <Grid className="registration_container">
            <Formik
                initialValues={userModalInitialValue}
                // validationSchema={validationSchema}
                onSubmit={(values) => addUserProfileDetail(values)}
            >
                {({ values, setFieldValue, handleChange, handleSubmit }) => {
                    let gamData = gamList;
                    gamData = gamData.filter((gam) => gam.taluka_id === values.talukaId)

                    let motherGamData = gamList;
                    motherGamData = motherGamData.filter((gam) => gam.taluka_id === values.motherTalukaId)
                    return (
                        <>
                            <form onSubmit={handleSubmit}>

                                {/* Personal Details */}
                                <fieldset id="input1-wrappers">
                                    <legend >Personal Information</legend>

                                    <br></br>
                                    <Grid container xs={12} spacing={2}>
                                        {/* First name */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">First Name</InputLabel>
                                            <TextField
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                variant="outlined"
                                                fullWidth
                                                value={values.firstName}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="firstName" component="div" className="error" />
                                        </Grid>

                                        {/* Last name */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Father's Name</InputLabel>
                                            <TextField
                                                type="text"
                                                name="fatherName"
                                                placeholder="Last Name"
                                                variant="outlined"
                                                fullWidth
                                                value={values.fatherName}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="fatherName" component="div" className="error" />
                                        </Grid>

                                        {/* Gender */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Gender</InputLabel>
                                            <Select
                                                name="gender"
                                                variant="outlined"
                                                fullWidth
                                                value={values.gender}
                                                onChange={handleChange}
                                                MenuProps={menuProps}
                                                displayEmpty
                                            >
                                                <MenuItem value="male">Male</MenuItem>
                                                <MenuItem value="female">Female</MenuItem>
                                            </Select>
                                            <ErrorMessage name="gender" component="div" className="error" />
                                        </Grid>

                                        {/* DOB */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Date Of Birth</InputLabel>
                                            <TextField
                                                type="date"
                                                name="dob"
                                                placeholder="DOB"
                                                variant="outlined"
                                                fullWidth
                                                value={values.dob}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="dob" component="div" className="error" />
                                        </Grid>

                                        {/* Birth Place name */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Birth Place</InputLabel>
                                            <TextField
                                                type="text"
                                                name="birthPlace"
                                                placeholder="Ahmedabad/Vadodara/Palanpur/Deesa..."
                                                variant="outlined"
                                                fullWidth
                                                value={values.birthPlace}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="birthPlace" component="div" className="error" />
                                        </Grid>

                                        {/* Education Qualification */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Education Qualification</InputLabel>
                                            <TextField
                                                type="text"
                                                name="educationQualification"
                                                placeholder="10, 12, B.C.A, B.Com, B.E, M.B.B.S"
                                                variant="outlined"
                                                fullWidth
                                                value={values.educationQualification}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="educationQualification" component="div" className="error" />
                                        </Grid>

                                        {/* Business/Job */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Business/Job</InputLabel>
                                            <Select
                                                name="businessOrJob"
                                                variant="outlined"
                                                fullWidth
                                                value={values.businessOrJob}
                                                onChange={handleChange}
                                                MenuProps={menuProps}
                                                displayEmpty
                                            >
                                                <MenuItem value="business">Business</MenuItem>
                                                <MenuItem value="job">Job</MenuItem>
                                            </Select>
                                            <ErrorMessage name="businessOrJob" component="div" className="error" />
                                        </Grid>

                                        {/* Marital Status */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Marital Status</InputLabel>
                                            <Select
                                                name="maritalStatus"
                                                variant="outlined"
                                                fullWidth
                                                value={values.maritalStatus}
                                                onChange={handleChange}
                                                MenuProps={menuProps}
                                                displayEmpty
                                            >
                                                <MenuItem value="unmarried">Unmarried</MenuItem>
                                                <MenuItem value="married">Married</MenuItem>
                                                <MenuItem value="divorcee">Divorcee</MenuItem>
                                            </Select>
                                            <ErrorMessage name="maritalStatus" component="div" className="error" />
                                        </Grid>

                                        {/* તાલુકો */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">તાલુકો</InputLabel>
                                            <Select
                                                name="talukaId"
                                                variant="outlined"
                                                fullWidth
                                                value={values.talukaId}
                                                onChange={handleChange}
                                                MenuProps={menuProps}
                                                displayEmpty
                                            >
                                                {
                                                    talukaList && talukaList.length ?
                                                        talukaList.map(taluka => {
                                                            return (
                                                                <MenuItem value={taluka.id}>{taluka.name}</MenuItem >
                                                            )
                                                        })
                                                        :
                                                        <MenuItem value="" disabled>No taluka found</MenuItem>

                                                }
                                            </Select>
                                            <ErrorMessage name="talukaId" component="div" className="error" />
                                        </Grid>

                                        {/* ગામ */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">ગામ</InputLabel>
                                            <Select
                                                name="gamId"
                                                variant="outlined"
                                                fullWidth
                                                value={values.gamId}
                                                onChange={handleChange}
                                                MenuProps={menuProps}
                                                displayEmpty
                                            >
                                                {
                                                    gamData && gamData.length ?
                                                        gamData.map(gam => {
                                                            return (
                                                                <MenuItem value={gam.id}>{gam.name}</MenuItem>
                                                            )
                                                        })
                                                        :
                                                        // <MenuItem value="" disabled>No gam found</MenuItem>
                                                        <></>

                                                }
                                            </Select>
                                            {/* </FormControl> */}
                                            <ErrorMessage name="gamId" component="div" className="error" />
                                        </Grid>

                                        {/* Hobby */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Hobby</InputLabel>
                                            <TextField
                                                type="text"
                                                name="hobby"
                                                placeholder="Reading,Travelling,Cricket"
                                                variant="outlined"
                                                fullWidth
                                                value={values.hobby}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="hobby" component="div" className="error" />
                                        </Grid>
                                    </Grid>
                                </fieldset>

                                <br></br>
                                <br></br>


                                {/* Family Details */}
                                <fieldset id="input2-wrapper">
                                    <legend >Family Details</legend>

                                    <br></br>
                                    <Grid container xs={12} spacing={2}>
                                        {/* Father's Full name */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Father's Full Name</InputLabel>
                                            <TextField
                                                type="text"
                                                name="fathersFullName"
                                                placeholder="Rameshbhai Dayabhai"
                                                variant="outlined"
                                                fullWidth
                                                value={values.fathersFullName}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="fathersFullName" component="div" className="error" />
                                        </Grid>

                                        {/* Father's Business/Job */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Father's Business/Job</InputLabel>
                                            <Select
                                                name="fatherBusinessOrJob"
                                                variant="outlined"
                                                fullWidth
                                                value={values.fatherBusinessOrJob}
                                                onChange={handleChange}
                                                MenuProps={menuProps}
                                                displayEmpty
                                            >
                                                <MenuItem value="business">Business</MenuItem>
                                                <MenuItem value="job">Job</MenuItem>
                                            </Select>
                                            <ErrorMessage name="fatherBusinessOrJob" component="div" className="error" />
                                        </Grid>

                                        {/* Father's Mobile No */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Father's Mobile No</InputLabel>
                                            <TextField
                                                type="text"
                                                name="fathersMobileNo"
                                                placeholder="9988776655"
                                                variant="outlined"
                                                fullWidth
                                                value={values.fathersMobileNo}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="fathersMobileNo" component="div" className="error" />
                                        </Grid>

                                        {/* Mother's name */}
                                        <Grid item md={3} xs={12}>
                                            <InputLabel className="form_label">Mother's Name</InputLabel>
                                            <TextField
                                                type="text"
                                                name="motherName"
                                                placeholder="Shantaben"
                                                variant="outlined"
                                                fullWidth
                                                value={values.motherName}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="motherName" component="div" className="error" />
                                        </Grid>

                                        <br></br>

                                        {/* <fieldset id="input3-wrapper"> */}
                                        <legend >મમ્મી પિયર details</legend>
                                        <br></br>

                                        <Grid container xs={12} spacing={2}>
                                            {/* મમ્મી પિયર તાલુકો */}
                                            <Grid item md={3} xs={12}>
                                                <InputLabel className="form_label"> તાલુકો</InputLabel>
                                                <Select
                                                    name="motherTalukaId"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={values.motherTalukaId}
                                                    onChange={handleChange}
                                                    MenuProps={menuProps}
                                                    displayEmpty
                                                >
                                                    {
                                                        talukaList && talukaList.length ?
                                                            talukaList.map(taluka => {
                                                                return (
                                                                    <MenuItem value={taluka.id}>{taluka.name}</MenuItem >
                                                                )
                                                            })
                                                            :
                                                            <MenuItem value="" disabled>No taluka found</MenuItem>

                                                    }
                                                </Select>
                                                <ErrorMessage name="motherTalukaId" component="div" className="error" />
                                            </Grid>

                                            {/* મમ્મી પિયર ગામ */}
                                            <Grid item md={3} xs={12}>
                                                <InputLabel className="form_label">ગામ</InputLabel>
                                                <Select
                                                    name="motherGamId"
                                                    variant="outlined"
                                                    fullWidth
                                                    value={values.motherGamId}
                                                    onChange={handleChange}
                                                    MenuProps={menuProps}
                                                    displayEmpty
                                                >
                                                    {
                                                        motherGamData && motherGamData.length ?
                                                            motherGamData.map(gam => {
                                                                return (
                                                                    <MenuItem value={gam.id}>{gam.name}</MenuItem>
                                                                )
                                                            })
                                                            :
                                                            // <MenuItem value="" disabled>No gam found</MenuItem>
                                                            <></>

                                                    }
                                                </Select>
                                                <ErrorMessage name="motherGamId" component="div" className="error" />
                                            </Grid>
                                        </Grid>
                                        {/* </fieldset> */}
                                        <br></br>

                                    </Grid>
                                </fieldset >

                                <br></br>


                                {/* Contact Details */}
                                <fieldset fieldset fieldset id="input4-wrapper" >
                                    <legend >Contact Details</legend>

                                    <br></br>

                                    <Grid container xs={12} spacing={2}>
                                        <Grid item md={6} xs={12}>
                                            <InputLabel className="form_label">Address</InputLabel>
                                            <TextField
                                                type="text"
                                                name="Address"
                                                placeholder="Address"
                                                variant="outlined"
                                                fullWidth
                                                value={values.Address}
                                                onChange={handleChange}
                                            />
                                            <ErrorMessage name="Address" component="div" className="error" />
                                        </Grid>

                                        <Grid item md={6} xs={12}>
                                            <InputLabel className="form_label">City <span> &nbsp; (current city you are lived in)</span></InputLabel>
                                            <Select
                                                name="City"
                                                variant="outlined"
                                                fullWidth
                                                value={values.City}
                                                onChange={handleChange}
                                                MenuProps={menuProps}
                                                displayEmpty
                                            >
                                                <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                                                <MenuItem value="Siddhpur">Siddhpur</MenuItem>
                                                <MenuItem value="Palanpur">Palanpur</MenuItem>
                                                <MenuItem value="Deesa">Deesa</MenuItem>
                                                <MenuItem value="Vadodara">Vadodara</MenuItem>
                                                <MenuItem value="Surat">Surat</MenuItem>
                                                <MenuItem value="Mumbai">Mumbai</MenuItem>
                                            </Select>
                                            <ErrorMessage name="City" component="div" className="error" />
                                        </Grid>

                                        <Grid item md={4} xs={12}>
                                            <InputLabel className="form_label">Profile Photo</InputLabel>
                                            <TextField
                                                type="file"
                                                name="profilePhoto"
                                                placeholder="profilePhoto"
                                                variant="outlined"
                                                fullWidth
                                                // value={values.profilePhoto}
                                                value={undefined}

                                                // onChange={handleChange}
                                                onChange={(event) => {
                                                    displayProfilePhoto(event.target.files[0]);
                                                    setFieldValue('profilePhoto', event.target.files[0]);
                                                }}
                                            />
                                            <ErrorMessage name="motherName" component="div" className="error" />
                                        </Grid>

                                        <Grid item md={4} xs={12}>
                                            <InputLabel className="form_label">Profile Photo 2</InputLabel>
                                            <TextField
                                                type="file"
                                                name="photo2"
                                                placeholder="photo2"
                                                variant="outlined"
                                                fullWidth
                                                // value={values.profilePhoto}
                                                value={undefined}

                                                // onChange={handleChange}
                                                onChange={(event) => {
                                                    displayProfilePhoto2(event.target.files[0]);
                                                    setFieldValue('photo2', event.target.files[0]);
                                                }}
                                            />
                                            <ErrorMessage name="photo2" component="div" className="error" />
                                        </Grid>

                                        <Grid item md={4} xs={12}>
                                            <InputLabel className="form_label">Profile Photo 3</InputLabel>
                                            <TextField
                                                type="file"
                                                name="photo3"
                                                placeholder="photo3"
                                                variant="outlined"
                                                fullWidth
                                                // value={values.photo3}
                                                value={undefined}

                                                // onChange={handleChange}
                                                onChange={(event) => {
                                                    displayProfilePhoto3(event.target.files[0]);
                                                    setFieldValue('photo3', event.target.files[0]);
                                                }}
                                            />
                                            <ErrorMessage name="motherName" component="div" className="error" />
                                        </Grid>


                                        {displayProfilePhoto1 &&
                                            <Grid item md={4} xs={12}>
                                                <img src={`${displayProfilePhoto1}`} alt="" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                                            </Grid>
                                        }
                                        {displayPhoto2 &&
                                            <Grid item md={4} xs={12}>
                                                <img src={`${displayPhoto2}`} alt="" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                                            </Grid>
                                        }
                                        {displayPhoto3 &&
                                            <Grid item md={4} xs={12}>
                                                <img src={`${displayPhoto3}`} alt="" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                                            </Grid>
                                        }
                                    </Grid>
                                </fieldset>

                                <br></br>
                                <Grid container justifyContent="center">
                                    <Button variant="contained" color="primary" type="submit">
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                        </>
                    )
                }
                }
            </Formik >

        </Grid >
    );
};

export default AddUser;
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

const AddUser = () => {

    // user modal
    const userModalInitialValue = {
        name: '',
        email: '',
        occupation: '',
        address: '',
        gender: '',
        mobile: '',
        DOB: '',
        hobby: '',
        descriptionOfJob: '',
        fatherName: '',
        fatherOccupation: '',
        fatherBuissnessAddress: '',
        motherName: '',
    }

    // Define the validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    });

    // Handle form submission
    const handleSubmit = (values, { resetForm }) => {
        // Your form submission logic goes here
        console.log(values);
        resetForm();
    };

    return (
        <Grid className="registration_container">
            <Formik
                initialValues={userModalInitialValue}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                    <form>
                        <Grid container spacing={2}>
                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">Name</InputLabel>
                                <TextField
                                    type="text"
                                    name="name"
                                    InputLabelProps={{ shrink: true }}
                                    // label="UserName"
                                    placeholder="Name"
                                    variant="outlined"
                                    fullWidth
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="name" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">Email</InputLabel>
                                <TextField
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    variant="outlined"
                                    fullWidth
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="email" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">Occupation</InputLabel>
                                <TextField
                                    type="text"
                                    name="occupation"
                                    placeholder="occupation"
                                    variant="outlined"
                                    fullWidth
                                    value={values.occupation}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="occupation" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">Address</InputLabel>
                                <TextField
                                    type="text"
                                    name="address"
                                    placeholder="address"
                                    variant="outlined"
                                    fullWidth
                                    value={values.address}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="address" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                {/* <FormControl variant="outlined" fullWidth> */}
                                <InputLabel className="form_label">Gender</InputLabel>
                                <Select
                                    name="gender"
                                    // placeholder="gender"
                                    variant="outlined"
                                    fullWidth
                                    value={values.gender}
                                    onChange={handleChange}
                                    InputLabelProps={{ shrink: true }}
                                >
                                    <MenuItem value="">Select Role</MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                </Select>
                                {/* </FormControl> */}
                                <ErrorMessage name="role" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">Mobile</InputLabel>
                                <TextField
                                    type="text"
                                    name="mobile"
                                    placeholder="mobile"
                                    variant="outlined"
                                    fullWidth
                                    value={values.mobile}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="mobile" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">Date Of Birth</InputLabel>
                                <TextField
                                    type="text"
                                    name="DOB"
                                    placeholder="DOB"
                                    variant="outlined"
                                    fullWidth
                                    value={values.DOB}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="DOB" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">Hobby</InputLabel>
                                <TextField
                                    type="text"
                                    name="hobby"
                                    placeholder="hobby"
                                    variant="outlined"
                                    fullWidth
                                    value={values.hobby}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="hobby" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">Address</InputLabel>
                                <TextField
                                    type="text"
                                    name="address"
                                    placeholder="address"
                                    variant="outlined"
                                    fullWidth
                                    value={values.address}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="address" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">DescriptionOfJob</InputLabel>
                                <TextField
                                    type="text"
                                    name="descriptionOfJob"
                                    placeholder="descriptionOfJob"
                                    variant="outlined"
                                    fullWidth
                                    value={values.descriptionOfJob}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="descriptionOfJob" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">FatherName</InputLabel>
                                <TextField
                                    type="text"
                                    name="fatherName"
                                    placeholder="fatherName"
                                    variant="outlined"
                                    fullWidth
                                    value={values.fatherName}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="fatherName" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">FatherOccupation</InputLabel>
                                <TextField
                                    type="text"
                                    name="fatherOccupation"
                                    placeholder="fatherOccupation"
                                    variant="outlined"
                                    fullWidth
                                    value={values.fatherOccupation}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="fatherOccupation" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">FatherBuissnessAddress</InputLabel>
                                <TextField
                                    type="text"
                                    name="fatherBuissnessAddress"
                                    placeholder="fatherBuissnessAddress"
                                    variant="outlined"
                                    fullWidth
                                    value={values.fatherBuissnessAddress}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="fatherBuissnessAddress" component="div" className="error" />
                            </Grid>

                            <Grid item md={3} xs={12}>
                                <InputLabel className="form_label">MotherName</InputLabel>
                                <TextField
                                    type="text"
                                    name="motherName"
                                    placeholder="motherName"
                                    variant="outlined"
                                    fullWidth
                                    value={values.motherName}
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="motherName" component="div" className="error" />
                            </Grid>

                            <Grid container justifyContent="center" xs={12}>
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>

                    </form>
                )}
            </Formik>
        </Grid>
    );
};

export default AddUser;
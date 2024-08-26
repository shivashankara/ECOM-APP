"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { GetCountries, GetState, GetCity } from "react-country-state-city";

type Country = {
  id: number;
  name: string;
};

type State = {
  id: number;
  name: string;
};

const CheckOutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address1: "",
    streetName: "",
    mobileNumber: "",
    zipCode: "",
    country: "",
    state: "",
    city: "",
  });

  const [countryId, setCountryId] = useState<number | "">("");
  const [stateList, setStateList] = useState<State[]>([]);
  const [cityList, setCityList] = useState<any[]>([]);
  const [countriesList, setCountriesList] = useState<any[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  const retrieveState = async (e: React.ChangeEvent<{ value: unknown }>) => {
    const selectedCountryId = e.target.value as number;
    setCountryId(selectedCountryId);

    try {
      const result = await GetState(selectedCountryId);
      setStateList(result);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await GetCountries();
        setCountriesList(result);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Container maxWidth="lg" disableGutters>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel>Country</InputLabel>
              <Select value={countryId} onChange={retrieveState}>
                {countriesList.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Street Name"
              name="streetName"
              value={formData.streetName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Apartment, Suite, Unit, etc. (Optional)"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              type="number"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth required>
              <InputLabel>State</InputLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                {stateList.map((state) => (
                  <MenuItem key={state.id} value={state.id}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ fontWeight: "600" }}
            >
              Place Order $849
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CheckOutForm;

import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const style = {
  position: "absolute",
  color: "black",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface TransitionsModalProps {
  open: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDoctors: React.Dispatch<React.SetStateAction<any[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const TransitionsModal: React.FC<TransitionsModalProps> = ({
  open,
  setOpenModal,
  setDoctors,
  setLoading
}) => {
  const navigate = useNavigate();
  //const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    physioExperience: "",
    selectedCity: "",
  });

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Extract the city parameter from the URL
    const urlParams = new URLSearchParams(currentUrl.split("?")[1]);
    console.log(urlParams);
    const cityParam = urlParams.get("city");
    console.log(cityParam);

    if (cityParam) {
      // If city parameter exists, set it in the form data
      setFormData({
        ...formData,
        selectedCity: cityParam,
      });
    }
  }, []); // Run only once on component mount

  useEffect(() => {
    async function getDoctors() {
      try {
        setLoading(true);
        console.log("fsafsa");
        const data = await axios.get(
          `https://fixhealth-backend-x4kh.onrender.com/doctors`,
          {
            params: formData,
          }
        );
        console.log(data.data);
        setDoctors(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getDoctors();
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCityChange = (e: React.ChangeEvent<{ value: string }>) => {
    if (formData.selectedCity == "")
      setFormData({
        ...formData,
        selectedCity: e.target.value,
      });
    // Add logic to fetch and update doctors based on the selected city
    // You can make an API call here to get the doctors
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API call
    console.log("Form Submitted:", formData);
    navigate("/doctors");
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Chief complaints"
                name="chiefComplaints"
                value={formData.chiefComplaints}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
              />
              {parseInt(formData.age, 10) > 40 && (
                <FormControl component="fieldset" fullWidth margin="normal">
                  <FormLabel>
                    Any previous experience with physiotherapy
                  </FormLabel>
                  <RadioGroup
                    name="physioExperience"
                    value={formData.physioExperience}
                    onChange={handleInputChange}
                    row
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}

              <FormControl fullWidth margin="normal">
                <InputLabel id="city-label">Select City</InputLabel>
                <Select
                  labelId="city-label"
                  id="city"
                  name="selectedCity"
                  value={formData.selectedCity}
                  onChange={handleCityChange}
                >
                  <MenuItem value="kolkata">kolkata</MenuItem>
                  <MenuItem value="bangalore">bangalore</MenuItem>
                  <MenuItem value="kannur">kannur</MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" variant="contained" color="secondary">
                Book
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;

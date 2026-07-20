import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
  },

  experience: {
    company: "",
    role: "",
    duration: "",
    description: "",
  },

  education: {
    college: "",
    degree: "",
    year: "",
    percentage: "",
  },

  skills: {
    skill1: "",
    skill2: "",
    skill3: "",
  },

  // New field for resume templates
  template: "professional",
};


const resumeSlice = createSlice({
  name: "resume",

  initialState,

  reducers: {

    savePersonal(state, action) {
      state.personal = action.payload;
    },


    saveExperience(state, action) {
      state.experience = action.payload;
    },


    saveEducation(state, action) {
      state.education = action.payload;
    },


    saveSkills(state, action) {
      state.skills = action.payload;
    },


    // Change Resume Template
    changeTemplate(state, action) {
      state.template = action.payload;
    },

  },
});


export const {
  savePersonal,
  saveExperience,
  saveEducation,
  saveSkills,
  changeTemplate,
} = resumeSlice.actions;


export default resumeSlice.reducer;
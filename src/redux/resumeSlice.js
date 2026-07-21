import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    portfolio: "",
    summary: "",
    photo: "",
  },

  education: [],

  experience: [],

  projects: [],

  skills: [],

  certifications: [],

  template: "professional",
};

const resumeSlice = createSlice({
  name: "resume",

  initialState,

  reducers: {
    savePersonal(state, action) {
      state.personal = action.payload;
    },

    saveEducation(state, action) {
      state.education = action.payload;
    },

    saveExperience(state, action) {
      state.experience = action.payload;
    },

    saveProjects(state, action) {
      state.projects = action.payload;
    },

    saveSkills(state, action) {
      state.skills = action.payload;
    },

    saveCertifications(state, action) {
      state.certifications = action.payload;
    },

    changeTemplate(state, action) {
      state.template = action.payload;
    },
  },
});

export const {
  savePersonal,
  saveEducation,
  saveExperience,
  saveProjects,
  saveSkills,
  saveCertifications,
  changeTemplate,
} = resumeSlice.actions;

export default resumeSlice.reducer;
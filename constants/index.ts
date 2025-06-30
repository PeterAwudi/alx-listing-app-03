// constants/index.ts

export const API_URL = 'https://api.example.com';
export const API_KEY = 'YOUR_API_KEY_HERE';

export const APP_NAME = 'Alx Listing App';
export const APP_DESCRIPTION = 'A brief description of the Alx Listing App';

export const UI_TEXT = {
  header: 'Alx Listing App',
  footer: 'Copyright 2023 Alx Listing App',
  button: {
    submit: 'Submit',
    cancel: 'Cancel',
  },
};

export const CONFIG = {
  apiTimeout: 5000, // 5 seconds
  maxItemsPerPage: 10,
};


import PropertyProps from '../interfaces/index';

const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  // Add the provided property data here
];

export default PROPERTYLISTINGSAMPLE;

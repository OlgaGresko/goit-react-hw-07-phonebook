import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://64f795619d7754084953b81c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/contacts`);
      const contacts = await response.json();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };
      const response = await fetch(`${BASE_URL}/contacts`, options);
      const newContact = await response.json();
      return newContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactIdToDelete, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/contacts/${contactIdToDelete}`,
        { method: 'DELETE' }
      );
      const contacts = await response.json();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (editedContact, thunkAPI) => {
    try {
      const { id, ...editedData } = editedContact;
      const options = {
        method: 'PUT',
        body: JSON.stringify(editedData),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };
      const response = await fetch(`${BASE_URL}/contacts/${id}`, options);
      const updatedContact = await response.json();
      return updatedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

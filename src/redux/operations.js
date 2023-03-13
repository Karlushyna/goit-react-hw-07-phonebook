import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://640e84ac4ed25579dc35cb47.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch(e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact', async (contact, thunkAPI) => {
        try {
            console.log('contact:', contact);
            const response = await axios.post('/contacts', contact);
            console.log('odp', response.data);
            return response.data;
        } catch (e) {
            console.log('blad: ', e.message);
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const delContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete (`/contacts/${contactId}`);
            return response.data;
        } catch(e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const toggleCompleted = createAsyncThunk(
    'contacts/toggleCompleted',
    async (contact,thunkAPI) => {
        try {
            const response = await axios.put(`/contacts/${contact.id}`, {
            completed: !contact.completed,
        });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
);
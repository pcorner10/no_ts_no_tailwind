// formSlice.js
import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    primero: { data: {}, isLocked: false },
    segundo: { data: {}, isLocked: false },
    // más formularios aquí
  },
  reducers: {
    updateForm: (state, action) => {
      const { formId, data } = action.payload;
      state[formId].data = data;
    },
    lockForm: (state, action) => {
      state[action.payload].isLocked = true;
    },
    unlockForm: (state, action) => {
      state[action.payload].isLocked = false;
    },
  },
})

export const { updateForm, lockForm, unlockForm } = formSlice.actions

export default formSlice.reducer
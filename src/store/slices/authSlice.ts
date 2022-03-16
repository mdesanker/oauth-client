import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUser = createAsyncThunk(
  "user/load",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/auth/login/success", {
        withCredentials: true,
      });

      if (res.status === 200) {
        console.log(res.data.user);

        return res.data.user;
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
    });
    builder.addCase(loadUser.rejected, (state) => {
      state.user = null;
      state.isAuthenticated = false;
    });
  },
});

// export const {} = authSlice.actions;

export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DateTime } from "luxon";

export const register = createAsyncThunk<any, any>(
  "user/register",
  async (user, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(user);

    try {
      const res = await axios.post("/auth/register", body, config);

      console.log(res.data);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loadUser = createAsyncThunk<IUser>(
  "user/load",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/auth/login/success", {
        withCredentials: true,
      });

      if (res.status === 200) {
        // console.log(res.data.user);
        return res.data.user;
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/auth/logout");
      return;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export interface IUser {
  _id: string;
  googleId?: string;
  username: string;
  email: string;
  avatar?: string;
  date: DateTime;
}

interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
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
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.isAuthenticated = false;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { Octokit } from '@octokit/core';
import axios from 'axios';

const GET_REPOS = 'ABU-THE-PORTFOLIO/src/redux/Projects/getRepos';

const initialState = {
  repos: [],
  status: null,
  error: null,
};

// const octokit = new Octokit({ auth: '' });
// const apiVersion = '2022-11-28';

// const url = 'https://cors-anywhere.herokuapp.com/https://api.github.com/user/repos';
const url = 'http://0.0.0.0:8080/https://api.github.com/user/repos';

const headers = {
  Authorization: 'Bearer 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',
  'x-github-api-version': '2022-11-28',
};

const getReposApi = () => axios.get(url, { headers });

// action creator to get repos
export const getRepos = createAsyncThunk(
  GET_REPOS,
  async () => {
    const response = await getReposApi();
    console.log(response);
    return response.data;
  },
);

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRepos.fulfilled, (_, action) => action.payload);
    builder.addCase(getRepos.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(getRepos.pending, (_, action) => action.payload);
  },
});

export default reposSlice.reducer;

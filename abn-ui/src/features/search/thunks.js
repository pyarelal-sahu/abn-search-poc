import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchCompanies } from "../../services/api";
export const fetchSearch = createAsyncThunk(
  "search/fetch",
  async (params) => await searchCompanies(params)
);

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
    id: number;
    text: string;
    active: boolean;
    done: boolean;
  }
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: "Products",
    initialState: {
        data: null,
        loading: false,
    },
    reducers: {
        setProductsG: (state, actions) => {
            state.data = actions.payload;
            state.loading = false;
        },
        startLoading: (state, actions) => {
            state.loading = actions.payload;
        },
    },
});

export const { setProductsG, startLoading } = productsSlice.actions;

export default productsSlice.reducer;

const defaultUrl = "https://e-commerce-api-v2.academlo.tech/api/v1/products";

export const getProductsThunk =
    (url = defaultUrl) =>
    (dispatch) => {
        dispatch(startLoading(true));
        axios
            .get(url)
            .then((res) => dispatch(setProductsG(res.data)))
            .catch((err) => console.log(err))
            .finally(() => dispatch(startLoading(false)));
    };

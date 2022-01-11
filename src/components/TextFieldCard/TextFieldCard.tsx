import {TextField} from "@mui/material";
import React from "react";
import './customMaterialStyles.css'

export const TextFieldCard = ()=>{
    return (
        <TextField
            id="outlined-multiline-static"
            label="What's news"
            multiline
            rows={4}
            placeholder={'Write here'}
        />
    )
}
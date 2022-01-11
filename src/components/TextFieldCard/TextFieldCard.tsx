import {TextField} from "@mui/material";
import React from "react";
import './customMaterialStyles.css'

interface ITextFieldCard {
    onChange: (value:string)=>void;
}

export const TextFieldCard = (props: ITextFieldCard)=>{
    return (
        <TextField
            onChange={(e)=>props.onChange(e.target.value)}
            id="outlined-multiline-static"
            label="What's news"
            multiline
            rows={4}
            placeholder={'Write here'}
        />
    )
}
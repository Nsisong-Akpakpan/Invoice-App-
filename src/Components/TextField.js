import React from 'react';
import {Box, TextField} from "@mui/material"; 
// FormControl,

function TextFieldComp({width, height, label, size, type, name, required,placeholder, onChange, multiline}){
    return(
        <Box >
            {/* width="fullWidth" */}
            {/* <FormControl fullWidth sx={{height:"100%"}}> */}
                <TextField
                 size={size}
                 label={label}
                 type={type}
                 name={name}
                 required={required} 
                 placeholder={placeholder}
                 onChange={onChange}
                 variant="outlined"
                 multiline={multiline}
                sx={{
                    width:{width},
                    height:{height},
                    textAlign:"center",
                }}
               
                />
            {/* </FormControl> */}
        </Box>
    );
} 
export default TextFieldComp;
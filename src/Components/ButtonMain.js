import React from 'react';
import Button from '@mui/material/Button';


function ButtonMain({text, border, bg, variant, size, color, height, width, fontSize, mt, startIcon, endIcon, type}) {
    return ( 
        <Button variant={variant} size={size} startIcon={startIcon} endIcon={endIcon} type={type}
         sx={{
             p:2,
             textTransform:"none",
             marginTop:{mt},
             fontSize:{fontSize},
             textAlign: "center",
             lineHeight: "24px",
             borderRadius:"5px", 
             border:{border}, 
             color:{color}, 
             bgcolor:{bg},
             ':hover': {
                bgcolor: "black", // theme.palette.primary.main
                color: '#ffff',
                border:"0.5px solid black",
            },
             width:{width}, 
             height:{height} 
            }}>{text}</Button>
     );
}

export default ButtonMain;
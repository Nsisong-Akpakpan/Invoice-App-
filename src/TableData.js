import React from "react";
import useFetch from "./useFetch";
// import { nanoid } from "nanoid";
import { useState } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {Typography, Box, Button, TextField} from '@mui/material';
// import ButtonMain from './Components/ButtonMain';
import TextFieldComp from "./Components/TextField";
// import datdata from "./mock-data.json"
// import MainPage from "./MainPage";
// import { useParams } from "react-router-dom";
function TableData() {
    // const { id } = useParams();
    const { data: tableData, setData: setTableData, isPending, error } = useFetch('http://localhost:3333/tableData');
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [rate, setRate] = useState('');
    const [amount, setAmount] = useState('');
    // const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tableData = { item, quantity, rate, amount};
        console.log(tableData)
        fetch('http://localhost:3333/tableData', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(tableData)
        }).then(() => {
            console.log("new blog added ")
        })
    }

    
const handleDelete = (id) => {
    const newTableData = tableData.filter(tableDatum => tableDatum.id !==id)
    setTableData(newTableData);         
} 

// const handleDelete = (tableDatum) => {
//     fetch('http://localhost:3333/tableData', {
//         method: "DELETE",
//         headers: {
//             'Content-type': 'application/json'
//         }
//     })
                
//     }


    // const handleDelete = () => {
    //     fetch('http://localhost:3333/tableData/' + tableData.id, {
    //         method: 'DELETE'
    //     }).then(() => {
    //         console.log("new blog deleted")
    //     })
                
    // }

    // mt={5} first box
    // const [data, setData] = useState(tableData);
           
   
    return(
        <div>
             <Box mt={5} sx={{ height:"inherit", width:{xs:"100%", md:"100%"}}}>
             <form onSubmit={handleSubmit} >
                {error && <Box mt={5} sx={{color:"red"}}>{error}</Box>}
                {isPending && <Box>Loading...</Box>}
                {tableData && (
                    <TableContainer sx={{border:"2px solid red", width:{md:"55vw"}}}>
                    <Table>
                        <TableHead  >
                            <TableRow sx={{border:"2px solid green"}} >
                                <TableCell sx={{border:"1px solid green", width:"50%", borderBottom:"none"}} align="left"><Typography variant="p" >Item</Typography></TableCell>
                                <TableCell sx={{border:"1px solid green", width:"10%", borderBottom:"none"}} align="right"><Typography variant="p" >Quantity</Typography></TableCell>
                                <TableCell sx={{border:"1px solid green", width:"10%", borderBottom:"none"}} align="left"><Typography variant="p" >Rate</Typography></TableCell>
                                <TableCell sx={{border:"1px solid green", width:"30%", borderBottom:"none"}} align="right"><Typography variant="p" >Amount</Typography></TableCell>
                                <TableCell sx={{border:"1px solid green", width:"30%", borderBottom:"none"}} align="right"><Typography variant="p" >Action</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((tableDatum)=>(
                                <TableRow key={tableDatum.id}>
                                    <TableCell sx={{border:"1px solid green", width:"50%", borderBottom:"none"}} align="left">{tableDatum.item}</TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"10%", borderBottom:"none"}} align="right">{tableDatum.quantity}</TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"10%", borderBottom:"none"}} align="left">{tableDatum.rate}</TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"30%", borderBottom:"none"}} align="right">{tableDatum.amount}</TableCell>
                                    <Button  variant="contained" onClick={() => handleDelete(tableDatum.id)}>Delete</Button>
                                </TableRow>
                                                              
                            ))}
                        </TableBody>

                        <TableBody>
                            
                                <TableRow >
                                    <TableCell sx={{border:"1px solid green", width:"50%", borderBottom:"none"}}>
                                        <TextFieldComp
                                        type="text"
                                        required
                                        value={item}
                                        onChange={(e) => setItem(e.target.value)}
                                        // name="item"
                                        // required="required"
                                        // placeholder="Description of service or product"
                                        // onchange={handleAddFormChange}
                                        />            
                                    </TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"10%", borderBottom:"none"}}>
                                        <TextFieldComp
                                        type="number"
                                        required
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        // name="quantity"
                                        // required="required"
                                        // placeholder=""
                                        // onchange={handleAddFormChange}
                                        />        
                                    </TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"10%", borderBottom:"none"}}>
                                        <TextFieldComp
                                        type="number"
                                        required
                                        value={rate}
                                        onChange={(e) => setRate(e.target.value)}
                                        // name="rate"
                                        // required="required"
                                        // placeholder=""
                                        // onchange={handleAddFormChange}
                                        />
                                    </TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"30%", borderBottom:"none"}}>
                                        <TextFieldComp
                                        type="number"
                                        required
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        // name="amount"
                                        // required="required"
                                        // placeholder=""
                                        // onchange={handleAddFormChange}
                                        />
                                    </TableCell>
                                </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer>
                )}
                

                        {/* <TableBody>
                            <TableRow>
                                    <TableCell sx={{border:"1px solid green", width:"50%", borderBottom:"none"}} align="left">{item}</TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"10%", borderBottom:"none"}} align="right">{quantity}</TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"10%", borderBottom:"none"}} align="left">{rate}</TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"30%", borderBottom:"none"}} align="right">{amount}</TableCell>
                                    <TableCell sx={{border:"1px solid green", width:"30%", borderBottom:"none"}} align="right"><Button  variant="contained" >Delete</Button></TableCell>
                                    
                            </TableRow>
                        </TableBody> */}
                        
                {/* onSubmit={handleAddFormSubmit}  */}
               
                

                   

               

                   
                    {!isPending && <button type="submit" >Submit</button>} 
                    {isPending && <button type="submit" onclick="handleSubmit()" disabled >Submitting...</button>} 
                                      
                </form> 
                {/* <p>{item}</p>
                <p>{quantity}</p>
                <p>{rate}</p>               */}
                
            </Box>
        </div>
    

    );
}
export default TableData;  
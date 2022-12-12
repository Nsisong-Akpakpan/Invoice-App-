import React, {useState, useEffect} from 'react';
// import { nanoid } from 'nanoid';
import {Container, Grid, Card, CardContent, Typography, Box, Button, ButtonGroup} from '@mui/material';

import ButtonMain from './Components/ButtonMain';
import TextFieldComp from './Components/TextField';
import TableData from './TableData';
// import InvoiceDetails from './InvoiceDetails';
// import Create from './create';
import useFetch from './useFetch';
// import datdata from "./mock-data.json"
// ICONS
import AddIcon from '@mui/icons-material/Add';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditIcon from '@mui/icons-material/Edit';

function MainPage() {
    const { data: invoiceDetails, setData: setInvoiceDetails, isPending, error } = useFetch('http://localhost:3333/invoiceDetails');
    const [notes, setNotes] = useState('');
    const [terms, setTerms] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [paymentTerms, setPaymentTerms] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [poNumber, setPoNumber] = useState('');

    const handleInvoiceDetailsSubmit = (e) => {
        e.preventDefault();
        const invoiceDetails = { invoiceNumber, from, to, date, paymentTerms, dueDate, poNumber};
        console.log(invoiceDetails)
        fetch('http://localhost:3333/invoiceDetails', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(invoiceDetails)
        }).then(() => {
            console.log("new detail added ")
        })
    }
    // const { data: tableData, setData: setTableData, isPending, error } = useFetch('http://localhost:3333/tableData');
    // useEffect(()=>{
    //     const newTableData = JSON.parse(sessionStorage.getItem('fan') ?? '[]') //refresh
    //     setTableData([...newTableData])
    //   },[])
// const handleDelete = (Id) =>{
//     const newTableData = tableData.filter(tableDatum => tableDatum.Id !== Id);
//     setTableData(newTableData);
// }
    return(
        <div>
            <Container maxWidth="lg" sx={{justifyContent:"center", border:"5px solid green", overflowX: "hidden", width:{xs:"80vw", sm:"90vw", md:"100vw"}}}>
            <form onSubmit={handleInvoiceDetailsSubmit}>
                <Grid container spacing={1} columns={12} mt={0.1} sx={{border:"5px solid green"}}>
                    <Grid item xs={12} sm={12} md={4} sx={{border:"5px solid blue"}}>
                        <Card>
                            <CardContent>
                                <Box sx={{border:"5px solid blue", display:"flex"}}> 
                                    <AddIcon sx={{fontSize:"37px", fontWeight:"bold"}}/>
                                    <Typography color="inherit" variant="h5">Add Your Logo</Typography>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        {/* <Card sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center"}}> */}
                            <Box width="100%" sx={{display:"flex", justifyContent:{xs:"center", sm:"center", md:"end"}}}>
                                <TextFieldComp id="standard-basic" width={"15rem"} height={"root"} size={"small"} label="INVOICE" sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center" }}/>
                            </Box>
                            <Box mt={1.5} width="100%" sx={{display:"flex", flexDirection:"row", justifyContent:{xs:"center", sm:"center", md:"end"}}}>
                                {/* <Box sx={{width:"70px", display:"flex", flexDirection:"row", border:"1px solid red", justifyContent:"end"}}> */}
                                    <TextFieldComp
                                    width={"70px"}
                                    height={"2px"}
                                    label="#"
                                    size={"small"}
                                     />
                                {/* </Box> */}
                                {/* <Box sx={{width:"70%"}}> */}
                                    <TextFieldComp
                                    type="number"
                                    required
                                    value={invoiceNumber}
                                    onChange={(e) => setInvoiceNumber(e.target.value)}
                                    height={"root"} 
                                    width={"100%"}
                                    // label="1"
                                    size={"small"}
                                    />
                                {/* </Box> */}
                            </Box>
                        {/* </Card> */}
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} sx={{ border:"1px solid red", width:{md:"20vw"}, display:"flex", P:5, flexDirection:"column", justifyContent:"center", textAlign:"center"}}>
                        <Card>
                            <Box sx={{ border:"1px solid red", width:{md:"20vw"}, display:"flex", P:5, flexDirection:"column", justifyContent:"center", textAlign:"center"}}>
                                <Box>
                                       <ButtonMain
                                        type="submit" 
                                        variant={"contained"} 
                                        width={"170px"} 
                                        height={"45px"} 
                                        bg={"inherit"} 
                                        color={"#FFFFFF"}  
                                        text={"Send Invoice"} 
                                        fontSize={"13px"}
                                        sx={{display:"flex",  justifyContent:"start", textAlign:"left"}}/>                                   
                                </Box>

                                <Box>
                                    <ButtonMain 
                                    variant={"text"}
                                    width={"170px"}
                                    height={"35px"} 
                                    text={"Download Invoice"} 
                                    color={"default"} 
                                    fontSize={"13px"}
                                    startIcon={<ArrowDownwardIcon/>}/>  
                                </Box>

                                <Box>
                                    <ButtonMain 
                                    variant={"text"}
                                    width={"170px"}
                                    height={"35px"} 
                                    text={"Currency:USD"} 
                                    color={"inherit"} 
                                    fontSize={"13px"}
                                    endIcon={<EditIcon/>}/>
                                </Box>

                                <Box>
                                    <ButtonMain 
                                    variant={"text"}
                                    width={"170px"}
                                    height={"35px"} 
                                    text={"Save template"} 
                                    color={"default"} 
                                    fontSize={"13px"}/>
                                </Box>

                                <Box>
                                    <TextFieldComp width={"170px"} height={"mall"} label="My invoice" sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center" }}/> 
                                </Box>
                            </Box>
                           
                        </Card>
                    </Grid>
                </Grid>

            {/* SECOND LAYER     */}
            {invoiceDetails && (
            <Grid container spacing={1} columns={12} mt={4}>
                    <Grid item xs={12} sm={12} md={4} >
                        <Card>
                            <Box sx={{border:"2px solid red", height:"29vh", display:"flex", flexDirection:"column", justifyContent:"space-between" }} >
                                <Box sx={{border:"1px solid green", width:"95%", display:"block", justifyContent:"center", alignItems:"center"}}>
                                    <TextFieldComp 
                                            type="text"
                                            required
                                            value={from}
                                            onChange={(e) => setFrom(e.target.value)}
                                            id="outlined-textarea"
                                            width={"295px"}
                                            height={"root"}
                                            size={"large"}
                                            label="Who is this invoice from?(required)" 
                                            sx={{display:"flex", flexDirection:"column", 
                                            justifyContent:"end", alignItems:"center"}}
                                        />                              
                                </Box>

                                <Box  mt={1} sx={{border:"1px solid green", display:"block", justifyContent:"center", alignItems:"center"}}>
                                <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Bill To</Typography>
                                    <TextFieldComp 
                                            type="text"
                                            required
                                            value={to}
                                             onChange={(e) => setTo(e.target.value)}
                                            id="outlined-textarea"
                                            width={"50%"}
                                            height={"100%"}
                                            size={"medium"}
                                            multiline
                                            label={<p>Who is this invoice to? (required)</p>} 
                                            sx={{m:0, p:0}}
                                        />                              
                                </Box>
                            </Box>   
                        </Card>
                    </Grid>

                    <Grid item xs={17} sm={17} md={4}>
                        <Card sx={{display:"block", justifyContent:{xs:"center", sm:"center", md:"end"}, alignItems:"center"}}>
                            <Box sx={{border:"2px solid red", width:{md:"27vw"}, justifyContent:{xs:"center", sm:"center", md:"end"}}} >
                                <Box sx={{display:"grid", justifyContent:{xs:"center", sm:"center", md:"end"}, gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}} >
                                        <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Date</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", border:"1px solid green",  justifyContent:"end"}}>
                                        <TextFieldComp size={"small"} sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center" }}
                                         type="text"
                                         required
                                         value={date}
                                         onChange={(e) => setDate(e.target.value)}
                                        />
                                    </Box>
                                </Box>

                                <Box mt={1} sx={{display:"grid", justifyContent:{xs:"center", sm:"center", md:"end"}, gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center", textAlign:"end"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <Typography variant="p" sx={{border:"1px solid yellow", fontSize:"14px"}}>Payment Terms</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", border:"1px solid green",  justifyContent:"end"}}>
                                        <TextFieldComp size={"small"} sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center" }}
                                         type="text"
                                         required
                                         value={paymentTerms}
                                         onChange={(e) => setPaymentTerms(e.target.value)}
                                        />
                                    </Box>
                                </Box>

                                <Box mt={1} sx={{display:"grid", justifyContent:{xs:"center", sm:"center", md:"end"}, gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Due Date</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", border:"1px solid green",  justifyContent:"end"}}>
                                        <TextFieldComp size={"small"} sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center" }}
                                        type="text"
                                        required
                                        value={dueDate} 
                                        onChange={(e) => setDueDate(e.target.value)}
                                        />
                                    </Box>
                                </Box>

                                <Box mt={1} sx={{display:"grid", justifyContent:{xs:"center", sm:"center", md:"end"}, gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>PO Number</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", border:"1px solid green",  justifyContent:"end"}}>
                                        <TextFieldComp size={"small"} sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center" }}
                                        type="number"
                                        required
                                        value={poNumber}
                                        onChange={(e) => setPoNumber(e.target.value)}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
            </Grid>
            )}
        </form>
           
            {/* THIRD LAYER */}
            {/* {error && <Box mt={5} sx={{color:"red"}}>{error}</Box>}
            {isPending && <Box>Loading...</Box>}
            {tableData && <TableData tableData={tableData} setTableData={setTableData}/>} */}
            <TableData />
            {/* <Create /> */}
            
           

            {/* FOURTH LAYER */}
            <form onSubmit={handleInvoiceDetailsSubmit}>
            <Grid container spacing={1} columns={12}>
                    <Grid item xs={12} sm={12} md={4} >
                        <Card>
                        <Box sx={{border:"2px solid red", height:"37vh", display:"flex", flexDirection:"column", justifyContent:"space-between" }} >   
                           <Box  mt={1} sx={{border:"1px solid green", display:"block", justifyContent:"center", alignItems:"center"}}>
                            <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Notes</Typography>
                            <Box mt={2} sx={{display:"flex", border:"1px solid green"}}>
                                <TextFieldComp
                                type="text"
                                required
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                width={"25rem"} 
                                size={"small"} 
                                label="Notes - any relevant information not already covered" 
                                sx={{display:"flex", flexDirection:"column", alignItems:"center" }}/>
                            </Box>                            
                           </Box>

                           <Box  mt={1} sx={{border:"1px solid green", display:"block", justifyContent:"center", alignItems:"center"}}>
                            <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Terms</Typography>
                            <Box mt={2} sx={{display:"flex", border:"1px solid green"}}>
                                <TextFieldComp
                                type="text"
                                required
                                value={terms}
                                onChange={(e) => setTerms(e.target.value)}
                                width={"25rem"} 
                                size={"small"}
                                label="Terms and conditions - late fees, payment methods, delivery schedule"
                                sx={{display:"flex", flexDirection:"column", alignItems:"center" }}/>
                            </Box>                            
                           </Box>
                        </Box>    
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <Card sx={{display:"block", justifyContent:"center", alignItems:"center"}}>
                        <Box sx={{border:"2px solid red", width:{md:"27vw"}, height:"37vh" }} >
                                <Box sx={{justifyContent:{xs:"center", sm:"center", md:"end"}, display:"grid", gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}} >
                                        <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Subtotal</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", justifyContent:"end"}}>
                                        <ButtonGroup size="small" aria-label="small button group">
                                            <Button variant="text" size="small"  sx={{display:"flex",  justifyContent:"end", textAlign:"right"}}>$</Button>
                                            <Button variant="text" sx={{display:"flex",  justifyContent:"start", textAlign:"left"}} >0.00</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Box>

                                <Box mt={1} sx={{justifyContent:{xs:"center", sm:"center", md:"end"}, display:"grid", gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center", textAlign:"end"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <Typography variant="p" sx={{border:"1px solid yellow", fontSize:"14px"}}>Tax</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", border:"1px solid green",  justifyContent:"end"}}>
                                        <TextFieldComp size={"small"} sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center" }}/>
                                    </Box>
                                </Box>

                                <Box mt={1} sx={{justifyContent:{xs:"center", sm:"center", md:"end"}, display:"grid", gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Total</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", justifyContent:"end"}}>
                                        <ButtonGroup size="small" aria-label="small button group">
                                            <Button variant="text" size="small"  sx={{display:"flex",  justifyContent:"end", textAlign:"right"}}>$</Button>
                                            <Button variant="text" sx={{display:"flex",  justifyContent:"start", textAlign:"left"}} >0.00</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Box>

                                <Box mt={1} sx={{justifyContent:{xs:"center", sm:"center", md:"end"}, display:"grid", gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Amount Paid</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", border:"1px solid green",  justifyContent:"end"}}>
                                        <TextFieldComp size={"small"} sx={{display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"center" }}/>
                                    </Box>
                                </Box>

                                <Box mt={1} sx={{ justifyContent:{xs:"center", sm:"center", md:"end"}, display:"grid", gridGap:"15px", gridTemplateColumns: "100px 0.5fr", alignItems:"center"}} >
                                    <Box sx={{border:"5px solid green", textAlign:"end", dislay:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <Typography sx={{border:"1px solid yellow", fontSize:"14px"}}>Balance Duel</Typography>
                                    </Box>
                                    <Box width="100%" sx={{display:"flex", justifyContent:"end"}}>
                                        <ButtonGroup size="small" aria-label="small button group">
                                            <Button variant="text" size="small"  sx={{display:"flex", justifyContent:"end", textAlign:"right"}}>$</Button>
                                            <Button variant="text" sx={{display:"flex",  justifyContent:"start", textAlign:"left"}} >0.00</Button>
                                        </ButtonGroup>
                                    </Box>
                                </Box>
                            </Box>

                        </Card>
                    </Grid>
            </Grid>
            </form>
        </Container>
      </div>
    );
}
export default MainPage;
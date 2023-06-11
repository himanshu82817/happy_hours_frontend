import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function CustomAlert({message,type , open , setOpen}) {
  const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }); 
  const [show,setShow] = useState(false)


  return (
    // <Stack spacing={2}>
      <Snackbar  anchorOrigin={{vertical: "top",horizontal: "right"}} open={open} autoHideDuration={4000} onClose={()=>setOpen(false)} >
          <Alert severity={type} onClose={()=>setOpen(false)} sx={{ width: '100%' }}>
            {message}
          </Alert>
      </Snackbar>
    // </Stack>
  )
}

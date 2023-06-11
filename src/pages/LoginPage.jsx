import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField } from '@mui/material';
import { loginApi } from '../api/auth';
import CustomAlert from '../components/CustomAlert';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const [alert,setAlert] = useState(false)
  const [alertMessage,setAlertMessage] = useState('')
  const [alertType,setAlertType] = useState('')
  const navigate  = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      email:email,
      password:password
    }
    loginApi(obj).then((res)=>{
      console.log(res);
      setAlertMessage(res.message)
      setAlertType(res.success?'success':'error')
      setAlert(true)
      if(res.success){
        setTimeout(() => {
          navigate("/chat")
          
        },2000);
      }
      
    }).catch(err=>{
      console.log(err);
      setAlertMessage('something went wrong')
      setAlertType('error')
      setAlert(true)
    })
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <TextField  className='w-full' id="email" label="email" variant="outlined"  value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <TextField className='w-full' id="password" type={showPassword?"text":"password" } label="password" variant="outlined"  value={password} onChange={(e) => setPassword(e.target.value)}
                InputProps={{

                  endAdornment:(
                    <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={()=>setShowPassword(!showPassword)}
                    edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                  )
                }}
             />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:text-blue-700">
            Register here
          </Link>
        </p>
      </div>
      <CustomAlert setOpen={setAlert} open={alert} message={alertMessage} type={alertType} />
    </div>
  );


};

export default LoginPage;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('values')
    let obj = {
      userName:username,
      email:email,
      password:password
    }
    console.log(obj);
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-8 py-6">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <TextField className='w-full'  id="outlined-basic" label="Username" variant="outlined" value={username} onChange={ (e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-4">
          <TextField className='w-full'  id="outlined-basic" label="email" variant="outlined"  value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
          <TextField className='w-full'  id="outlined-basic" label="password" type="password" variant="outlined"  value={password} onChange={(e) => setPassword(e.target.value)}
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
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:text-blue-700">
            SignIn here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <><Button component={Link} to="/signin" variant="contained">Sign In</Button></>
  )
}

export default SignIn
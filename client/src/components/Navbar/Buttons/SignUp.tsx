import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div><><Button component={Link} to="/signup" variant="outlined">Sign Up</Button></></div>
  )
}

export default SignUp
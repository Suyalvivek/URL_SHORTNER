import { Button } from "@radix-ui/themes"
import Register from "./modules/user/pages/Register"
import AppRoutes from "./shared/routes/AppRoutes"
import { useNavigate } from "react-router-dom"

const App = () => {
  const navigate = useNavigate();
  return (
    <>
    <Button variant="soft" onClick={()=> navigate('/login')}>Login</Button>
    <Button variant="solid" onClick={()=> navigate('/register')}>Register</Button>
    <AppRoutes/>
    </>

  )
}

export default App    
import { useEffect } from 'react'
import { useAuth } from '../../context/authContext';
import { getUserById } from '../../api/api';
import { Button } from '@mui/material';

const Home = () => {
  const {getIsAdmin, logout, user, isAdmin} = useAuth();
  
  const getUserAdmin = async ()=>{
    const usersAdmin = await getUserById(user.uid);
    getIsAdmin(usersAdmin?.isAdmin || false);
  }

  useEffect(() => {
    getUserAdmin();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>Bienvenido</h2>
      {user ? <h1>{user.email}</h1> : <h1>No hay usuario</h1>}'
      {isAdmin ? <h1>Es admin</h1> : <h1>No es admin</h1>}
      <Button  onClick={logout}>Logout</Button>
    </div>
  )
}

export default Home
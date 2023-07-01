import Register from './pages/Register';
import "./css/style.scss";
import Login from './pages/Login';
import Home from './pages/Home';
// react router dom 
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "./context/AuthContext";

function App() {
  // yeh user ki details fetch krlegs firebase se ki voh logged in hai ki nhi  
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  // jaise hi logout hoga we'll be redirected to login page
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

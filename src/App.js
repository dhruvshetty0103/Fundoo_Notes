import './App.css'
import RegisterationPage from './pages/RegisterationPage.jsx'
import Login from './pages/Login.jsx'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassWord from './pages/ResetPassword'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={RegisterationPage} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={ForgetPassword} />
        <Route path="/reset/:token" component={ResetPassWord} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  )
}

export default App

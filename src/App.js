import './App.css'
import registrationPage from './pages/registrationPage.jsx'
import Login from './pages/login.jsx'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={registrationPage} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

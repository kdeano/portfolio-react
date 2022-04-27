import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import { Navbar, Home, About, Skills, Work, Contact, NavbarResume, Resume } from './components'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Navbar /><Home /><About /><Skills /><Work /><Contact /></>} />
        <Route path="/resume" element={<><NavbarResume /><Resume /></>} />
      </Routes>
    </Router>
  )
}

export default App
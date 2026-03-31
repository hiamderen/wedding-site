import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

/**
 * App - Root component with React Router setup.
 * Route "/" renders the Home page which includes all sections.
 * Guest name is read from the ?guest= query param in Invitation component.
 */
function App() {
  return (
    <BrowserRouter basename="/wedding-site">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Catch-all: redirect unknown paths to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Owner from './components/Owner'

function App() {
  return (
    <>
      <Navbar /> {/* Navbar จะอยู่ถาวรในทุกหน้า */}
      
      <Routes>
        {/* หน้า Home (Path ว่างหรือ /) */}
        <Route path="/" element={<HomePage />} />
        
        {/* หน้า Owner (Path /owner) */}
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </>
  )
}

export default App




import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from './pages/Notes'
import CreateNote from './pages/CreateNotes'
import EditNote from './pages/EditNotes'
const App = () => {
    return (
      <main id="app">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/edit/note/:id" element={<EditNote/>} />
        </Routes>
      </BrowserRouter>
      </main>
    )
}

export default App
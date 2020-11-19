import React from 'react'
import LandinPage from './components/LandinPage'
import Nav from './components/Nav'

function App() {
    return (
        <div className="px-4 py-6 backgound-primary xl:px-64 lg:px-56">
            <Nav/>
            <LandinPage/>
        </div>
    )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayJobs from './components/DisplayJobs';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Volcano Jobs Dashboard</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<DisplayJobs />} />
            {/* You can add more routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
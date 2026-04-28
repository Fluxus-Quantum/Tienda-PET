/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Placeholder routes for expanded functionality */}
        <Route path="/tienda" element={<Home />} /> 
        <Route path="/blog" element={<Home />} />
        <Route path="/contacto" element={<Home />} />
      </Routes>
    </Router>
  );
}


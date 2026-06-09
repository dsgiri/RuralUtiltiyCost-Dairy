/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Forecast } from './pages/Forecast';
import { Price } from './pages/Price';
import { Feed } from './pages/Feed';
import { BreakEven } from './pages/BreakEven';
import { Margin } from './pages/Margin';
import { Expand } from './pages/Expand';
import { Favorites } from './pages/Favorites';
import { About } from './pages/About';
import { Legal } from './pages/Legal';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/price" element={<Price />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/breakeven" element={<BreakEven />} />
          <Route path="/margin" element={<Margin />} />
          <Route path="/expand" element={<Expand />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

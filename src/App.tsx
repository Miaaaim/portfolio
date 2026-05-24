/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ExperienceDetail from './pages/ExperienceDetail';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import ContactModal from './components/ContactModal';

export default function App() {
  const routerBase = import.meta.env.BASE_URL || '/';

  return (
    <ModalProvider>
      <BrowserRouter basename={routerBase}>
        <ScrollToTop />
        <ContactModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/web-design" element={<ServiceDetail />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
}


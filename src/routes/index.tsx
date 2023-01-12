import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Projects } from '../pages/Projects';
import { Skills } from '../pages/Skills';
import { About } from '../pages/About';


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={< Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

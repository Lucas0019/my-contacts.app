import { Routes, Route } from 'react-router-dom';

import { EditContact } from './page/EditContact';
import { Home } from './page/Home';
import { NewContact } from './page/NewContact';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
}

import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AppDetail from './pages/AppDetail';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/app/:slug" element={<AppDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

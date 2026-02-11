import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/admin/Login';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Properties from './pages/admin/Properties';
import Leads from './pages/admin/Leads';
import BrokerPartners from './pages/admin/BrokerPartners';
import Content from './pages/admin/Content';
import Analytics from './pages/admin/Analytics';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Navigate to='/admin/login' replace />} />
        <Route path='/admin/login' element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/properties' element={<Properties />} />
          <Route path='/admin/leads' element={<Leads />} />
          <Route path='/admin/partners' element={<BrokerPartners />} />
          <Route path='/admin/content' element={<Content />} />
          <Route path='/admin/analytics' element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

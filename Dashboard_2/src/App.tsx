import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashboardPage from '@/pages/Dashboard/index';
import CustomersPage from './pages/CustomersPage';
import MessagesPage from './pages/MessagesPage';
import ProductPage from './pages/ProductPage';
import SecurityPage from './pages/SecurityPage';
import SettingsPage from './pages/SettingsPage';
import TransactionsPage from './pages/TransactionsPage';
import StatisticsPage from './pages/StatisticsPage';
import RootLayout from './layouts/RootLayout';
import AuthPage from './pages/Auth/AuthPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="security" element={<SecurityPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

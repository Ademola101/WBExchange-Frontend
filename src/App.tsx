import React from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Toaster toastOptions={{
        style: {
          background: 'var(--primary-color)',
          color: 'var(--white-text)',
        }
      }} />
      <AppRoutes />
    </div>
  );
}

export default App;
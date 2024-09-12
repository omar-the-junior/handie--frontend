import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import StarRating from './components/stars';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <StarRating rating={0} />
  </StrictMode>,
);

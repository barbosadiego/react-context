import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './providers/AuthContex.js';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

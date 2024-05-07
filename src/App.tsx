import React from 'react';
import ReactDOM from 'react-dom/client';

import { Form } from '../dist/index.js';
import '../dist/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export function App() {
  return (
    <div>
      <Form heading="Grab your new dream job!" textBody="Just sign up for our newsletter" buttonLabel="Go!" />
    </div>
  );
}

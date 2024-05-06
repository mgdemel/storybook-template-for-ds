import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Header, TextSection } from '../dist/index.js';
import '../dist/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export function App() {
  return (
    <div>
      <Header text="Header" />
      <TextSection title={'Title'} content={'Text area'} />
      <Button label={'Click here!'} type={'primary'} />
    </div>
  );
}

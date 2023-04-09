import './styles/styles.css';
import Form from './pages/Form.js'
import { createContext, useState } from 'react';

function App() {

  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  return (
      <div id = {theme}>
        <Form theme={theme} toggleTheme={toggleTheme}/>
      </div>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

  // Your JavaScript code here
  const titleElement = document.getElementById("pageTitle");

  function updateTitle(count) {
    // titleElement.textContent = `Card ${count >= 1 ? "Item" : "Items"}: ${count}`;
    titleElement.textContent = `Cart ${this.state.count <= 2 ? 'Item' : 'Items'}: ${this.state.count + 1}`;
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

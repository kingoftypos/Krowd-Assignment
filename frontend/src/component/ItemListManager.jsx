import React, { useState } from 'react';

function ItemListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      return;
    }
    setItems([...items, inputValue.trim()]);
    setInputValue('');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', backgroundColor: '#2c3e50', color: 'white', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          <h1 style={{ margin: 0, fontSize: '24px', color: '#28a745' }}>Item List Manager</h1>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h2 style={{ margin: '20px 0', fontSize: '30px', textAlign: 'center', color: '#333' }}>Item List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search or enter item"
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '50%',
            marginBottom: '20px',
          }}
        />

        <button
          onClick={handleAddItem}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            width: '50%',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '20px',
          }}
        >
          Add Item
        </button>

        <ul style={{ marginTop: '20px', padding: '0 20px', fontSize: '18px', listStyleType: 'disc' }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemListManager;

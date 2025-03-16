const getRandomTsCode = () => {
  const code = `
    // This is a random TS code snippet
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    
    const App = () => {
      return (
        <div className="App">
          <header className="App-header">
            <p>Hello World</p>
          </header>
        </div>
      );
    };
    
    ReactDOM.render(<App />, document.getElementById('root'));
  `;
  
  return code;
};

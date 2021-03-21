import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
      <form>
        <div className="div-app">
          <TextField id="standard-basic" label="First" />
        </div>
        <div className="div-app">
          <TextField id="standard-basic" label="Second" />
        </div>
        <div className="div-app">
          <TextField id="standard-basic" label="Third" />
        </div>
        <div className="div-app">
          <TextField id="standard-basic" label="Fourth" />
        </div>
        <div className="div-app">
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="div-app">
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>

      </form>
    </div>
  );
}

export default App;

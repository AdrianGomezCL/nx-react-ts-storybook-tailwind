import React from 'react';
import { Button } from '@ppm/ui';

export function App() {
  return (
    <div className="p-4">
      <h3>Button from "UI" library</h3>
      <Button label="Outside button" />

      <h3>Buttom from this app</h3>
      <button className="p-4 text-white bg-teal-700 hover:bg-teal-600">
        Inside button
      </button>
    </div>
  );
}

export default App;

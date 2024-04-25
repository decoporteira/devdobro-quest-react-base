import React from "react";
import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  return (
    <div>
       <Text
        content='hello world'
        style={{ color: 'blue' }}
      />
      <Button label="Baixar CV" />
     
    </div>
  );
}

export default App;
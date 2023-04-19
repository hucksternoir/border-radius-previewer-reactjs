import { useState } from "react";
import { CircleDiv, Container } from "./style";
function App() {
  const [borderRadius, setBorderRadius] = useState(0);

  return (
    <Container>
      <h1>Border Radius Previewer React</h1>
      <CircleDiv borderRadius={borderRadius} />
      <input
        type="range"
        name="input"
        id="inptRange"
        min={0}
        max={100}
        onChange={(e) => setBorderRadius(e.target.value)}
      />
      <p>border-radius: {borderRadius}px</p>
    </Container>
  );
}

export default App;

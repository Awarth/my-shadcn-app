import { BrowserRouter } from "react-router-dom";
import WalshRoute from "@/pages/routes";

function App() {
  return (
    <BrowserRouter basename="/walsh">
      <WalshRoute />
    </BrowserRouter>
  )
}

export default App;
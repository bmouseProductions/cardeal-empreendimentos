import AppRoutes from "./Router";
import { ButtonUp } from "./components/ButtonUp/index";
import WhatsAppButton from "./components/whats/whats";

function App() {
  return (
    <>
      <AppRoutes />
      <ButtonUp />
      <WhatsAppButton />
    </>
  );
}

export default App;

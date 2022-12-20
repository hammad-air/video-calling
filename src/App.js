import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home";
import RoomPage from "./page/Room";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" > */}
         <Route path="/" element={<HomePage />} />
         <Route path="/room/:roomId" element={<RoomPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
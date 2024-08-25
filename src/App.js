import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from "@chakra-ui/react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import HomePage from "./pages/homePage.js";
import ChatPage from "./pages/chatPage.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;

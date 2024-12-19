import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import DeviceOptions from "./DeviceOptions/DeviceOptions";
import DevicePreview from "./DevicePreview/DevicePreview";
import DeviceInfo from "./DeviceInfo/DeviceInfo";
import React from "react";

import "./App.css";
import { DeviceProvider } from "./DeviceInfo/DeviceProvider";
import DisconnectedScreen from "./DisconnectedScreen/DisconnectedScreen";

export default function App() {
  return (
    <DeviceProvider>
      <DisconnectedScreen>
        <div className="container">
          <DevicePreview />
          <DeviceInfo />
          <DeviceOptions />
        </div>
      </DisconnectedScreen>
    </DeviceProvider>
  );
}

//function App() {
//  const [greetMsg, setGreetMsg] = useState("");
//  const [name, setName] = useState("");
//
//  async function greet() {
//    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
//    setGreetMsg(await invoke("greet", { name }));
//  }
//
//  return (
//    <main className="container">
//      <h1>Welcome to Tauri + React</h1>
//
//      <div className="row">
//        <a href="https://vitejs.dev" target="_blank">
//          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//        </a>
//        <a href="https://tauri.app" target="_blank">
//          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//        </a>
//        <a href="https://reactjs.org" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
//
//      <form
//        className="row"
//        onSubmit={(e) => {
//          e.preventDefault();
//          greet();
//        }}
//      >
//        <input
//          id="greet-input"
//          onChange={(e) => setName(e.currentTarget.value)}
//          placeholder="Enter a name..."
//        />
//        <button type="submit">Greet</button>
//      </form>
//      <p>{greetMsg}</p>
//    </main>
//  );
//}

//export default App;

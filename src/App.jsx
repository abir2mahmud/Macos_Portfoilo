import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import {Dock, Navbar, Welcome} from "#components";
import {Finder, Resume, Safari, Terminal} from "#windows/index.js";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
          <Navbar />
          <Welcome />
          <Dock />

          <Terminal />
          <Safari />
          <Resume />
          <Finder />
        </main>
    )
}
export default App;

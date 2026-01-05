import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import {Dock, Navbar, Welcome} from "#components";
import {Finder, Image, Resume, Safari, Terminal, Text} from "#windows/index.js";

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
          <Text />
          <Image />
        </main>
    )
}
export default App;

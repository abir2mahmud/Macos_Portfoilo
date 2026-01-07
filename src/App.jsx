import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import {Dock, Home, Navbar, Welcome} from "#components";
import {Finder, Image, Resume, Safari, Terminal, Text, Contact} from "#windows/index.js";

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
          <Contact />

          <Home />
        </main>
    )
}
export default App;

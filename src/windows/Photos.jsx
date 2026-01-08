import { Mail, Search } from "lucide-react";

import windowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { gallery, photosLinks} from "#constants";
import use
import useWindowStore from "#store/window.js"; WindowStore from "#store/Window";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
          <div id="window-header">
              <WindowControls target="photos" />


          </div>
        </>
    )
}
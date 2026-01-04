import {WindowControls} from "#components";
import {Search} from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";


const Finder = () => {

    return <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>...</ul>
          </div>

          <div>
              <h3>Work</h3>
              <ul>...</ul>
          </div>
        </div>
      </div>
    </>;

};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow

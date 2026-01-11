import useWindowStore from "#store/window.js";

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();
        return <div id = "window-controls">
            <div className="close" onClick={() => closeWindow(target)} />
            <div className="minimize" />
            <div className="maximize" />
        </div>
};

export default WindowControls

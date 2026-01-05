import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-4 overflow-y-auto h-full bg-white text-black">
                {image && <img src={image} alt={name} className="w-full h-auto mb-4 rounded" />}
                {subtitle && <h3 className="text-xl font-bold mb-2">{subtitle}</h3>}
                {description && Array.isArray(description) && description.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;

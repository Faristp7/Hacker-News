import { useState } from "react";

export default function DotMenu() {
    const [isNightMode, setIsNightMode] = useState<boolean>(true)

    const menuItems = [
        { icon: "https://img.icons8.com/ios-filled/50/ffffff/twitter.png", text: "Share App" },
        { icon: "https://img.icons8.com/ios-glyphs/30/ffffff/refresh--v1.png", text: "Reload App" },
        { icon: "https://img.icons8.com/ios-filled/50/ffffff/full-screen.png", text: "Full Screen" },
        { icon: "https://img.icons8.com/ios/50/ffffff/bat--v1.png", text: "Toggle Night Theme" },
    ];

    const handleToggleNightMode = () => {        
        setIsNightMode(!isNightMode)
        if (isNightMode) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }

    return (
        <div className="col-start-2 rounded-b bg-orange-600">
            {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <div className="p-2 flex gap-3 cursor-pointer hover:bg-orange-700" onClick={item.text === 'Toggle Night Theme' ? handleToggleNightMode : undefined}>
                        <img className="w-5 h-5 mt-0.5" src={item.icon} alt={item.text} />
                        <p className="text-white">{item.text}</p>
                    </div>
                    {index !== menuItems.length - 1 && <hr />}
                </div>
            ))}
        </div>
    )
}

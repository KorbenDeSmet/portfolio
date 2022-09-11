import { useEffect, useContext } from "react";

import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

import { ThemeContext } from './../../contexts/ThemeProvider';

export const Header = () => {
    const { themeCheck, themeChange } = useContext(ThemeContext);

    useEffect(() => {
        themeCheck();
    }, [themeCheck]);

    return (
        <div className="bg-primaryLight dark:bg-primaryDark h-20 flex py-3 px-12 border-b border-accent">
            <div className="text-primaryDark dark:text-primaryLight p-1 my-auto italic font-serif text-2xl">Korben De Smet</div>
            <button id="sun" onClick={themeChange} className="fixed top-6 -right-24 duration-700"><BsSunFill size={35} className="text-primaryLight" /></button>
            <button id="moon" onClick={themeChange} className="fixed top-6 -right-24 duration-700"><BsMoonStarsFill size={35} className="text-primaryDark" /></button>
        </div>
    )
};
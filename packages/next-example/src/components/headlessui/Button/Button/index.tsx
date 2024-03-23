import React from "react";

interface Props {}
const Button: React.FC<Props> = () => {
    return (
        <button
            className={`hover:bg-100% group relative z-10 cursor-pointer overflow-hidden rounded-md bg-sky-600 bg-center p-2 text-white transition-colors  duration-0 hover:bg-sky-700 hover:bg-center hover:duration-1000`}>
            <span>Button</span>
            <span className="group-active:animate-ripple absolute z-20 block h-5 w-5 rounded-full bg-neutral-100 opacity-0"></span>
        </button>
    );
};
export default Button;

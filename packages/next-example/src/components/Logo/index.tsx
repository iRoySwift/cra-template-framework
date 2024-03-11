import Logo from "./Logo";
import MiniLogo from "./MiniLogo";

// ==============================|| MAIN LOGO ||============================== //

import React from "react";

interface Props {
    drawer?: boolean;
}
const LogoSelection: React.FC<Props> = ({ drawer }) => {
    return (
        <div className="flex min-h-14 items-center justify-center p-2 pl-3">
            {!drawer ? <Logo /> : <MiniLogo />}
        </div>
    );
};
export default LogoSelection;

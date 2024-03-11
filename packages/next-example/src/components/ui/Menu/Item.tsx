import React, { useEffect, useRef } from "react";
import { iItem } from ".";

interface Props {
    drawer?: boolean;
    open: boolean;
    selected: string;
    item: iItem;
    handleSelect: (item: iItem) => void;
    handleCollapse: () => void;
}
const Item: React.FC<Props> = props => {
    const { drawer, open, selected, item, handleSelect, handleCollapse } =
        props;

    let isSelected = useRef(false);
    isSelected.current = selected == item.id;

    useEffect(() => {
        isSelected.current && handleCollapse();
        return () => {
            isSelected.current = false;
        };
    }, [handleCollapse, item]);
    return (
        <div
            className={`${open ? "visible" : "invisible hidden"} text-tw-fgd-2`}>
            <ul>
                <a
                    className={`${isSelected.current && "selected"} my-1 block hover:bg-tw-bkg-hover [&.selected]:border-r-2 [&.selected]:border-tw-link-active [&.selected]:bg-tw-bkg-hover  [&.selected]:text-tw-link-active`}
                    onClick={() => handleSelect(item)}>
                    <div className="flex cursor-pointer items-center justify-between p-2 pl-6 pr-4 text-sm leading-relaxed">
                        <div className="w-7"></div>
                        <div className="my-1 flex-1">{item.title}</div>
                    </div>
                </a>
            </ul>
        </div>
    );
};
export default Item;

"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Item from "./Item";
import { iItem, iMenu } from ".";

interface Props {
    item: iMenu;
    selected: string;
    drawer?: boolean;
    handleSelect: (item: iItem) => void;
    children?: React.ReactNode;
}
const Group: React.FC<Props> = props => {
    const { item, selected, drawer, handleSelect } = props;
    const [open, setOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const hasChildren = item.children && item.children.length;

    const handleCollapse = useCallback((open: boolean) => {
        setOpen(open);
    }, []);

    const handleGroupClick = useCallback(
        (item: iItem) => {
            if (hasChildren) {
                handleCollapse(!open);
            } else {
                handleSelect(item);
            }
        },
        [handleCollapse, handleSelect, hasChildren, open]
    );

    useEffect(() => {
        let el =
            hasChildren &&
            item.children?.find(el => {
                return el.id == selected;
            });
        if (selected == item.id || el) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }

        return () => {
            setIsSelected(false);
        };
    }, [hasChildren, item, selected]);

    // group class
    let groupSelectClas = !drawer ? "drawer" : "expanded";
    if (!drawer) {
        groupSelectClas = hasChildren ? "" : " hover:bg-tw-bkg-hover ";
        groupSelectClas +=
            !hasChildren && isSelected
                ? " border-r-2 border-tw-link-active bg-tw-bkg-hover text-tw-link-active "
                : "";
    } else {
        groupSelectClas = isSelected
            ? " text-tw-link-active bg-tw-bkg-hover hover:!bg-tw-bkg-hover "
            : " hover:bg-tw-bkg-hover ";
    }

    return (
        <div>
            <ul className="group">
                {!drawer && (
                    <div className="mb-3 pl-6 text-xs text-tw-fgd-3">
                        {item.group}
                    </div>
                )}
                {/*  */}
                <div
                    className={`text-tw-fgd-2 ${drawer ? "m-2 mx-3 rounded-md hover:bg-tw-bkg-hover-2" : "p-2 pl-6 pr-4"} ${groupSelectClas} group-has-[.selected]:text-tw-link-active group-has-[.invisible]:hover:bg-tw-bkg-hover`}>
                    <a
                        className="my-1 block"
                        onClick={() => handleGroupClick(item)}>
                        <div
                            className={`flex  cursor-pointer items-center justify-between text-sm leading-relaxed `}>
                            <div
                                className={`${drawer ? " flex h-9 w-9 items-center justify-center px-2" : "mr-1 h-4 w-4"}`}>
                                {item.icon}
                            </div>
                            {!drawer && (
                                <div className="my-1 flex-1">{item.title}</div>
                            )}
                            {!drawer && hasChildren && (
                                <div className="w-3">
                                    {open ? (
                                        <ChevronUpIcon className="h-4 w-4" />
                                    ) : (
                                        <ChevronDownIcon className="h-4 w-4" />
                                    )}
                                </div>
                            )}
                        </div>
                    </a>
                </div>
                {!drawer &&
                    item.children?.map((el, i) => (
                        <Item
                            key={i}
                            item={el}
                            open={open}
                            selected={selected}
                            handleSelect={handleSelect}
                            handleCollapse={handleCollapse}
                        />
                    ))}
            </ul>
        </div>
    );
};
export default Group;

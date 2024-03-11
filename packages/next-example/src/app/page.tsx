"use client";
import Image from "next/image";
import { useState } from "react";
import { Switch as HeadSwitch } from "@headlessui/react";
import Switch from "@/components/ui/Switch";
import Dropdown from "@/components/ui/Dropdown";
import MainLayout from "@/layout/MainLayout";
import Button from "@/components/ui/Button/Button";

export default function Home() {
    const [enabled, setEnabled] = useState(false);

    const handleChange = () => {
        setEnabled(prev => !prev);
    };

    return (
        <div className="flex  flex-col items-center  p-24 ">
            <Switch
                checked={enabled}
                onChange={handleChange}
                label="Toggle"
                disabled
            />
            {/* <MyMenu /> */}
            <Dropdown />
            <Button />
        </div>
    );
}

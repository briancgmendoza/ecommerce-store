"use client";

import { useEffect, useState } from "react";

import { formatter } from "@/lib/utils";

import { ICurrencyProps } from "./interface";

const Currency: React.FC<ICurrencyProps> = ({
    value
}: ICurrencyProps) => {
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;


    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
};

export default Currency;
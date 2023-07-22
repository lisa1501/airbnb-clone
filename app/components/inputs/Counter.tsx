'use client';

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
        title,
        subtitle,
        value,
        onChange
    }) => {
        return ( 
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <div className="font-medium">{title}</div>
                </div>
                <div className="font-light text-gray-600">
                    {subtitle}
                </div>
            </div>
        );
    }

export default Counter;
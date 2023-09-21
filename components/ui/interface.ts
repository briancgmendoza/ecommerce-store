import { IProduct } from "@/types";
import { MouseEventHandler } from "react";

export interface IContainerProps {
    children: React.ReactNode;
}

export interface IButtonProps extends
    React.ButtonHTMLAttributes<HTMLButtonElement> { }

export interface IProductCardProps {
    data: IProduct;
}

export interface IIconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    icon: React.ReactElement;
}

export interface ICurrencyProps {
    value: string | number;
}

export interface IModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
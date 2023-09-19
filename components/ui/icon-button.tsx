import { cn } from "@/lib/utils";

import { IIconButtonProps } from "./interface";

const IconButton: React.FC<IIconButtonProps> = ({
    onClick,
    icon,
    className
}: IIconButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
                className
            )}
        >
            {icon}
        </button>
    );
};

export default IconButton;
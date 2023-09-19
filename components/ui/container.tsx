import { IContainerProps } from "./interface";

const Container: React.FC<IContainerProps> = ({
    children
}: IContainerProps) => {
    return (
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
    );
};

export default Container;
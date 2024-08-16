interface ContainerProps {
    title: string;
    titleSize: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ title, titleSize, children }) => {
    return (
        <div className="flex flex-col gap-10 items-center justify-center h-screen bg-gray-100 p-6">
            <h2 className={`${titleSize} font-extrabold`}>{title}</h2>

            {children}
        </div>
    );
};

export default Container;

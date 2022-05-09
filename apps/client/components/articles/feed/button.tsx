import React from 'react';

const Button = ({ getMorePages }: { getMorePages: () => void }) => {
    const [trigger, setTrigger] = React.useState<boolean>(false);
    console.log(trigger);
    return (
        <div
            className="rounded-full border hover:text-black hover:bg-white border-white p-3 text-white cursor-pointer w-[200px] transition duration-300"
            onClick={() => {
                getMorePages();
            }}
            onMouseEnter={() => {
                setTrigger(true);
            }}
            onMouseLeave={() => {
                setTrigger(false);
            }}>
            <div className="flex justify-center">
                <p>Voir plus </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 pt-1 ${
                        trigger ? 'transition translate-y-1 move duration-300' : 'transition transition-duration: 300;'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
    />
</svg>;

export default Button;

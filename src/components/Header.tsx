import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className="relative w-full h-[300px]">
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{
                    backgroundImage:
                        "linear-gradient(0deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.35) 100%), url('/Header.png')",
                }}
            ></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1
                    className="text-4xl font-bold"
                    style={{
                        color: "#000",
                        textAlign: "center",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "48px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                    }}
                >
                    {path === '/' ? 'Home' : path.substring(1)}
                </h1>
                <div className="mt-2 text-sm flex items-center">
                    <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800"
                        style={{
                            color: 'var(--Ink-Dark, #252A31)',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '16px',
                            textDecorationLine: 'underline',
                            marginRight: '8px',
                        }}
                    >
                        <Link to="/">Home</Link>
                    </a>
                    <img src="/icon_Header.svg" alt="" className="mx-2" />
                    <a
                        href="#"
                        className="text-gray-600 hover:text-gray-800"
                        style={{
                            color: 'var(--Ink-Dark, #252A31)',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '16px',
                            textDecorationLine: 'none',
                        }}
                    >
                        {path === '/' ? 'Home' : path.substring(1)}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;

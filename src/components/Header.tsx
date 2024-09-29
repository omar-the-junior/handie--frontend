import { Link } from "react-router-dom";
import { Breadcrumbs } from "./Breadcrumbs";

function Header() {
    
    const breadcrumbs = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
        // { name: '', link: '/products/123' },
    ];

    
    const currentPageName = breadcrumbs[breadcrumbs.length - 1].name;

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
                    {currentPageName}
                </h1>
                <div className="mt-2 text-sm flex items-center">
                    
                    <Breadcrumbs breadcrumbs={breadcrumbs} /> 
                    <img src="/icon_Header.svg" alt="" className="mx-2" />
                    <span
                        style={{
                            color: 'var(--Ink-Dark, #252A31)',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '16px',
                            fontWeight: '600',
                            lineHeight: '16px',
                        }}
                    >
                     {currentPageName}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;

import React from "react";

const Layout = ({ children }: React.ReactNode) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <main>{children}</main>
            </header>
        </>
    );
};

export default Layout;

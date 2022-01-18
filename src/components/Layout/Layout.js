import React from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar>
                {children}
                {/* Main content */}
                <div className="flex-1 flex items-stretch overflow-hidden">
                    <main className="flex-1 overflow-y-auto">
                        {/* Primary column */}
                        <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col lg:order-last">
                            Hello guys
                        </section>
                    </main>

                    {/* Secondary column (hidden on smaller screens) */}
                    <aside className="hidden w-96 bg-primary border-gray-200 overflow-y-auto lg:block">
                        {/* Your content */}
                    </aside>
                </div>
            </Navbar>
        </>
    )
}

export default Layout

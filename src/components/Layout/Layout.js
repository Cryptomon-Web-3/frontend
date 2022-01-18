import React from 'react'
import Navbar from '../Navbar/Navbar'
import OnlineUsers from '../OnlineUsers/OnlineUsers'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar>
                {/* Main content */}
                <div className="flex-1 flex items-stretch overflow-hidden">
                    <main className="flex-1 overflow-y-auto">
                        {/* Primary column */}
                        <section aria-labelledby="primary-heading" className="min-w-0 flex-1 h-full flex flex-col lg:order-last">
                            {children}  
                        </section>
                    </main>

                    {/* Secondary column (hidden on smaller screens) */}
                    <aside className="hidden border-gray-200 overflow-y-auto lg:inline-block">
                        <OnlineUsers />
                    </aside>
                </div>
            </Navbar>
        </>
    )
}

export default Layout

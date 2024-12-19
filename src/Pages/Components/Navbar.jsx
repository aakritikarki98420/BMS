function Navbar() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
                <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
                    <div className="relative flex h-16 justify-between">
                        <div className="flex flex-1 items-stretch justify-start">
                            <a className="flex flex-shrink-0 items-center" href="#">
                                <img className="block h-22 w-24" src="public/logo (3).png" />
                                <p className="text-sky-500 font-bold font-serif text-2xl ml-[-25px]">BLOGIFY</p>
                            </a>
                        </div>

                        <div className="w-8 h-8 ml-12 mt-5 mr-[40px]">
                            <a href="/addme"><img src="public/inkwell.png" /></a>
                        </div>
                        <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                            <a className="text-gray-700 hover:text-indigo-700 text-sm font-medium" href="/login">Login</a>
                            <a className="text-gray-800 bg-indigo-100 hover:bg-indigo-200 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm "
                                href="/signup">Sign up
                            </a>
                        </div>

                        <div className="w-8 h-8 ml-12 mt-5">
                            <a href="/profile"><img src="public/user-avatar.png" /></a>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Navbar
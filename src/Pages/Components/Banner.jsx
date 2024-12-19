function Banner() {
    return (
        <>
            <section className="py-8 z-10 font-serif">
                <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
                    <div className="w-full md:w-1/2 py-8">
                        <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
                            Welcome to <br /><span className="text-blue-500">My Portfolio, <br /></span> I am Web Developer.
                        </h1>
                    </div>
                    <div className="w-full md:w-1/2 py-8">
                        <img src="https://www.svgrepo.com/show/493509/person-who-invests.svg" className="g-image" />
                    </div>
                </div>
            </section>

        </>
    )
}
export default Banner
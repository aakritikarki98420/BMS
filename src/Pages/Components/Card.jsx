import { Link } from "react-router-dom"

function Card(props) {
    console.log(props, "Props");
    
    return (
        <>
            <Link to={`/blog/${props.blog?.id}`}>
                <div className="flex px-3 py-3 h-[470px] w-[400px]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="public/WhatsApp Image 2024-12-05 at 13.45.25_55891234.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{props.blog?.title}</div>
                            <p className="text-gray-700 text-base">{props.blog?.subtitle}
                            </p>
                        </div>
                        <details>
                            <summary>Read More</summary>
                        </details>


                    </div>
                </div>
            </Link>

        </>
    )
}
export default Card
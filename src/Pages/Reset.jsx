import { Link } from "react-router-dom"

function Reset() {
    return (
        <>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-20 ml-[390px]">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Reset Your Password</h2>
                <p className="text-sm text-gray-600 mt-1 text-center">Enter your new password below</p>
                <form className="mt-6 space-y-4">

                    {/* <!-- Password Field --> */}
                    <div>
                        <label for="new-password" className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            id="new-password"
                            name="new-password"
                            required
                            className="w-full px-4 py-2 mt-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300 focus:outline-none"
                            placeholder="Enter new password"
                        />
                    </div>

                    {/* <!-- Confirm Password Field --> */}
                    <div>
                        <label for="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            required
                            className="w-full px-4 py-2 mt-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500 border-gray-300 focus:outline-none"
                            placeholder="Re-enter new password"
                        />
                    </div>

                    {/* <!-- Submit Button --> */}
                    <Link to="/login">
                        <button
                            type="submit"
                            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none font-medium text-sm">
                            Reset Password
                        </button>
                    </Link>
                </form>

                <p className="mt-4 text-sm text-gray-600 text-center">
                    Remember your password?
                    <a href="/login" className="text-blue-600 hover:underline">Login here</a>
                </p>
            </div>
        </>
    )
}
export default Reset
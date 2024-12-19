import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Addme() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  })

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    //const {value, name} = e.target

    setData({
      ...data, //agadi ja xa tyo persist garxa
      [name]: value // respective name ma store garxa
    })
  }
  console.log(data)
  const createBlog = async (e) => {
    e.preventDefault();
    console.log(data, 28);
    
    const response = await axios.post("https://67512d4669dc1669ec1d4f16.mockapi.io/blogs", data)
    if (response.status === 201) {
      navigate("/home")
    } else {
      alert("Something went wrong")
    }
  }

  return (
    <div className="mt-20 max-w-2xl mx-auto p-4">
      <form>
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-100"
            required
          />
        </div>

        <div >
          <label htmlFor="subtitle" className="block text-lg font-medium text-gray-800 mb-1">
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            onChange={handleChange} // subtitle ma type gareko kura setSubtitle ma set hunxa
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-100"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-lg font-medium text-gray-800 mb-1">
            Content
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-100"
            rows="6"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-1">
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-100"
          />
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="reset"
            onClick={() => {
              setTitle('');
              setSubtitle('');
              setContent('');
              setImage(null);
            }}
            className="px-6 py-2 bg-gray-300 text-black text-sm font-medium rounded-xl hover:bg-gray-400 focus:outline-none"
          >
            Clear
          </button>
          <button
            type="submit"
            onClick={createBlog}
            className="px-6 py-2 bg-indigo-100 text-black text-sm font-medium rounded-xl hover:bg-indigo-200 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default Addme
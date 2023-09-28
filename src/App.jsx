import axios, { Axios } from "axios"
import {FcLike} from 'react-icons/fc'
import { useState } from "react"
function App() {

  const [photo, setPhoto] = useState('')
  const [clentId, setClientId] = useState("9psyx9eYM0lQdBtyLBxnimsxE5S79NNVPG28O3EHPEQ")

  const [result, setResult] = useState([])

  function handleChange(event) {
    setPhoto(event.target.value)
  }
  function handleSubmit(event) {
    console.log(photo);

    const url = "https://api.unsplash.com/search/photos?client_id=" + clentId + "&page=1&query=" + photo + ""

    axios.get(url)
      .then((response) => {
        console.log(response);
        setResult(response.data.results)
      })

  }
  return (
    <div>
      <h1 className="text-center font-medium text-xl my-4">Unsplash photo search in React</h1>
      <div className="flex justify-center items-center max-w-7xl mx-auto gap-6">
      <input onChange={handleChange} className="form-control bg-slate-600 text-white p-2 rounded placeholder:text-white w-[500px]" type="text" name="photo" placeholder="Search for photos..." />
      <button className="bg-blue-500 p-2 rounded-md text-white " onClick={handleSubmit} type="submit">Search</button>
      </div>
      {result.map((photo) => {
       
        return (
          <div className="container max-w-md w-full inline-grid gap-x-5 gap-y-10 ">
          <div className="grid-cols-4 md:grid-cols-4 shadow-md gap-5 p-14 rounded ">
          <img className="object-cover rounded-md  w-80 h-48" src={photo.urls.small} alt="" />
          <div className="flex justify-center mt-5">
          <span className="text-center"><span className="font-semibold text-white">Title:</span> {photo.user.name}</span>
          </div>
          <div className="text-center">
          <span className=""><span className="font-semibold text-white">Description:</span> {photo.description}</span>
          </div>
          <div className="flex justify-center items-center mt-8 gap-2">
            <FcLike />
            <span className="">{photo.likes} likes</span>
          </div>
          </div>
          </div>
        )
        
      })}
    </div>
  )
}

export default App
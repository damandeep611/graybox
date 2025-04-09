"use client"
import axios from "axios";
import { useEffect, useState } from "react"

export default function User(){
  const [ loading, setLoading] = useState(true);
  const [data, setData] = useState({});


  useEffect(()=> {
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
  },[setLoading])

  if(loading){
    return (
      <div>
        loading...
      </div>
    )
  }
  return(
    <div className="min-h-screen flex  items-center justify-center">
     <div>
     {data.name}
     </div>
     <div>
     {data.email}
     </div>
    </div>
  )
}
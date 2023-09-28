import React,{useState,useEffect} from 'react'
import axios from '@/data/axios'
import {IMAGE_BASE_URL} from '@/data/endpoints'
import styles from '../styles/Row.module.css'

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([])
    useEffect(()=>{
        async function fetchMovies(){
        try{
            const res = await axios.get(fetchUrl)
            console.table(res.data.results)
            setMovies(res.data.results)
        }
        catch
        {
            console.log("Error is fetching movies")
        }
    }
    fetchMovies();
},[fetchUrl]);
  return (
    <div className={`${styles.row}`}>
        <div className='row__title'>
            {title}
        </div>
        <div className={`${styles.row__posters}`}>

        {movies.map((item,index)=>(
            <img 
            key={item.id}
             className={`${styles.row__poster_image} ${isLargeRow && styles.row__poster_imageLarge}`} src={`${IMAGE_BASE_URL}${isLargeRow?item.poster_path:item.backdrop_path}`}/>
        ))}
        </div>  
    </div>
  )
}

export default Row
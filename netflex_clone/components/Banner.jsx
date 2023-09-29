import React,{useEffect,useState} from 'react'
import axios from '@/data/axios'
import endpoints,{IMAGE_BASE_URL} from '@/data/endpoints'
import styles from '@/styles/Banner.module.css'


function Banner() {

    const [movie,setMovie]=useState(null)
    useEffect(()=>{
        async function fetchTrendingMovie(){
            try{
                const res = await axios.get(endpoints.fetchTrending)

                let value = Math.floor( (Math.random() * res.data.results.length)-1)
                if(value <= 0){
                    value =0;
                }
                setMovie(res.data.results[value])
                console.log("Movie::",value,res.data.results[value])
            }
            catch{
                console.log("Error: could not able to find the movie....")
            }
        }
        fetchTrendingMovie()
    },[])
  return (
    <div className={`${styles.banner}`} style={{
        // backgroundSize:"cover", 
        // backgroundPosition: "center center",
        backgroundImage: `url(${IMAGE_BASE_URL}${movie?.backdrop_path})`,
    }}>
        <div className={`${styles.banner__content}`}>
        <div className={`${styles.banner__content_title}`}>{movie?.name || movie?.original_title }</div>
        <div className=''>
            <button className={`${styles.banner__content__button}`}>Play</button>
            <button className={`${styles.banner__content__button}`}>My List</button>
        </div>
        <div className={`${styles.banner__content__description}`}>{movie?.overview.length > 100?(movie?.overview.substring(0,97).concat("...")):(movie?.overview)}</div>
        
        </div>
        <div className={`${styles.banner__fadebottom}`}/>
    </div>
  )
}

export default Banner
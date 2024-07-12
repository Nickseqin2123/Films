import React, { useEffect, useState } from "react"
import Movie from '../Movie/Movie'
import classes from './MoviesCss/Movies.module.css'
import Header from '../../Header/HeaderComp/Header'


export default function Movies () {
    const [value, setValue] = useState({
        items: [],
        isLoaded: false,
        search: null
    })
    

    useEffect(() => {
        const flg = true? value.search: false
        let url = null
        
        if (flg) {
            url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${value.search}`
        } else {
            url = `https://api.kinopoisk.dev/v1.4/movie?page=${Math.floor(Math.random() * 15)}&query=10&selectFields=id&selectFields=name&selectFields=poster&notNullFields=id&notNullFields=name&notNullFields=poster.url`
        }


        fetch(url, {
            headers: {
                'X-API-KEY': 'QD33BET-THB4ESD-QN2FQBW-4F5NJJJ'
            }
        }).then(res => res.json()).then((result) => {
            setValue({
                isLoaded: true,
                items: result['docs']? result['docs']: result.statusCode,
                search: value.search? flg: null
            })
        })

    }, [value.search])


    if (value.items !== 403 && value.isLoaded){
        return (
            <>
                <Header fn={(query) => setValue({
                    items: [],
                    isLoaded: false,
                    search: query
                })}/>
                <div className={classes.main}>
                    {value.items.map((data) => {
                        return Movie(data)
                    })}
                </div>
                        
            </>
            )
    } else {
        return <div className={classes.spinner}></div>
    }
    
}
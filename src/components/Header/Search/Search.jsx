import React, { useRef } from 'react'
import classes from './css/Search.module.css'


export default function Search({fn}) {
    const refEl = useRef(null)


    return (
        <form method='GET' onSubmit={() => fn(refEl.current.value)}>
            <button type='submit'>Поиск</button>
            <input type="text" ref={refEl} placeholder="Поиск"/>
        </form>
        

    )
}

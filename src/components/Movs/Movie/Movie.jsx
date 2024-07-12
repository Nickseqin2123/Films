/* eslint-disable react/prop-types */
import classes from './MovieCss/Movie.module.css'


export default function Movie(props) {

    const {name, poster, id} = props


    return (
        <div className={classes.special} key={id}>
            <img src={poster.previewUrl} />
            <p>{name}</p>
        </div>
    )
}
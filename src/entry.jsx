
export default function Entry(props){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div>
                <h1>{props.name}</h1>
                <a href={props.googleLink}>{props.name}</a>
                <h2>{props.date}</h2>
                <p>{props.text}</p>
            </div>
        </article>
    )
}
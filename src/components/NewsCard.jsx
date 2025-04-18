import "./News.css"

export const NewsCard = (props) =>{
    return(
        <div className="news-card" >
            {/* <img src={props.imageUrl}></img> */}
            <center>
            <div className="news-info">
                <h2>
                    {/* {props.Title} */}
                    Title of News</h2>
                <p>
                    {/* {props.desc} */}
                    Description of the News Description of the News Description of the News Description of the News Description of the News Description of the News Description of the News Description of the News
                    </p>
            </div>
            </center>
        </div>
    )
}
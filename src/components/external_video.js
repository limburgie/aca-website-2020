import React from "react"

export default function ExternalVideo(props) {
    let watchUrl = props.url;
    let code = watchUrl.split("=");
    let embedUrl = "https://www.youtube.com/embed/" + code[1];

    return (
        <iframe style={{width: `500px`, height: `285px`, border: `none`}} src={embedUrl}/>
    )
}
import {useState} from "react";

export default function Main() {

    const [topText,setTopText] = useState("Walk into Mordor")
    const [bottomText,setBottomText] = useState("One does not simply")
    const [imageURL,setImageURL] = useState("http://i.imgflip.com/1bij.jpg")

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={imageURL} />
                <span className="top">{bottomText}</span>
                <span className="bottom">{topText}</span>
            </div>
        </main>
    )
}
import { useState, useEffect } from "react"


export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function changeImg(){
        let index = Math.floor(Math.random()*allMemes.length)
        const randomMeme = allMemes[index] // Get a random meme
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomMeme.url // Update the meme image
        }))
    }

    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={changeImg}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="imageURL"/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}
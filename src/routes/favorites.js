import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import { useEffect } from 'react'
import { useState } from "react"
import axios from 'axios'


export const FavoriteButton = () => {
    const [fav, setFav] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)



    const postFav = (e) => {
        e.preventDefault()
        useEffect(() =>
        axios
        .post('https://team-question-box.herokuapp.com/user/favorites/',
        {
            user: currentUser,
            question: selectedQuestion,
        },
        {
            headers: {
                Authorization: `Token ${token}`,
            },
        }
        )
        .then ((res) => {
            setCurrentUser('')
            setFav(True)
            setSelectedQuestion('')
        })
        .catch((err) => console.log(err)))}

        const handleFav = (inputType, e) => {
            setFav(!fav)
            if (fav == true){
                postFav()
            }else{

            }

            if (inputType === 'question_tite'){
                setTitle(e.target.value)
            }
            if (inputType === 'question_field'){
                setSelectedQuestion(e.target.value)
            }
        }


    return (
        {fav && 
            <IconButton onClick={() => { setFav(!fav) }}  aria-label="delete" color="primary">
            <FavoriteBorderIcon></FavoriteBorderIcon>
            </IconButton>
        }
            {!fav &&
            <IconButton onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">
            <Favorite></Favorite>
            </IconButton>
            }
    )
}
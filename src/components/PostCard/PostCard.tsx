import React from 'react'
import styles from './styles.module.css'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import { IPost } from '../../Interfaces/IPost'

interface IPostCard {
    post: IPost
    onLike: (id: string) => void
    onDislike: (id: string) => void
    onDelete: (id: string) => void
}

export const PostCard = (props: IPostCard) => {
    return (
        <Card
            sx={{ width: '100%', margin: '10px', backgroundColor: '#342e2e' }}
        >
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Some user
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.post.massage}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <div>
                    <Button
                        onClick={() => props.onLike(props.post.id)}
                        sx={{ color: 'green' }}
                        size="small"
                    >
                        {props.post.likesCount ?? ''} Like
                    </Button>
                    <Button
                        onClick={() => props.onDislike(props.post.id)}
                        sx={{ color: 'red' }}
                        size="small"
                    >
                        Dislike
                    </Button>
                </div>
                <Button
                    onClick={() => props.onDelete(props.post.id)}
                    sx={{ color: 'white' }}
                    size="small"
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

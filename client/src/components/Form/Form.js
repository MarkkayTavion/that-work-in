import React from "react";
import { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import useStyles from "./formStyles";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from "../../actions/posts";


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])

    const handleSubmit = (event) => {
        event.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData));
        }
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.Form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">${ currentId ? "Edit that WORK" : "Show off that WORK" }</Typography>
                <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                 />
                 <TextField 
                name="title" 
                variant="outlined" 
                label="title" 
                fullWidth
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                 />
                 <TextField 
                name="message" 
                variant="outlined" 
                label="message" 
                fullWidth
                value={postData.message}
                onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                 />
                 <TextField 
                name="tags" 
                variant="outlined" 
                label="tags" 
                fullWidth
                value={postData.tags}
                onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                 />
                 <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                 </div>
                 <Button className={classes.buttonSubmit} variant="container" color="success" size="large" type="submit" fullWidth>Submit
                 </Button>
                 <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear
                 </Button>
            </form>
        </Paper>
    );
}

export default Form;
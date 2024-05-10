import React, { useEffect, useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import toast from 'react-hot-toast';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

const EditModal = ({ open, handleClose, todo, onEditSuccess }) => {
    const [title, setTitle] = useState(todo.title);
    const [task, setTask] = useState(todo.task);
    const _id = todo._id;

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setTask(todo.task);
        }
    }, [todo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ _id, title, task}),
        });

        if (res.ok) {
            toast.success('Update Successful!', {
                position: 'top-center',
                duration: 1500,
            });
            onEditSuccess();
            handleClose();
        } else {
            toast.error('Update Failed!', {
                position: 'top-center',
                duration: 1500,
            });
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form" onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Task"
                    name="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Update
                </Button>
            </Box>
        </Modal>
    );
};

export default EditModal;

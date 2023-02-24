import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

interface ModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    description: string;
    image: string;
}

const Modal = ({ active, setActive, description, image }: ModalProps) => {
    return (
        <Dialog
            open={active}
            onClose={() => setActive(prev => !prev)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{'& .MuiDialog-paper': {width: '80%', height: '70%', margin: 0, maxWidth: 'none'}}}
        >

            <DialogContent >
                <DialogContentText id="alert-dialog-description">
                    <Stack columnGap={5}  flexDirection="row">
                        <Box>
                            <img style={{width: '300px', height: '400px'}} src={image} alt="" /></Box>
                        <div>
                            {description}
                        </div>
                    </Stack>
                </DialogContentText>
            </DialogContent>

        </Dialog>
    )
}

export default Modal
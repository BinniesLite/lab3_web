import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';


interface ModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    description: string;
    image: string;
    projects: any;
}


const Modal = ({ active, setActive, description, image, projects }: ModalProps) => {    
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
                        <Box width="300px" height="400px" >
                            <img style={{width: 'inherit', height: 'inherit'}} src={image} alt="" />
                        </Box>

                        <Divider orientation="vertical" flexItem />   
                        <Stack>
                        <Typography component="div" variant="h4">
                            A little bit about me...    
                        </Typography> 
                        <div>
                            {description}
                        </div>
                        </Stack>
                    </Stack>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{p: 3}}>
            {projects && projects.map((project: any, key: number) => (
               <Chip label={project.name} key={key} clickable />))}
            </DialogActions>

        </Dialog>
    )
}

export default Modal
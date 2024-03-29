import React from 'react'
// Styling
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import { Backdrop } from '@mui/material';
// Styling
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';

// import SocialMedia from './SocialMedia';
import SocialMediaVertical from './SocialMedia/SocialMediaVertical';

import { Link } from 'react-router-dom';


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

            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ '& .MuiDialog-paper': { width: '80%', height: '70%', margin: 0, maxWidth: 'none' } }}
            BackdropComponent={Backdrop}
            BackdropProps={{
                onClick: () => setActive(prev => !prev),

            }}
        >
            <DialogContent >
                <DialogContentText id="alert-dialog-description">
                    <Stack columnGap={5} flexDirection="row">
                        <Box width="300px" height="400px" sx={{ display: { xs: 'none', md: 'block' } }} >
                            <img style={{ width: 'inherit', height: 'inherit' }} src={image} alt="" />
                        </Box>

                        <Divider orientation="vertical" flexItem />
                        <Stack flexDirection="column">
                            <Typography color="black" component="div" variant="h4" fontWeight="bold">
                                About Me
                            </Typography>
                            <Typography component="div" variant='body1'  >
                                {description}
                            </Typography>
                            <Stack color="black">
                                <Typography my={2} color="black" component="div" fontWeight="bold">
                                    Social Media
                                </Typography>
                                <SocialMediaVertical />
                            </Stack>
                            <Stack flexWrap='wrap' my={3} flexDirection="row" rowGap={3} columnGap={3}>
                                {projects && projects.map((project: any, key: number) => (
                                    <Link key={key} to={`/work/${project.id}`}>
                                        <Chip label={project.name} key={key} clickable />
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ p: 3 }}>
            </DialogActions>
        </Dialog>
    )
}

export default Modal
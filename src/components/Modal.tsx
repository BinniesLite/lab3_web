import React from 'react'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ active, setActive }: ModalProps) => {
    return (
        <Dialog
            open={active}
            onClose={() => setActive(prev => !prev)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>

        </Dialog>
    )
}

export default Modal
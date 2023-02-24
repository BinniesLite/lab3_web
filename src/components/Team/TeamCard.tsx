import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import project1 from '../../assets/project_1.jpg';
import arrowUp from '../../assets/icons/arrow-up.png';

import Modal from '../Modal';

interface TeamCardProps {
    member: any;
}

const TeamCard = ( { member }: TeamCardProps) => {
    const [active, setActive] = React.useState(false);
    return (
        <Stack sx={{position: 'relative'}}>
            <img style={{ width: '300px', height: '400px' }} src={project1} alt="" />
            <Stack>
                <Typography sx={{mt: 2}} variant="h6" component="div">
                    JohnDoe
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    JohnDoe
                </Typography>
                <span onClick={() => setActive(prev => !prev)}>
                    <img src={arrowUp} alt="" />
                </span>
                <Modal active={active} setActive={setActive} />
            </Stack>
        </Stack>
    )
}

export default TeamCard
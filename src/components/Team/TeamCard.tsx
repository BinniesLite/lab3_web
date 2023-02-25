import React, { memo, useEffect } from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@material-ui/core';

import project1 from '../../assets/project_1.jpg';
import arrowUp from '../../assets/icons/arrow-up.png';

import Modal from '../Modal';

import { getProjectsForMember } from '../../api/database-query';
interface TeamCardProps {
    member: any;
}

const TeamCard = ({ member }: TeamCardProps) => {
    const [active, setActive] = React.useState(false);
    return (
        <Card sx={{
            position: 'relative', boxShadow: 'none',
            width: { md: '320px', sm: '370px', xs: '100%' },
            height: { md: '400px', sm: '400px', xs: '100%' },
        }}>
            <CardMedia
                height="180px"
                component="img"
                image={project1}
            />
            <CardContent>
                <Stack rowGap={3} flexDirection="column" alignItems="center" justifyContent="center">
                    <Typography sx={{ mt: 2 }} variant="h6" component="div">
                        {member.firstName} {member.lastName}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {member.position}
                    </Typography>

                    <Modal
                        projects={member.projects}
                        image={project1}
                        description={member.description}
                        active={active}
                        setActive={setActive} />
                </Stack>
                <CardActions>
                    <Box onClick={() => setActive(prev => !prev)}>
                        <img src={arrowUp} alt="" />
                    </Box>
                </CardActions>
            </CardContent>
            {/* */}
        </Card>
    )
}

export default memo(TeamCard); 
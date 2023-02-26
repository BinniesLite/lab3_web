import React, { memo, useEffect } from 'react'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions } from '@material-ui/core';

import { getMemberProjects } from '../../api/http-request';
import arrowUp from '../../assets/icons/arrow-up.png';

import Modal from '../Modal';

interface TeamCardProps {
    member: any;
}

const TeamCard = ({ member }: TeamCardProps) => {
    const [active, setActive] = React.useState(false);
    const [membersProject, setMembersProject] = React.useState([]);

    useEffect(() => {
        getMemberProjects(member.id).then((res) => {
            setMembersProject(res.data);
        })}, [member.id])


    return (
        <Card sx={{
            position: 'relative', boxShadow: 'none',
            width: { md: '320px', sm: '370px', xs: '100%' },
            
        }}>
            <CardMedia
                height="300px"
                width="300px"
                component="img"
                image={member?.image}
            />
            <CardContent>
                <Stack rowGap={1} columnGap={2} flexDirection="column" alignItems="start" justifyContent="center">
                    <Typography sx={{ mt: 2 }} variant="h6" component="div">
                        {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {member?.position}
                    </Typography>

                    <Modal
                        projects={membersProject}
                        image={member?.image}
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
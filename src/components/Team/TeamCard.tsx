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
        })
    }, [member.id])
    


    return (
        <Card 
        onClick={() => setActive(prev => !prev)}
        sx={{
            position: 'relative', boxShadow: 'none',
            width: { md: '230px', sm: '370px', xs: '100%' },
            cursor: "pointer"
        }}
        variant="outlined"
        elevation={16}
        >
            <CardMedia
                sx={{ objectFit: 'cover', objectPosition: 'center' }}
                height="220px"
                
                component="img"
                image={member?.image}
            />
            <CardContent>
                <Stack columnGap={2} flexDirection="column" alignItems="start" justifyContent="center">
                    <Typography color="inherit" variant="h6" component="div">
                        {member?.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <Stack flexDirection="row">
                            {member?.position} <Box onClick={() => setActive(prev => !prev)}>
                            <img style={{width: '18px'}} src={arrowUp} alt=""  />
                                                </Box>
                        </Stack>
                    </Typography>

                    <Modal
                        projects={membersProject}
                        image={member?.image}
                        description={member.description}
                        active={active}
                        setActive={setActive} />
                    
                </Stack>
                <CardActions>

                </CardActions>
            </CardContent>
            {/* */}
        </Card>
    )
}

export default memo(TeamCard); 
import { useEffect, useState } from 'react'
import Wrapper from '../../layout/Wrapper';
import Section from '../../components/Section';

import TeamCard from '../../components/Team/TeamCard';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { getAllMember } from '../../api/http-request';

import Box from '@mui/material/Box'

const Team = () => {
  const [members, setMembers] = useState([]);
  const [membersProject, setMembersProject] = useState([]);

  useEffect(() => {
    getAllMember().then((res) => {
      setMembers(res.data);
    })
  }, [])


  return (
    <Stack sx={{ backgroundColor: '#fde6ff', width: '100%', color: '#2e712b'}}>
      <Section>
        <Stack flexDirection={{ md: 'row', xs: 'column' }} rowGap={3} justifyContent="space-between">
          <Typography variant="h1" fontWeight="500">
            Team
          </Typography>
          <Typography gutterBottom variant='h5' color="inherit">
          Get to know our team of AI Scientist that are beneficial to the world. <br></br> We’re always looking for curious minds to join our team
          </Typography>
        </Stack>
        <Divider sx={{fontWeight: 'bold', borderColor: 'black'}}/>
          <Stack justifyContent="start" alignItems="start" flex="wrap" columnGap={8} flexDirection={{ md: 'row', xs: 'column' }}>
            {members.map((member, key) => (
              <TeamCard member={member} key={key} />
            ))}
          </Stack>
      </Section>

    </Stack>
  )
}

export default Team;
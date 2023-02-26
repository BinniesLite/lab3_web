import { useEffect, useState } from 'react'
import Wrapper from '../../layout/Wrapper';
import Section from '../../components/Section';

import TeamCard from '../../components/Team/TeamCard';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';

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
    <Box sx={{ backgroundColor: '#f6f6f4' }}>
      <Section>
        <Stack sx={{ mb: '5rem', pt: "10rem" }} justifyContent="flex-start" alignItems="flex-start" minHeight="inherit" width='100%'>
          <div className={`head-text `}>
            We shape the future of summarization <br />
            and build bussiness that help the world
          </div>
        </Stack>
        <Section>
          <Stack justifyContent="start" alignItems="start" flex="wrap" columnGap={5} flexDirection={{ md: 'row', xs: 'column' }}>
            {members.map((member, key) => (
              <TeamCard member={member} key={key} />
            ))}
          </Stack>
        </Section>
      </Section>

    </Box>
  )
}

export default Wrapper(Team, 'team');
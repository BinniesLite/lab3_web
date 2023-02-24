import { useEffect, useState } from 'react'
import Wrapper from '../../layout/Wrapper';
import Section from '../../components/Section';
import { getAllMembers } from '../../api/database-query';
import TeamCard from '../../components/Team/TeamCard';

import Stack from '@mui/material/Stack';


const Team = () => {
  const [members, setMembers] = useState([]);
  
  useEffect(() => {
    getAllMembers().then(
      res => setMembers(res))
  }, [])

  return (
    <div>
      <Stack sx={{ mb: '5rem', paddingBottom: 4 }} justifyContent="center" alignItems="center" minHeight="inherit" width='100%'>
        <h1 style={{ padding: '1rem 0', marginTop: '5rem' }}>About Us</h1>
        <h4>We're team of machine learning scientist with the hope to change the world and create a better <br>
          </br> world for society, we hope to have a good day and change the world blah blah blah blah blah</h4>
      </Stack>
      <Section>
          <Stack justifyContent="start" alignItems="start" flex="wrap" columnGap={5} flexDirection="row">
            {members.map((member, key) => (
              <TeamCard member={member} key={key} />
            ))}
          </Stack>
      </Section>
    </div>
  )
}

export default Wrapper(Team, 'team');
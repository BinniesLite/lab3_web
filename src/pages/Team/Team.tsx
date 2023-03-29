import { useEffect, useState } from 'react'

import Section from '../../components/Section';

import TeamCard from '../../components/Team/TeamCard';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import { getAllMember } from '../../api/http-request';



// import react query
import { useQuery } from '@tanstack/react-query';

const Team = () => {
  const [members, setMembers] = useState([]);
  
  const {data, isLoading, error} = useQuery(['members'], () => {
    getAllMember().then((res) => {
      setMembers(res.data);
    })
  }, {
    cacheTime: Infinity,
  });

  if (isLoading) return <>
  
  </>;
 


  return (
    <Stack sx={{ backgroundColor: '#fde6ff', width: '100%', color: '#2e712b'}}>
      <Section>
        <Stack flexDirection={{ md: 'row', xs: 'column' }} rowGap={3} justifyContent="space-between">
          <Typography variant="h1" fontWeight="500">
            Team
          </Typography>
          <Typography gutterBottom variant='h5' color="inherit">
          Get to know our team of AI Scientist that are changing the world. <br></br> We’re always looking for curious minds to join our team
          </Typography>
        </Stack>
        <Divider sx={{fontWeight: 'bold', borderColor: 'black',  my: 6  , borderBottomWidth: '2px'}}/>
          <Stack justifyContent="start" alignItems="start" flex="wrap" rowGap={4} columnGap={8} flexDirection={{ md: 'row', xs: 'column' }}>
            {!isLoading && 
              members.map((member: any, key: any) => (
              <TeamCard member={member} key={key} />
              )) }
          </Stack>
      </Section>

    </Stack>
  )
}

export default Team;
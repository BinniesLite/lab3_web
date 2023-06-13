import { useEffect, useState } from 'react'
// components
import Section from '../../layout/Section';
import TeamCard from '../../components/Team/TeamCard';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CustomTabs from '../../components/Tabs/CustomTabs';
// http request
import { getAllMember } from '../../api/http-request';
// react-query
import { useQuery } from '@tanstack/react-query';



const tabs = [
  {
    label: 'all',
    value: 'all'
  },
  {
    label: 'Previous Members',
    value: 'previous'
  },
  {
    label: 'Current Members',
    value: 'current'
  },
  // {
  //   label: 'Undergraduate',
  //   value: 'undergraduate'
  // },
  // {
  //   label: 'Graduate',
  //   value: 'graduate'
  // },
];

const Team = () => {
  const [members, setMembers] = useState([]);
  const [activeTab, setActiveTab] = useState<string>("all");
 
  useEffect(() => {
    let active = true;  
    

    if (activeTab == "previous") {
      active = false;    
    }

    // ignore undergraduate and graduate tab

    
      getAllMember(activeTab, active).then((res) => {
        setMembers(res.data);
      });  
  }, [activeTab]);


  return (
    <Stack sx={{ backgroundColor: '', width: '100%', color: ''}}>
      <Section>
        <Stack flexDirection={{ lg: 'row', md: 'column' }} rowGap={3} justifyContent="space-between">
          <Typography variant="h1" fontWeight="500">
            Team
          </Typography>
            <Typography gutterBottom variant='h5' color="inherit">
            Get to know our team of AI Scientist that are changing the world. <br></br> We’re always looking for curious minds to join our team
            </Typography>
        </Stack>
       
        <Divider sx={{fontWeight: 'bold', borderColor: 'black',  my: 6  , borderBottomWidth: '2px'}}/>
        
        <Stack my={8} justifyContent="center" alignItems="center">
            <CustomTabs tabs={tabs} setActiveTab={setActiveTab}  />
        </Stack>
        
          <Stack 
            justifyContent="start" 
            alignItems="start" flexWrap="wrap" rowGap={4} columnGap={8} flexDirection={{ md: 'row', xs: 'column' }}>
            {
              members.map((member: any, key: any) => (
              <TeamCard member={member} key={key}  />
              )) }
          </Stack>
      </Section>

    </Stack>
  )
}

export default Team;
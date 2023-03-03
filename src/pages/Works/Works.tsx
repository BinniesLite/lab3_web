import React from 'react'

import { Stack, Divider, Box  } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import Section from '../../components/Section';
import WorkCard from '../../components/Works/WorkCard';

import { getAllProjects } from '../../api/http-request';
import Modal from '../../components/Modal';

import Wrapper from '../../layout/Wrapper';

const useStyles = makeStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
  },
});



const Works = () => {
  const [projects, setProjects] = React.useState([]);
  
  React.useEffect(() => {
    getAllProjects().then((res) => {
      setProjects(res.data);
    })
  }, [])

 


  return (
    <Stack sx={{width:'100%', minHeight: '100vh', bgColor: '#fff1d6'}}>
      <Section>
        <h1>Works</h1>
        <Divider sx={{borderBottomWidth: '3px', fontWeight: 'bold'}}  />
        <Stack rowGap={3} flexWrap="wrap" flexDirection="row">
           <>
           {projects.map((project, key) => (
                <WorkCard id={project.id} key={key} img={project.image} date={project.date} description={project.description} title={project.name} />
              ))}
          </>
        </Stack> 
        
      </Section>
    </Stack>  
  )
}

export default Works; 
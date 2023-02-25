import {collection, getDocs, query, where, getDoc, DocumentReference} from 'firebase/firestore';
import { db } from '../firebase/firebase';

interface Project { 
  name: string;
  description: string;
}
// create an interface for the member data
export interface Member {
  id: string;
  firstName?: string;
  lastName?: string;

}

// create a query to get all the member from the firestore database
export const getAllMembers = async () => {
  const membersRef = collection(db, 'members');
  const membersSnapshot = await getDocs(membersRef);
  
  // Include id in the data
  let members: Member[] = membersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  // member has a field called projects, which is an array of project reference
  // turn that array into an array of project name and link to that project
  members = await Promise.all(members.map(async (member) => {
    if (member && Array.isArray(member.projects)) {
      const getProjects = await Promise.all(member.projects.map(async project => {
        
        const projectRef = project;
        const projectDoc = await getDoc(projectRef);

        return projectDoc.data();
      }));
     
      return {...member, projects: getProjects}
    }
    return {...member, projects: []};
  }));
  
  return (members);
}

// create a query to get all the project that the member has worked on, it is a many to many relationship
// add type check for the code below

export async function getProjectsForMember(memberId: string) {
    try {
      const memberProjectRef = collection(db, 'members');
      const memberProjectQuery = query(memberProjectRef, where('__name__', '==', memberId));
      const memberProjectSnapshot = await getDocs(memberProjectQuery);
      
      const memberProject = memberProjectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      
      // console.log('here is Projects for members', projectsForMembers);
      
      // return projectsForMembers;
    } catch (error) {
        console.log("Error getting projects:", error);
    }

  }


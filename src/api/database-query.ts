import {collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase/firebase';

// create a query to get all the member from the firestore database
export const getAllMembers = async () => {
    const membersRef = collection(db, 'members');
    const membersSnapshot = await getDocs(membersRef);
    const members = membersSnapshot.docs.map(doc => doc.data());
    return members;
}
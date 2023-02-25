import React, { createContext, useState, useContext } from 'react';
import { getAllMembers } from '../api/database-query';
import { Member } from '../api/database-query';
// Write a context provider that will provide the data to the children components
//  

export const memberContext = createContext({});

interface MemberProviderType {
    children: React.ReactNode;
}

export const memberProvider = ({ children }: MemberProviderType) => {
    const [members, setMembers] = useState<Member[]>([]);

    
    const getMembers = async () => {
        const members = await getAllMembers();
        setMembers(members);
    };

    React.useEffect(() => {
        getMembers();
    }, []);
    
    return (
        <memberContext.Provider value={{ members }}>
        {children}
        </memberContext.Provider>
    );
};

// write a custom hook that will return the data from the context
export const useMember = () => useContext(memberContext);
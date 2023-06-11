import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiousSecure from './useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const UseSelectClasses = () => {
    const{user,loading}=useContext(AuthContext);
    const [axiosSecure] = useAxiousSecure();
    const { refetch, data: selectClasses= [] } = useQuery({
        queryKey: ['selectClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectclasses?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [selectClasses, refetch]
};

export default UseSelectClasses;
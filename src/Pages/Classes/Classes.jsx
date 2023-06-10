import React, { useContext } from 'react';
import Cover from '../../Components/Cover/Cover';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import AllClasses from '../../Components/AllClasses/AllClasses';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Classes = () => {
    const{user}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const {data:allclasses=[],refetch}=useQuery({
        queryKey:['allclasses'],
        queryFn: async ()=>{
            const res=await fetch('https://art-and-ink-server-side.vercel.app/allclasses')
            return res.json();
        }
    })
    const addToSelect=(item)=>{
        const { class_name, instructor_name, image, price, available_seats,_id
        } = item
        if(user && user.email){
            const selectClass={classId:_id,class_name,instructor_name,image,price,available_seats,email:user.email}
            fetch('https://art-and-ink-server-side.vercel.app/selectclasses',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(selectClass)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This Class have been added on your class list .',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                
            })
        }
        else{
            Swal.fire({
                title: 'Please first login to Select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/registration/login', {state: {from: location}})
                }
              })
        }
    }
    
    return (
        <div>
            <Cover></Cover>
            <SectionTitle headingName={"All Classes"}></SectionTitle>
            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16'>
                {
                    allclasses.map(item=><AllClasses key={item._id} item={item} addToSelect={addToSelect} ></AllClasses>)
                }
            </div>
        </div>
    );
};

export default Classes;
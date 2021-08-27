import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'
import ProfileUserSection from '../../components/profile/profileUserSection'
import ContentWrapper from '../../components/home/contentWrapper';
import Head from 'next/head'
import {useSelector} from 'react-redux'

const Profile = () => {
    const router = useRouter()
    const { id } = router.query
    const user = useSelector(state => state.user)
    const [profile, setProfile] = useState({
        location: '',
        desc: '',
        username: '',
    })

    useEffect(() => {
        if(id){
            axios.post(process.env.ENDPOINT+'/get-user-by-id',{
                id: parseInt(id),
            },{
                headers: {
                    Authorization: `Bearer ${user.jwt}`
                }
            })
            .then(res => {
                console.log(res)
                setProfile({
                    location: res.data.location || '',
                    desc: res.data.desc || '',
                    username: res.data.username || '',
                })
            })
        }
        
  }, [id])
    return (
        <>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/twitter.png" />
            </Head>
            {/* User Profile {id} */}
            {/* Profile */}
            <ContentWrapper>
                <ProfileUserSection profile={profile}/>
            </ContentWrapper>
        </>
    )
}

export default Profile
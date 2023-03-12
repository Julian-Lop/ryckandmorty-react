import React, { useEffect } from 'react'
import { useFirebaseApp, useUser } from 'reactfire'
import {  useNavigate } from 'react-router-dom'

export default function AuthRoute({children}) {
	const navigate = useNavigate()
	const user = useUser()
	
	useEffect(()=>{
		if (!user.data) return navigate('/')
	},[user])

	return (
		<div>{children}</div>
	)
}
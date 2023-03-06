import React from 'react'
import { useFirebaseApp, useUser } from 'reactfire'
import {  useNavigate } from 'react-router-dom'

export default function AuthRoute({children}) {
	const navigate = useNavigate()
	const user = useUser()
	if (!user.data) return navigate('/')
	return (
		<div>{children}</div>
	)
}
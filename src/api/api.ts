import axios from 'axios'
import Cookies from 'js-cookie'

import { ENUSER } from '@/config/app.constants'

const API_URL = 'http://localhost:5000/api'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(ENUSER.TOKEN)
			? `Bearer ${Cookies.get('red')}`
			: ''
	}
})

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export function getToken() {
        return cookies.get('admin-token')
    }



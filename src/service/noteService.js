import AxiosHelper from '../helper/axios'

const getNotes = () => {
  const token = localStorage.getItem('token')
  let reqobj = {
    method: 'get',
    url: 'http://localhost:4000/notes',
    headers: {
      Authorization: `bearer ${token}`,
    },
  }
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response
    })
    .catch((err) => {
      throw err
    })
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getNotes }
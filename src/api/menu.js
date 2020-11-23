// eslint-disable-next-line no-unused-vars
import mock from '../../mock/menu'
import axios from 'axios'
/**
 *
 */
export async function getMenu () {
  var value = null
  await axios.post('/menu').then(async resp => {
    console.log('进来了《menu》', resp.data)
    value = await resp.data
  })
  console.log('data', value)
  return value
}

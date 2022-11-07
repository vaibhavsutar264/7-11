import baseConfig from './baseConfig'
import ApiRouteconstant from './ApiRouteconstant'

const {login}=ApiRouteconstant

//export API call for login route

export default {
    loginAPI(payload:{email:String, password:String}){
        return baseConfig.post(login,{...payload})
    }, 
}
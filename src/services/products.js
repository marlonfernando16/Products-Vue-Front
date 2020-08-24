import { http } from './config'

export default {
    list:() => {
        return http.get('products')
    },
    
    save:(product) => {
        return http.post('product', product)
    }
}
import { http } from './config'

export default {
    list:() => {
        return http.get('products')
    },
    
    save:(product) => {
        return http.post('product', product)
    },

    update:(product) => {
        return http.put('product', product)
    }
}
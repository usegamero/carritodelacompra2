console.log('Entrando en app.js');

let app = Vue.createApp({
    data(){
        return{
            userName:'Noelia Jose',
            generalItems:[
                {producto:'Pan' , unids:'1' , pu:'1.2', bought: false},
                {producto:'Queso' , unids:'2', pu:'3.7', bought:false},
                {producto:'Leche' , unids:'12' , pu:'0.84', bought:false},
                {producto:'Agua' , unids:'3' , pu:'2', bought:false},
            ] ,
           
            
           
            
           
        }
    },
    computed:{
        
        countProducts(){
            return this.filteredProducts.length
        },
        totalPrice(){
            this.total = 0;
            for (item of this.filteredProducts) {
                this.total += this.pricePerItem(item)
            } 
           
            return this.total       
        },
        filteredProducts(){
            let filteredProductList = [];
            for (item of this.generalItems) {
                if (!item.bought) {
                    filteredProductList.push(item);
                }

            }
            return filteredProductList;
        }


        
    },
    methods:{
        
    pricePerItem(item){
            
        return item.unids*item.pu
    },

    completeBoughtItem(item){
        item.bought = true

    }


 }

  

        

    });
   
app.mount('#vue-app');
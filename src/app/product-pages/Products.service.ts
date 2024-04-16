import{Product}from './Product.models';


export class Productservice{
   
    private products :Product[] = [
        {id:1,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (1).png' , color : 'white' , gender:'woman' , price: 340 , type:'Sport', favarite:false },
        {id:2,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (10).png' , color : 'red' , gender:'woman' , price: 270 , type:'Sport', favarite:false },
        {id:3,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (11).png' , color : 'black' , gender:'man' , price: 390 , type:'Sport', favarite:false },
        {id:4,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (12).png' , color : 'Purple' , gender:'man' , price: 220 , type:'Sport', favarite:false },
        {id:5,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (3).png' , color : 'black' , gender:'man' , price: 185 , type:'Sport', favarite:false },
        {id:6,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (4).png' , color : 'Purple' , gender:'woman' , price: 440 , type:'Sport', favarite:false },
        {id:7,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (5).png' , color : 'red' , gender:'man' , price: 320 , type:'Sport', favarite:false },
        {id:8,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (6).png' , color : 'red' , gender:'woman' , price: 300 , type:'Sport', favarite:false },
        {id:9,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (7).png' , color : 'blue' , gender:'man' , price: 160 , type:'Sport' , favarite:false},
        {id:10,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (8).png' , color : 'blue' , gender:'man' , price: 200 , type:'Sport', favarite:false },
        {id:11,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (12).png' , color : 'Purple' , gender:'woman' , price: 130 , type:'Sport', favarite:false },
        {id:12,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (9).png' , color : 'purple' , gender:'woman' , price: 230 , type:'Sport' , favarite:false},
        {id:13,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18.png' , color : 'white' , gender:'man' , price: 190 , type:'Sport' , favarite:false},
        {id:14,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (11).png' , color : 'black' , gender:'man' , price: 40 , type:'Sport' , favarite:false},
        {id:15,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (7).png' , color : 'blue' , gender:'woman' , price: 10 , type:'Sport' , favarite:false},

        
    ]
    getproducts(){

        return [...this.products]
    }

    getsliderproduct(){
        return [{id:1,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (1).png' , color : 'white' , gender:'woman' , price: 340 , type:'Sport', favarite:false },
        {id:2,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (10).png' , color : 'red' , gender:'woman' , price: 270 , type:'Sport', favarite:false },
        {id:3,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (11).png' , color : 'black' , gender:'man' , price: 390 , type:'Sport', favarite:false },
        {id:4,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (12).png' , color : 'Purple' , gender:'man' , price: 220 , type:'Sport', favarite:false },
        {id:5,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (3).png' , color : 'black' , gender:'man' , price: 185 , type:'Sport', favarite:false },
        {id:6,name:'اسپورت مدل 3410' , src:'../../assets/img/Products/Rectangle 18 (4).png' , color : 'Purple' , gender:'woman' , price: 440 , type:'Sport', favarite:false }]
    }

}
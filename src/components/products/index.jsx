import ProductItem from "./components/product-item";

const dummyProductData =['Product1','Product2','Product3'];





const ProductList=({name,city})=>{
  // console.log(props);
  // const{name,city}=props;
  //we can simply do it by using destructuring iside the parameter ki jgh
 return (
   <div>
     <h3> ecommerce project</h3>
     {/* <ProductItem/> */}
     <h4>
       name is {name} and he lives in {city}
     </h4>
     <ul>
       {
         dummyProductData.map((item,index)=>(<li key={index}>
          {item}
         </li>
          ))
       }
     </ul>
   </div>

   // now the question arises what if we have to pass the data from app.jsx to index.jsx  then we have to props 

 );
}
export default ProductList;
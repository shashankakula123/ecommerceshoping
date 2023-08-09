import React, { useEffect, useState } from 'react'
import './ProductsPage.css';

export default function ProductsPage(props) {
      const [edit,setEdit]=useState(false);
console.log(props.list,"array");
      const handleEdit=()=>{
            setEdit(!edit);
      }

  return (
    <div className='products'>
      <div className='sort'>Sort by price</div>

      {props.list.map((list)=>{  

return (<div className='productmain'>
<div className='productleft' >
      <div>
      <img className='productimage' src={list.productimage} alt=''/>
      </div>
      <div className='producttitle'>
            <p><b>{list.producttitle}</b></p>
            
            <p className='rupees'>Rs {list.price}</p>
            <p><span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
             <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
              <span class="fa fa-star"></span></p>
      </div>

</div>
<div className='productright'>
      <div className='first'>
      <a className='productcontent'>This is a well designed and crafted product that will suit many needs,in terms of quality, craftsmanship and aesthetics.</a>
      </div>
      <div className='second'>

            {edit?(<div> <span class="fas fa-highlighter checkedtwo" onClick={handleEdit}></span>
      <span class="fa fa-trash-o checkedtwo"></span> </div>):( <div><button className='cancel' onClick={handleEdit}>Cancel</button>
      <button className='save'>Save</button></div>)}
     
     
      </div>
</div>
</div>
);  

})  }
          </div>
  )
}

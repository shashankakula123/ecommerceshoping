import React from 'react';
import './AddProduct.css';
export default function AddProduct() {
  return (
    <div className='addproduct'>
<h2>Add a Product</h2>
<form>
      <label className='name'>Name</label>
      
      <br/>
      <input type='text' className='nametext' />

      <br/>
      <label className='name'>Description</label>
      
      <br/>
      <input type='text' className='nametext' />

      
      <br/>
      <label className='name'>Price</label>
      
      <br/>
      <input type='text' className='nametext' />

      
      <br/>
      <label className='name'>Rating</label>
      
      <br/>
      <input type='text' className='nametext' />

      <br/>
      <button className='add'>Add</button>
</form>
    </div>
  )
}

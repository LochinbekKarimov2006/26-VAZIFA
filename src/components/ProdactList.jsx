import React from 'react';
import { NavLink } from 'react-router-dom';

function ProdactList({ products }) {
    return (
        <div className='div1'>
            {products.map(product => (
               <NavLink key={product.id} to={`/components/${product.id}`}>

                <div className=" w-96 bg-base-100 shadow-xl">
                <figure className='mx-11'><img src={product.thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end flex text-centor" style={{display :'flex'}}>
                    <p className='text-teal-600 font-bold text-start'>${product.price}</p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
               </NavLink>
            ))}
        </div>
    );
}

export default ProdactList;

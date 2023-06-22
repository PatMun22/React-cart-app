import React from 'react';
import ItemsCard from './itemsCard';
import data from './data';

function Home() {
    console.warn(data.productData);

    return(
        <>
            <h1 className='text-center mt-3'>All Items</h1>
                <section className='py-4 container'>
                    <div className='row justify-content-center'>
                        {data.productData.map((item, index) => {
                            return(
                                <ItemsCard img={item.img} title={item.title} desc={item.desc} price={item.price} key={index}/>
                            ) 
                        })}
                    </div>
                </section>
        </>
    )
}

export default Home;
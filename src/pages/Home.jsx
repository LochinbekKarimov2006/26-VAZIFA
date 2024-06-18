import React from 'react';
import useFetch from '../hooks/UseFetch';
import ProdactList from '../components/ProdactList';

function Home() {
    const { data, isPending, error } = useFetch("https://dummyjson.com/products");

    console.log(data);
    
    return (
        <>
            {isPending && <span className="loading loading-spinner loading-lg"></span>}
            {error && <div>{error}</div>}
            {data && <ProdactList products={data.products} />}
        </>
    );
}

export default Home;

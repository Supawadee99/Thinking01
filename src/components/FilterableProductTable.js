import React,{useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

import PRODUCTS  from '../data/data';

function FilterableProductTable() {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div className="box">
        <div className="filter-table">
            {/* Filter table */}
            <SearchBar 
             filterText={filterText}
             setFilterText={setFilterText}
             inStockOnly={inStockOnly} 
             setInStockOnly={setInStockOnly}
             />

            <ProductTable 
            products={PRODUCTS}
            filterText={filterText}
            inStockOnly={inStockOnly} />
               
        </div>
        </div>
    )
}

export default FilterableProductTable
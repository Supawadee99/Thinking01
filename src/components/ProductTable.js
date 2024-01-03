import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable(props) {
    const {products, filterText, inStockOnly} = props
    console.log(products)
    const rows = [];
    let lastCategory = null;
    // products.forEach((product) => {
    //     if (
    //         product.name.toLowerCase().indexOf(
    //           filterText.toLowerCase()
    //         ) === -1
    //       ) {
    //         return;
    //       }
    //       if (inStockOnly && !product.stocked) {
    //         return;
    //       }
    //     if (product.category !== lastCategory) {
    //       rows.push(
    //         <ProductCategoryRow
    //           category={product.category}
    //           key={product.category} />
    //       );
    //     }
    //     rows.push(
    //       <ProductRow
    //         product={product}
    //         key={product.name} />
    //     );
    //     lastCategory = product.category;
    //   });
    const myFilter = products.filter(el => {
        return (
          (el.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) &&
          (!inStockOnly || (inStockOnly && el.stocked))
        );
      });
      
      const finalList = myFilter.reduce((a, c) => {
        if (c.category !== a.lastCategory) {
          a.output=[...a.output,<ProductCategoryRow key={c.category} category={c.category} />]
          a.lastCategory = c.category
        }
        a.output=[...a.output,<ProductRow key={c.name} product={c} />]
        return a
      }, { lastCategory: null, output: [] })
      
      return (
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {finalList.output}
          </tbody>
        </table>
      );
      }      

export default ProductTable;
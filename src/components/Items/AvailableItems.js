import TOP_DEALS from './Content';
import Cards from './Cards' // Import Cards component to display individual product cards

const AvailableItems = ({category}) => {
    let filteredProducts = TOP_DEALS;   // Initialize filteredProducts with all available products
    // Filter products based on the selected category
    if(category !== "All"){
        filteredProducts = TOP_DEALS.filter((product) => product.category === category);
    }

    return(
        <div className='App'>
        {filteredProducts.map(item => (
            <Cards 
                id={item.id} 
                key={item.id}
                name={item.name} 
                description={item.description}
                price={item.price} 
                image={item.image}
            />
        ))}
    </div>

    );
};

export default AvailableItems;
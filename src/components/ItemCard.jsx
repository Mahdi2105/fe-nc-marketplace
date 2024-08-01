const ItemCard = ({item}) => {
    return (
        <li>
            <img src={item.img_url}/>
            <h3>Name: {item.item_name}</h3>
            <p>Price: £{item.price}</p>
        </li>
    )
}

export default ItemCard
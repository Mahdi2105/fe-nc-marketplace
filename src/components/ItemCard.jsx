import { Card, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Card>
      <Link to={`/items/${item.item_id}`}>
        <CardHeader title={item.item_name} />
      </Link>
      <img src={item.img_url} />
      <p>Price: £{item.price}</p>
    </Card>
  );
};

export default ItemCard;

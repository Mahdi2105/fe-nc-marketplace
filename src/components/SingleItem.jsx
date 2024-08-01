import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../api";

const SingleItem = () => {
  const [item, setItem] = useState({});

  const { item_id } = useParams();

  useEffect(() => {
    getItemById(item_id).then((item) => {
      setItem(item);
    });
  }, [item_id]);

  return (
    <div>
      <h3>{item.item_name}</h3>
      <img src={item.img_url} />
      <p>Price: £{item.price}</p>
      <p>Category: {item.category_name}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default SingleItem;

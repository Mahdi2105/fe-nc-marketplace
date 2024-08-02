import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { postItem } from "../../api";

const AddItem = () => {
  function onSubmitItem(event) {
    event.preventDefault();

    console.log(event);
    const itemName = event.target[0].value;
    const itemPrice = event.target[4].value;
    const itemImgUrl = event.target[2].value;
    const itemCategory = event.target[6].value || null;
    const itemDesc = event.target[8].value || null;

    const itemObject = {
      item_name: itemName,
      img_url: itemImgUrl,
      description: itemDesc,
      category_name: itemCategory,
      price: itemPrice,
      listed_by: 1,
    };

    postItem(itemObject).then((result) => {
      console.log(result, "HERE");
    });
  }

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={onSubmitItem}>
        <TextField name="item-name" label="Name" variant="outlined" required />
        <TextField
          name="item-image-url"
          label="Image URL"
          variant="outlined"
          required
        />
        <TextField
          name="item-price"
          type="number"
          label="Price"
          variant="outlined"
          required
        />
        <TextField
          name="item-category"
          label="Category"
          variant="outlined"
          required
        />
        <TextField
          name="item-description"
          label="Description"
          variant="outlined"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddItem;

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { postItem } from "../../api";

const AddItem = () => {
  function onSubmitItem(formData) {
    const itemName = formData.get("item-name");
    const itemImgUrl = formData.get("item-image-url");
    const itemPrice = formData.get("item-price");
    const itemCategory = formData.get("item-category");
    const itemDesc = formData.get("item-description");

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
      <form action={onSubmitItem}>
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
        <TextField name="item-category" label="Category" variant="outlined" />
        <TextField
          name="item-description"
          label="Description"
          variant="outlined"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddItem;

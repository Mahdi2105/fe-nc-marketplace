import TextField from "@mui/material/TextField";

const AddItem = () => {
  return (
    <div>
      <h2>Add Item</h2>
      <form action="">
        <TextField id="item-name" label="Name*" variant="outlined" />
        <TextField id="item-image-url" label="Image URL*" variant="outlined" />
        <TextField id="item-price" label="Price*" variant="outlined" />
        <TextField id="item-category" label="Category" variant="outlined" />
        <TextField
          id="item-description"
          label="Description"
          variant="outlined"
        />
      </form>
    </div>
  );
};

export default AddItem;

export const checkedItemAddedToCart = (id, cartItem) => {
  let added = false;
  const findItem = cartItem?.orderItems?.find(
    (item) => item._id === id
  );
  if (findItem) {
    added = true;
  }
  return added;
};

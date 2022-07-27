const totalPrice = items.reduce((total, item) => {
  return total + item.price
}, 0)
export const addItemServices = (item, itemName) => {
  let client = JSON.parse(localStorage.getItem('client'));
  let data = { email: '', phone: '', reference: '', default: 0 };

  (itemName === 'emails') ? delete data.phone : delete data.email;
  item.push(data);

  client[itemName] = item;
  localStorage.setItem('client', JSON.stringify(client));

  return item;
};

export const setItemServices = (e, index, field, item, itemName) => {
  let client = JSON.parse(localStorage.getItem('client'));

  item[index][`${field}`] = e.target.value;
  client[itemName] = item;
  localStorage.setItem('client', JSON.stringify(client));

  return item;
};

export const removeItemServices = (index, item, itemName) => {
  let client = JSON.parse(localStorage.getItem('client'));

  if (!item[index].default) {
    item = item.filter((data, index2) => index !== index2);
  }
  client[itemName] = item;
  localStorage.setItem('client', JSON.stringify(client));

  return item;
};
// TODO: Do the documentation of any function

export const addItemServices = (item, itemName) => {
  let data = { email: '', phone: '', reference: '', default: 0 };

  (itemName === 'emails') ? delete data.phone : delete data.email;
  item.push(data);
  setClient(item, itemName);

  return item;
};

export const setItemServices = (e, index, field, item, itemName) => {
  if (!item[index]._id) {
    const isDefault = (field === 'default') ? true : false;

    if (isDefault) {
      item = item.map(x => {
        return { ...x, default: 0 };
      });
    }
    item[index][`${field}`] = isDefault ?  parseInt(e.target.value) : e.target.value;
    setClient(item, itemName);
  }

  return item;
};

export const removeItemServices = (index, item, itemName) => {
  if (item.length === 1) {
    item[index].default = 1;
  } else if (!item[index].default) {
    item = item.filter((data, index2) => index !== index2);
  }
  setClient(item, itemName);

  return item;
};

const setClient = (item, itemName) => {
  let client = JSON.parse(localStorage.getItem('client'));
  client[itemName] = item;
  localStorage.setItem('client', JSON.stringify(client));
};
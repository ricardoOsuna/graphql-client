export const setClientService = (e, field = '', type = '', client = false) => {
  const item = { reference: '', default: 0 };
  client = !client ? JSON.parse(localStorage.getItem('client')) : client;

  switch(type) {
    case 'emails':
      client.emails.push({ email: '', ...item });
    break;
    case 'phones':
      client.phones.push({ phone: '', ...item });
    break;
    default:
      client[`${field}`] = e.target.value;
  }

  localStorage.setItem('client', JSON.stringify(client));
  if (type === 'emails' || type === 'phones') {
    return client;
  }
};

export const setItemService = (e, index, field, item) => {
  let client = JSON.parse(localStorage.getItem('client'));
  client[item][index][`${field}`] = e.target.value;
  localStorage.setItem('client', JSON.stringify(client));

  if (field === 'default') {
    return client;
  }
};

export const removeItemservice = (state, item, index) => {
  let { client } = state;

  if (parseInt(client[item][index].default)) {
    return {
      ...state,
      error: { err: true, msg: `This item is default option` }
    }
  } else {
    client[item] = client[item].filter((data, index2) => index2 !== index);
    return {
      ...state,
      error: { err: false, msg: undefined },
      client,
    }
  }
};

export const getClientService = e => {
  e.preventDefault();
  const client = JSON.parse(localStorage.getItem('client'));

  if (client) {
    const { firstName, lastName, birthdate, age, company, status, /*emails, phones*/ } = client;
    return {
      firstName,
      lastName,
      birthdate,
      age: !isNaN(parseInt(age)) ? parseInt(age) : 0,
      company,
      status: !isNaN(parseInt(status)) ? parseInt(status) : 1,
    }
  }

  return false;
}
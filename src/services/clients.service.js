export const setClient = (e, field = '', type = '') => {
  const item = { reference: '', default: 0 }
  let client = JSON.parse(localStorage.getItem('client'));

  console.log('localstorage => ', JSON.parse(localStorage.getItem('client')));
  client.emails.push({ email: '', ...item });

  // switch(type) {
  //   case 'emails':
  //     client.emails.push({ email: '', ...item });
  //   break;
  //   case 'phones':
  //     client.phones.push({ phone: '', ...item });
  //   break;
  //   default:
  //     client[`${field}`] = e.target.value;
  // }
  console.log('client => ', client);

  // localStorage.setItem('client', JSON.stringify(client));
  if (type === 'emails' || type === 'phones') {
    return client;
  }
};

export const getClient = e => {

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
export const setClient = (e, field = '', type = '') => {
  const client = JSON.parse(localStorage.getItem('client'));

  switch(type) {
    case 'emails':
      client.emails.push({ email: '', reference: '', default: 0 });
    break;
    case 'phones':
      client.phones.push({ phone: '', reference: '', default: 0 });
    break;
    default:
      client[`${field}`] = e.target.value;
  }

  localStorage.setItem('client', JSON.stringify(client));
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
      status: !isNaN(parseInt(status)) ? parseInt(status) : 0,
    }
  }

  return false;
}
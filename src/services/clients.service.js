export const getClientService = () => {
  const client = JSON.parse(localStorage.getItem('client'));

  if (client) {
    const { firstName, lastName, birthdate, age, company, status, emails, phones } = client;
    return {
      firstName,
      lastName,
      birthdate,
      age: !isNaN(parseInt(age)) ? parseInt(age) : 0,
      company,
      status: !isNaN(parseInt(status)) ? parseInt(status) : 1,
      emails: emails.map(x => { return { ...x, default: parseInt(x.default)}}),
      phones: phones.map(x => { return { ...x, phone: parseInt(x.phone), default: parseInt(x.default)}}),
    }
  }

  return false;
}
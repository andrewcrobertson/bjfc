export const toContactMethods = (contactMethods: any[]) => {
  const phone = [];
  const email = [];
  const other = [];
  const used = {};

  for (let i = 0; i < contactMethods.length; i++) {
    const contactMethod = contactMethods[i];
    if (used[contactMethod.value]) {
      other.push({ type: null, value: null });
    } else if (contactMethod.type === null || contactMethod.value === null) {
      other.push({ type: null, value: null });
    } else if (contactMethod.type === 'Phone') {
      phone.push(contactMethod);
    } else if (contactMethod.type === 'Email') {
      email.push(contactMethod);
    } else {
      other.push({ type: null, value: null });
    }

    used[contactMethod.value] = true;
  }

  return [...phone, ...email, ...other];
};

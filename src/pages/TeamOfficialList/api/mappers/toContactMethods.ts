export const toContactMethods = (contactMethods: any[]) => {
  const phone = [];
  const email = [];
  const used = {};

  for (let i = 0; i < contactMethods.length; i++) {
    const contactMethod = contactMethods[i];
    if (used[contactMethod.value] || contactMethod.type === null || contactMethod.value === null) {
      // Ignore
    } else if (contactMethod.type === 'Phone') {
      phone.push(contactMethod);
    } else if (contactMethod.type === 'Email') {
      email.push(contactMethod);
    }

    used[contactMethod.value] = true;
  }

  return [...phone, ...email];
};

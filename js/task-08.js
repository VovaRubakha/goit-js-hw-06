const formRef = document.querySelector(`.login-form`);

formRef.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === `` || password.value === ``) {
    alert("Заповніть Всі поля!");
  }
  console.log(`Login - ${email.value}; Password - ${password.value} `);
  e.currentTarget.reset();
});

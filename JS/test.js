function demo(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name + " ok"), delay);
  });
}

Promise.all([
  demo("A", 1000),
  demo("B", 500)
])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });

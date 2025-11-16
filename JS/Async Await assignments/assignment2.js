async function data() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    if (data) {
      let response2 = await fetch(
        `https://jsonplaceholder.typicode.com/users/${data.userId}`
      );
      let data2 = await response2.json();
      console.log("Author:", data2.name);
    }
  } catch (err) {
    console.log(err.message);
  }
}
data();

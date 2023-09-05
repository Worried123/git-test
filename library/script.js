const booklist = [];
function bookobj(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const bookShelf = document.querySelector(".bookshelf");
const addButton = document.querySelector(".add");
addButton.addEventListener("click", (e) => {
  const login = document.createElement("form");
  login.setAttribute("action", "#");
  const bookName = document.createElement("input");
  const authorOftheBook = document.createElement("input");
  const pages = document.createElement("input");
  const submit = document.createElement("button");
  const button = document.createElement("div");
  const goback = document.createElement("button");
  pages.required = true;
  bookName.required = true;
  authorOftheBook.required = true;
  pages.setAttribute("type", "number");
  login.classList.add("login");
  button.classList.add("login-buttons");
  bookName.classList.add("loginInput");
  authorOftheBook.classList.add("loginInput");
  pages.classList.add("loginInput");
  submit.classList.add("login-button");
  goback.classList.add("login-button");
  goback.setAttribute("type", "button");
  pages.setAttribute("min", "1");
  submit.setAttribute("type", "submit");
  bookName.setAttribute("placeholder", "book name");
  authorOftheBook.setAttribute("placeholder", "author of book");
  pages.setAttribute("placeholder", "amount of pages");
  submit.textContent = "submit";
  goback.textContent = "go back";
  document.body.append(login);
  login.append(bookName);
  login.append(authorOftheBook);
  login.append(pages);
  login.append(button);
  button.append(goback);
  button.append(submit);
  goback.addEventListener("click", (e) => {
    login.remove();
  });
  submit.addEventListener("click", (e) => {
    if (
      pages.validity.valid &&
      bookName.validity.valid &&
      authorOftheBook.validity.valid
    ) {
      const button = document.createElement("div");
      const read = document.createElement("button");
      const clear = document.createElement("button");
      const book = document.createElement("div");
      const name = document.createElement("p");
      const author = document.createElement("p");
      const bookPages = document.createElement("p");
      clear.classList.add("remove");
      book.classList.add("book");
      name.classList.add("name");
      author.classList.add("author");
      bookPages.classList.add("pages");
      button.classList.add("buttons");
      read.classList.add("read");
      clear.setAttribute("type", "button");
      name.innerText = bookName.value;
      author.innerText = authorOftheBook.value;
      clear.textContent = "remove";
      bookPages.innerText = `${+pages.value} pages`;
      read.textContent = "read";
      bookShelf.append(book);
      book.append(name);
      book.append(author);
      book.append(bookPages);
      book.append(button);
      button.append(clear);
      button.append(read);
      let books = new bookobj(
        name.textContent,
        author.textContent,
        pages.textContent
      );
      booklist.push(books);
      console.log(booklist);
      clear.addEventListener("click", (e) => {
        book.remove();
      });
      read.addEventListener("click", (e) => {
        read.style.backgroundColor = "green";
      });
      login.remove();
    } else {
      reportValidity();
      e.preventDefault();
    }
  });
});
const read = document.querySelectorAll(".read");
const books = document.querySelectorAll(".book");
const clear = document.querySelectorAll(".remove");
books.forEach((e) => {
  clear.forEach((i) => {
    i.addEventListener("click", (event) => {
      e.remove();
    });
  });
  read.forEach((r) => {
    r.addEventListener("click", (event) => {
      r.style.backgroundColor = "green";
    });
  });
});

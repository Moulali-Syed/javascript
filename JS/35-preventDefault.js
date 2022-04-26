/*
 <a href="https://google.com" id="'anchor">click me</a>
*/

let link = document.getElementById('anchor');
link.addEventListener('click', function (e) {
  console.log('link clicked...');
  e.preventDefault();
});

/*
<form action="" id="myForm">
      <input type="text" />
      <input type="submit" />
    </form>
*/

let form = document.getElementById('myForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});

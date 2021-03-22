const buttonLoadJson = document.querySelector('#btnKurs').addEventListener('click', buttonLoadJsonClicked);
const spinner = document.querySelector('#spinner');

const displayView = document.querySelector('#display');

/* async nyckelordet gör att funktionen nu returnerar ett "Promise"*/

//Hämta lokal json fil...
async function getJson() {
  spinner.classList.remove('hidden');
  const response = await fetch('./content/allCourses.json');

  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
}

function buttonLoadJsonClicked() {
  getJson()
    .then(data => {
      let html = '';

      data.forEach(function (course) {
        html += `<div>${course.id} <span>${course.title}</span></br><span><i>${course.description}</i></span></br><span>${course.length}</span></div>`;
      });
      renderHtml(html);

    })
    .catch(err => console.log(err));
}


function renderHtml(html){
  spinner.classList.add('hidden');
  displayView.innerHTML = html;
}
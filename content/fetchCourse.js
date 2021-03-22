const buttonLoadKurs = document.querySelector('#btnKurs').addEventListener('click', buttonLoadKursClicked);
const buttonLoadPop = document.querySelector('#btnPop').addEventListener('click', buttonLoadPopClicked);
const spinner = document.querySelector('#spinner');

const displayKursView = document.querySelector('#displayKurs');
const displayPopView = document.querySelector('#displayPop');


async function getKurs() {
  spinner.classList.remove('hidden');
  const responsekurs = await fetch('./content/allCourses.json');

  if (!responsekurs.ok) throw new Error(response.statusText);

  return await responsekurs.json();
}

async function getPop() {
    spinner.classList.remove('hidden');
    const responsePop = await fetch('./content/popCourses.json');
  
    if (!responsePop.ok) throw new Error(responsepop.statusText);
  
    return await responsePop.json();
}


function buttonLoadKursClicked() {
  getKurs()
    .then(data => {
      let  kurshtml = '';

      data.forEach(function (course) {
        kurshtml += `<div>${course.id} <span>${course.title}</span></br><span><i>${course.description}</i></span></br><span>${course.length}</span></div>`
      });
      renderKursHtml(kurshtml);

    })
    .catch(err => console.log(err));  
}

function buttonLoadPopClicked() {
    getPop()
      .then(data => {
        let pophtml = '';
  
        data.forEach(function (course) {
          pophtml += `<div>${course.id} <span>${course.title}</span></br><span><i>${course.description}</i></span></br><span>${course.length}</span></div>`
        });
        renderPopHtml(pophtml);
  
      })
      .catch(err => console.log(err));
  }

function renderKursHtml(kurshtml){
  spinner.classList.add('hidden');
  displayKursView.innerHTML = kurshtml;
}
function renderPopHtml(pophtml){
    spinner.classList.add('hidden');
    displayPopView.innerHTML = pophtml;
  }
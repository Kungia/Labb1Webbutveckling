const buttonLoadKurs = document.querySelector('#btnKurs').addEventListener('click', buttonLoadKursClicked);
const buttonLoadPop = document.querySelector('#btnPop').addEventListener('click', buttonLoadPopClicked);
const spinner = document.querySelector('#spinner');

const displayKursView = document.querySelector('#displayKurs');
const displayPopView = document.querySelector('#displayPop');


async function getKurs() {
 // spinner.classList.remove('hidden');
  document.getElementById("displayPop").innerHTML="";

  const responsekurs = await fetch('./content/allCourses.json');
  
  if (!responsekurs.ok) throw new Error(response.statusText);

  return await responsekurs.json();
}

async function getPop() {
    //spinner.classList.remove('hidden');
    document.getElementById("displayKurs").innerHTML="";

    const responsePop = await fetch('./content/popCourses.json');
  
    if (!responsePop.ok) throw new Error(responsepop.statusText);
    
    return await responsePop.json();
}

function buttonLoadKursClicked() {
  getKurs()
    .then(data => {
      let  kurshtml = '';

      data.forEach(function (course) {
        kurshtml += `<div></br>${course.id} <span><b>${course.title}</b></span></br><span><i>${course.description}</i></span></br><span>${course.length+"p"}</span></div>`
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
          pophtml += `<div></br>${course.id} <span><b>${course.title}</b></span></br><span><i>${course.description}</i></span></br><span>${course.length+"p"}</span></div>`
        });
        renderPopHtml(pophtml);
  
      })
      .catch(err => console.log(err));
  }

function renderKursHtml(kurshtml){
  if  (!document.getElementById("displayKurs").innerHTML=="")
  {
    document.getElementById("displayKurs").innerHTML="";
  }

  else
  {
  spinner.classList.add('hidden');
  displayKursView.innerHTML = kurshtml;
  }
  
}
function renderPopHtml(pophtml){
  if  (!document.getElementById("displayPop").innerHTML=="")
  {
    document.getElementById("displayPop").innerHTML="";
  }

  else
  {
    spinner.classList.add('hidden');
    displayPopView.innerHTML = pophtml;
  }
} 
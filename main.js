/* Homepage Functions */
function on() {
  document.getElementById('overlay').style.display = 'block';
}
function off() {
  document.getElementById('overlay').style.display = 'none';
}
document.querySelector('#menu').addEventListener('click', () => on());
document.querySelector('.close-icon').addEventListener('click', () => off());
document.querySelectorAll('.text-a').forEach((item) => {
  item.addEventListener('click', () => off());
});

/* Dynamic Project Popup Functions */
function projectOn() {
  document.getElementById('output').style.display = 'block';
}
function projectOff() {
  document.getElementById('output').style.display = 'none';
}
function getProject(pIndex) {
  projectOn();
  fetch('projects.json')
    .then((res) => res.json())
    .then((data) => {
      const output = `
   <div class="project_overlay">
    <div class="project_structure_overlay">
        <div> 
            <button class="project_overlay_btn_close"> X </button>
        </div>
        <div class="project_heading_overlay">
                <h2 class="title_overlay"> ${data[pIndex].name} </h2>
                <ul class="project_body_title_list">
                    <li class="title_list_main_overlay">${data[pIndex].projectClient}</li>
                    <span class="bullet bullet1"></span>
                    <li>${data[pIndex].projectInfo[0]}</li>
                    <span class="bullet bullet1"></span>
                    <li>${data[pIndex].projectInfo[1]}</li>
                </ul>
        </div>
        <div> <img class="image_ovlerlay" src=${data[pIndex].image} alt="snapshoot"> </div>
        <div class="project_body_overlay">
            <div class="text_group_overlay">
                <p>${data[pIndex].mainText}</p>
            </div>
                <hr>
            <div class="btn_group_overlay">
            <ul class="project_tech_overlay">
                    <li>${data[pIndex].technologies[0]}</li>
                    <li>${data[pIndex].technologies[1]}</li>
                    <li>${data[pIndex].technologies[2]}</li>
                </ul>
                <button onclick=window.open(${data[pIndex].liveVersionLink[1]}) class="overlay_btn btn"> <ul class="btn-popup"> <li> See Live </li> <li><img src="./images/Icon_Export.png" ></li> </ul>   </button>
                <button onclick=window.open(${data[pIndex].linkToSource[1]}) class="overlay_btn btn"> <ul class="btn-popup"> <li> See Source </li> <li><img src="./images/github_in_button.png" ></li> </ul> </button>
            </div>
        </div>
    
    </div>
    </div>`;

      document.getElementById('output').innerHTML = output;
      document.querySelector('.project_overlay_btn_close').addEventListener('click', () => projectOff());
    });
}

/* Dynawic Project Section */
function getCard() {
  let output2 = '';

  fetch('projects.json')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((pIndex) => {
        output2 += `
        
        <div id="portfolio" class="card-work">
        <div class="card-img">
            <img src="${pIndex.image}" alt="snapshoot">
        </div>
            
        <div class="card-text">
            <h2>${pIndex.name}</h2>
            <ul class="project-details">
                <li>${pIndex.projectClient}</li>
                <span class="bullet"></span>
                <li>${pIndex.projectInfo[0]}</li>
                <span class="bullet"></span>
                <li>${pIndex.projectInfo[1]}</li>
            </ul>
            <p>${pIndex.mainText}</p>
            <ul class="project-stack">
                <li>${pIndex.technologies[0]}</li>
                <li>${pIndex.technologies[1]}</li>
                <li>${pIndex.technologies[0]}</li>
            </ul>
            <button id="project-one" class="get-project btn" type="button">See Project</button>
        </div>
        
    </div>`;
        document.getElementById('output2').innerHTML = output2;
        document.querySelectorAll('.get-project').forEach((item, index) => {
          item.addEventListener('click', () => getProject(index));
        });
      });
    });
}



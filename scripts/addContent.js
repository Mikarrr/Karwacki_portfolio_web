let projectsHTML = "";

projects.forEach((project) => {
  projectsHTML += `
  <div class="project">
    <h3>${project.name}</h3>
    <h2>{ ${project.name} }</h2>
    <img src="../photos/logo.png" alt="" />
    <p>Created - ${project.date}</p>
    <img
      class="project_img"
      src="${project.image}"
      alt=""
    />
    <div class="image_description">
    <p>See the highlights of this website.</p>
    <a href="${project.src}"> <i class="fa fa-github" style="font-size:17px"></i> SOURCE CODE &dharr;</a>
    </div>
    </div>
    `;
});
document.querySelector(".js-projects-grid").innerHTML = projectsHTML;

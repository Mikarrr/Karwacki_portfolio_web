let projectsHTML = "";

projects.forEach((project) => {
  // Ustal, czy rozdzielczość jest poniżej 700px
  const isMobileResolution = window.innerWidth < 700;

  // Wybierz odpowiednią ścieżkę do obrazka w zależności od rozdzielczości
  const imageSource = isMobileResolution ? project.image_mobile : project.image;

  // Check if the src attributes have non-empty values
  const htmlLogo = project.html
    ? `<img class="logo_project" src="${project.html}" alt="" />`
    : "";
  const cssLogo = project.css
    ? `<img class="logo_project" src="${project.css}" alt="" />`
    : "";
  const jsLogo = project.js
    ? `<img class="logo_project" src="${project.js}" alt="" />`
    : "";
  const figmaLogo = project.figma
    ? `<img class="logo_project" src="${project.figma}" alt="" />`
    : "";
  const phLogo = project.ph
    ? `<img class="logo_project" src="${project.ph}" alt="" />`
    : "";
  const phpLogo = project.php
    ? `<img class="logo_project" src="${project.php}" alt="" />`
    : "";

  // Check if either project.src or project.srcweb has a non-empty value
  const linksSection =
    project.src || project.srcweb
      ? `
      <div class="links">
        ${
          project.src
            ? `<a href="${project.src}"><i class="fa fa-github" style="font-size:17px"></i> SOURCE CODE &dharr;</a>`
            : ""
        }
        ${
          project.srcweb
            ? `<a href="${project.srcweb}"><i class="fa-solid fa-globe" style="font-size:17px"></i> WEBSITE &dharr;</a>`
            : ""
        }
      </div>
    `
      : "";

  projectsHTML += `
    <div class="project">
      <div class=project_left>
        <h2 class="anim">${project.name}</h2>
        <img class="logo_project anim" src="../photos/logo.png" alt="" />
        <p class="anim">Created - ${project.date}</p>
      </div>
      <div class="project_right ">
        <div class="project_img anim" style="background-image: url(${imageSource});"></div>
        <div class="image_description anim">
          <div class="image_description_top">
            <p>See the highlights of this website.</p>
            ${linksSection}
          </div>
          <div class="image_description_down">
            <div>
              <p>Technologies used to create the website:</p>
            </div>
            <div class="technologies ">
              ${htmlLogo}
              ${cssLogo}
              ${jsLogo}
              ${figmaLogo}
              ${phLogo}
              ${phpLogo}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector(".main_projects").innerHTML = projectsHTML;

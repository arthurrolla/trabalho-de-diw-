const perfil = document.querySelector('#perfil');

function getApiGitHub() {
    fetch('https://api.github.com/users/arthurrolla')
        .then(async res => {
            if (!res.ok) {
                throw new Error(res.status);
            }

            let data = await res.json();
            let project = document.createElement('div');

            project.innerHTML = `
                    <div class="row d-flex justify-content-evenly align-items-center">
        <div class="titulo col-md-12">
          <h2>Perfil</h2>
        </div>
        <div class="col-md-5">
          <img class="perfil img-fluid" id="fotoPerfil" src="${data.avatar_url}" alt="FtPerfil">
        </div>
        <div id="descricao" class="col-md-7">
          <p class="text-primary">${data.name}</p>
          <p>${data.bio}</p>
          <div class="informacoes">
            <div class="informacoes-item">
              <p><b>Localização: </b>${data.location}</p>
              <p><b>Site: <a href="https://icei.pucminas.br/">https://icei.pucminas.br/</a></b></p>
            </div>
            <div class="informacoes-pessoas">
              <img src="/trabalho/imgs/do-utilizador.png" alt="FtPerfil">
              <p>476</p>
            </div>
          </div>
          <a href="${data.blog}">
            <img id="images" class="insta image-fluid" src="/trabalho/imgs/instagram.jpg" alt="Insta">
          </a>
        </div>
      </div>`;

            perfil.appendChild(project);
        })
}
getApiGitHub();
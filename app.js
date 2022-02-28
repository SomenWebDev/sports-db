const allPlayers = () => {
  const searchValue = document.getElementById("search-box").value;
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showPlayerDetail(data.player));
  console.log(searchValue);
};

const showPlayerDetail = (players) => {
  for (const player of players) {
    const playerContainer = document.getElementById("player-container");
    const div = document.createElement("div");
    div.innerHTML = ` <div class="card border p-5">
                                  <div class="pro-pic">
                                      <img class="w-25" src="${player.strThumb}" alt="" />
                                  </div>
                                  <h2>Name:${player.strPlayer}</h2>
                                  <h5>Country:${player.strNationality}</h5>
                                  <p></p>
                                  <div class="allbutton">
                                      <button class="btn btn-danger">Delete</button>
                                      <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                                  </div>
                      </div>`;

    playerContainer.appendChild(div);
    console.log(player);
  }
};
const details = (id) => {
  console.log(id);
  const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setDetails(data.players[0]));
};

const setDetails = (info) => {
  console.log(info);
  const detailsContainer = document.getElementById("details-container");
  const div = document.createElement("div");
  div.innerHTML = `
  <img src="" alt="">
  <h1>Name: ${info.strPlayer}</h1>
  
  `;

  detailsContainer.appendChild(div);
};

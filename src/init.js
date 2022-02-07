const config = {
  width: 420,
  height: 280,
  parent: "container", //padre del "canvas"
  typo: Phaser.AUTO, //reconoce si usar webgl o canvas
  scene: {
    //escena y sus funciones
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {}
function create() {}
function update(time, delta) {
  //delta se usa para que el rendimiento sea igual
  console.log(delta);
}

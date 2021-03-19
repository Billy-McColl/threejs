// init global variables
let scene, camera, renderer, cube;

function init() {
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	// Box Geometry depth width height
	const geometry = new THREE.BoxGeometry(2, 2, 2);

	//colour of cube
	//const material = new THREE.MeshBasicMaterial({ color: 0xfff4f52 });

	// create texture
	const texture = new THREE.TextureLoader().load(
		'textures/uv_grid_directx.jpg'
	);

	//add material
	const material = new THREE.MeshBasicMaterial({ map: texture });

	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	// set camera position
	camera.position.z = 5;
}

function animate() {
	requestAnimationFrame(animate);

	//rotate the cube
	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();

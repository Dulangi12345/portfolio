import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import Headline from "./HeadLine";
import { colors } from "@mui/material";

const CV = () => {
  const skills = [
    { text: "Python", logo: "python.jpg" },
    { text: "Java", logo: "java.jpg" },
    { text: "PHP", logo: "php.jpg" },
    { text: "ReactJS", logo: "reactjs.jpg" },
    { text: "Tailwind CSS", logo: "tailwindcss.jpg" },
    { text: "NodeJS", logo: "nodejs.jpg" },
    { text: "Firebase", logo: "firebase.jpg" },
    { text: "SQL", logo: "mysql.jpg" },
    { text: "PostgreSQL", logo: "postgresql.jpg" },
    { text: "MongoDB", logo: "mongodb.jpg" },
    { text: "C-sharp", logo: "csharp.jpg" },
    { text: "GitHub", logo: "github.jpg" },
    { text: "Dart", logo: "dart.jpg" },
    { text: "Flutter", logo: "flutter.jpg" },
    { text: "Vue JS", logo: "vue.jpg" },
    { text: "JQuery", logo: "jquery.jpg" },
    { text: "IntelliJ", logo: "intellij.jpg" },
    { text: "Laravel", logo: "laravel.jpg" },
    { text: "VS-Code", logo: "vscode.jpg" },
  ];

  const canvasRef = useRef(null);

  useEffect(() => {
    const drawGrid = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1.0,
        60
      );

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      scene.background = new THREE.Color(0xff8383);

      const geometry = new THREE.BoxGeometry(1, 1, 0.5);
      const cubes = [];

      geometry.center();
      const numberOfGridItems = skills.length;

      const gridSize = 5; // Define the number of columns in the grid
      const spacing = 2; // Define the spacing between cubes

      let count = 0;

      const offsetX = ((gridSize - 1) * spacing) / 2;
      const offsetY = (Math.ceil(numberOfGridItems / gridSize) * spacing) / 2;

      // Loop to create cubes with unique textures and position them in a grid
      for (let i = 0; i < numberOfGridItems; i++) {
        const textureLoader = new THREE.TextureLoader();
        const logoTexture = textureLoader.load(
          `src/assets/logos/${skills[i].logo}`
        );

        const materials = [
          new THREE.MeshBasicMaterial({ color: 0xfff0dc }),
          new THREE.MeshBasicMaterial({ color: 0xfff0dc }),
          new THREE.MeshBasicMaterial({ color: 0xff8383 }),
          new THREE.MeshBasicMaterial({ color: 0xff8383 }),
          new THREE.MeshBasicMaterial({
            map: logoTexture, // Set unique logo texture for each cube
          }),
          new THREE.MeshBasicMaterial({ color: 0xff8383 }),
        ];

        const cube = new THREE.Mesh(geometry, materials);

        // Calculate x and y positions for grid layout
        // Calculate x and y positions for grid layout
        const row = Math.floor(i / gridSize); // Calculate the row
        const col = i % gridSize; // Calculate the column

        // Adjust positions to create grid centered around (0, 0, 0)
        cube.position.set(col * spacing - offsetX, -row * spacing + offsetY, 0);

        scene.add(cube);
        cubes.push(cube);

        const edges = new THREE.EdgesGeometry(geometry);
        const edgeLines = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({
            color: "black",
            linewidth: 2,
          })
        );
        cube.add(edgeLines);
        count++;
      }

      camera.position.set(0, 5, 5);
      camera.position.y -= 10;
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      // Initialize OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement);

      function animate() {
        controls.update();
        renderer.render(scene, camera);
      }
      renderer.setAnimationLoop(animate);
      renderer.setClearColor( 0xffffff)

      window.addEventListener("resize", drawGrid);
    };

    drawGrid();
    return () => window.removeEventListener("resize", drawGrid);
  }, []);

  return (
    <>
     <Headline />
      <canvas
        ref={canvasRef}
        id="skills-canvas" 
   
    
       
      >
        {" "}
      </canvas>


    </>
  );
};

export default CV;

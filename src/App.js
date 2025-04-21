const flowercontainer =document.querySelector('.whole');
const colors = ["red" , "yellow"];

function createLight(amount, position){

    for(let  i=0 ; i < amount ; i++){
        const light = document.createElement("div");
        const color = colors[Math.floor(Math.random() * colors.length)]
        const transformDeg = Math.random() * 360;
        const positionPercentage = Math.random() * 100 + "%";
        const minorPositionPercentage = Math.random() * 5 + "%";


        light.style.backgroundColor = color;
        light.style.width  = "4px";
        light.style.height = "4px";
        light.style.borderRadius = "100%";
        light.style.transform = `rotate(${transformDeg}deg)`;
        light.style.position = "absolute";

        switch(position){
            case "top":
        light.style.top = minorPositionPercentage;
        light.style.left = positionPercentage;
        break;
        case "left":
          light.style.left = minorPositionPercentage;
          light.style.top = positionPercentage;
          break;
        case "right":
          light.style.right = minorPositionPercentage;
          light.style.top = positionPercentage;
          break;
        case "bottom":
          light.style.bottom = minorPositionPercentage;
          light.style.left = positionPercentage;
          break;
      }

      light.classList.add(color);
      flowercontainer.appendChild(light);

    }
}

createLight(250, "top");
createLight(250, "left");
createLight(250, "right");
createLight(250, "bottom");



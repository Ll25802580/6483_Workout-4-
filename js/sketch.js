
const TAU = 2 * Math.PI;

  function setup() {
    createCanvas(512, 512);
  
    pixelDensity(1);
  }
  
  function draw() {

    background(0);
    loadPixels();

    const z = (frameCount - 1)
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
  
        // Compute SDF for each object

        const translatedX = x - width / 2;
        const translatedY = -(y - height/2);

        const sdfHeart = sHeart([translatedX,translatedY]);
        
  
        // Compute the final SDF as your combination choice
        const sdf = sdfHeart;
        //console.log(sdf);

  
        //const gray = 255 * Math.sign(Math.max(0,sdf));
        const gray = (Math.sin(sdf * TAU / 10) + 1) * 0.5 * 255 * Math.sign(Math.max(0,sdf));
       
        // Update the pixls
        const index = 4 * (x + y * width);
        pixels[index + 0] = gray;
        pixels[index + 1] = gray;
        pixels[index + 2] = gray;
        pixels[index + 3] = 255;
      }
    }
    updatePixels();
  
  }
  
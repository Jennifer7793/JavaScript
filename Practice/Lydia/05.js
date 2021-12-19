const bird = {
  size:"small"
};

const mouse = {
  name:"Mickey",
  small:true
};

// mouse.bird.size
// mouse[bird.size] 
mouse[bird["size"]]
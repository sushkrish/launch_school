function isColorValid(color) {
  return (color === "blue" || color === "green")
}

function isColorValid2(color) {
  return ["blue", "green"].includes(color);
}

const isColorValid3 = color => ["blue", "green"].includes(color);
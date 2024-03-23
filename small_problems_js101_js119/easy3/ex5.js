function triangle(height) {
  for (let idx = 1; idx <= height; idx++) {
    console.log(' '.repeat(height - idx) + '*'.repeat(idx));
  }
}

triangle(5);
triangle(9);
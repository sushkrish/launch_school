function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement); // mutates the argument
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}



function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement); //doesn't mutate the argument
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
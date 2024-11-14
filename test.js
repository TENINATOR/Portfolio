// Get the WebGL canvas element
const canvas = document.getElementById("webglCanvas");


// Get the WebGL rendering context
const gl = canvas.getContext("webgl");


// Check if WebGL is available on the current browser
if (!gl) {
  alert("WebGL is not supported on this browser.");
}


// Set clear color to black, and clear the canvas
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);


// Shaders: Vertex and Fragment
const vertexShaderSource = `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 100.0;
  }
`;


const fragmentShaderSource = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;


// Compile and link shaders
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
    return null;
  }
  return shader;
}


function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program linking error:", gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}


const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(gl, vertexShader, fragmentShader);


// Use the shader program
gl.useProgram(program);


// Draw a point using the shaders
gl.drawArrays(gl.POINTS, 0, 1);
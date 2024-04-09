function correctParentheses(str) {
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ")") return false;
    else if (array[i] === "(" && array[i + 1] === ")") {
      array.splice(i, 2);
      i = -1;
    }
  }
  if (array.length === 0) return true;
  else return false;
}
// Ejercicio 18
// Crear una función en JavaScript llamada correctParentheses (Paréntesis Correctos) que reciba como parámetro un string compuesto por paréntesis curvos "(" y/o ")", y retorne true en caso de que los paréntesis estén ordenados de la forma correcta (que se abran y cierren de forma consistente). En caso de no estarlo, la función deberá retornar false.
// El string recibido sólo puede contener paréntesis. No habrán otros caracteres, ni siquiera espacios en blanco.
// Ejemplos:

// Input ----------------------> Output
// correctParentheses("()") ---> true
// correctParentheses(")(") ---> false
// correctParentheses("(()") ---> false
// correctParentheses(")(()))") ---> false
// correctParentheses("(") ---> false
// correctParentheses("()(") ---> false
// correctParentheses("(())((()())())") ---> true

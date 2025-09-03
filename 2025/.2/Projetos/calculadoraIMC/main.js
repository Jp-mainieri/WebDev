//const button = document.getElementById("btnCalcularImc");

const executarCalculo = () => {

    let altura = parseFloat(document.getElementById("txtAltura").value);
    let peso = parseFloat(document.getElementById("txtPeso").value);


    let imc = peso / altura ** 2; 
    console.log(`IMC = ${imc}`)
}
//button.addEventListener('click',executarCalculo); 
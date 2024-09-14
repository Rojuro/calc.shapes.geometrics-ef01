// variavel guarda
// função e para fazer


// function mostrarNome() {
//     let nomeUsuario = document.getElementById("nomeUsuario").value
//     document.getElementById("paragrafo").innerText = nomeUsuario
// }

function retang() {
    let b1 = Number(document.getElementById("b1").value)
    let a1 = Number(document.getElementById("a1").value)    
    let retang = b1 * a1
    document.getElementById("retang").innerText = retang
}

function triang() {
    let b2 = Number(document.getElementById("b2").value)
    let a2 = Number(document.getElementById("a2").value)    
    let triang = ((b2 * a2) / 2)
    document.getElementById("triang").innerText = triang
}

function Losang() {
    let dm1 = Number(document.getElementById("dm1").value)
    let dm2 = Number(document.getElementById("dm2").value)    
    let Losang = ((dm1 * dm2) / 2)
    document.getElementById("Losang").innerText = Losang
}

function trapezio() {
    let bm1 = Number(document.getElementById("bm1").value)
    let bm2 = Number(document.getElementById("bm2").value)
    let alt1 = Number(document.getElementById("alt1").value)    
    let trapezio = ((bm1 + bm2) * alt1) / 2
    document.getElementById("trapezio").innerText = trapezio
}

// ----------------------------------------------------

function cubo() {
    let kub = Number(document.getElementById("kub").value)
    
    let cubo = kub**3
    document.getElementById("cubo").innerText = cubo
}

function paralelepipedo() {
    let ladoA = Number(document.getElementById("ladoA").value)
    let ladoB = Number(document.getElementById("ladoB").value)
    let ladoC = Number(document.getElementById("ladoC").value)
    let paralelepipedo = ladoA * ladoB * ladoC
    document.getElementById("paralelepipedo").innerText = paralelepipedo
}

function esfera() {
    let raio5 = document.getElementById("raio5").value
    const pi = 3.14
    let esfera = (pi * raio5**3) * 1.33
    document.getElementById("esfera").innerText = esfera
}

function cilindro() {
    let raio2 = document.getElementById("raio2").value
    let alt2 = Number(document.getElementById("alt2").value)
    const pi = 3.14
    let cilindro = (pi * raio2**2) * alt2
    document.getElementById("cilindro").innerText = cilindro
}

function cone() {
    let raio3 = document.getElementById("raio3").value
    let altu1 = Number(document.getElementById("altu1").value)
    const pi = 3.14
    let cone = pi * raio3**2 * altu1 * 0.33
    document.getElementById("cone").innerText = cone
}

function piraMid() {
    let lado7 = Number(document.getElementById("lado7").value)
    let alt7 = Number(document.getElementById("alt7").value)    
    let piraMid = (lado7**2 * alt7) / 3
    document.getElementById("piraMid").innerText = piraMid
}
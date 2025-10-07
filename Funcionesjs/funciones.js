function menuCarrito() {
    
    let menu = true

    while (menu) {
        
        let opcion = parseInt(prompt("Que deseas hacer\n1.-Ver Carrito\n2.-Eliminar Producto\n3.-Salir"))

        switch (opcion) {
            case 1:
                if (carrito.length === 0) {
                    alert("Tu carrito esta vacio")
                }
                else{
                    alert("Tienes los siguientes articulos:\n" + carrito.join(" - ") + "\ncon un precio total de: " + " S/." + precio)
                }

                break;
            case 2:
                if (carrito.length === 0) {
                    alert("Tu carrito esta vacio")
                } else {
                    let producto =prompt("Tienes los siguientes articulos " + carrito.join(" - ") + " escribe el producto a eliminar")

                    let index = carrito.indexOf(producto)
                    if (index !== -1) {
                        carrito.splice(index,1)
                        alert("Se elimino " + producto + " del carrito")
                    }
                    else{
                        alert("no se encontro este producto en el carrito")
                    }
                }

                break;
            case 3:

                alert("Estas retrocediendo")
                menu = false
                


                
                break;
        
            default:
                break;
        }
    }
}


let nombre = prompt("Hola Bienvenido a DigitalHub.\nIndicanos tu nombre para ingresar ")

alert("Bienvenido " + nombre)

let continuar = true

const carrito = []

let precio = 0

while (continuar) {
    let operacion = parseInt(prompt("Contamos con los siguientes categorias de productos\n1.- Laptop\n2.-Computadoras\n3.-Accesorios\n4.-Atras\n5.-Ver Carrito\nIndicanos con los numeros que es lo que deseas comprar hoy"))
    
    
switch (operacion) {
    case 1:

        laptoprepeticion = true;

        while (laptoprepeticion) {

            alert("Elegiste Laptop")

            let laptop = parseInt(prompt("Tenemos los siguientes modelos\n1.-Lenovo\n2.-Asus\n3.-HP\n4.-Atras"))

            if (laptop === 1) {
                let lenovo = prompt("Tenemos los siguientes modelos de Lenovo\n1.-Lenovo-Oficiona S/.3.000\n2.-Lenovo-Gamer S/.5.000\n3.-Atras") 

                lenovoiteracion = true;

                while (lenovoiteracion) {

                    if (lenovo === "1") {
                        alert("Compraste Lenovo-Oficiona con un valor de  S/.3.000")

                        carrito.push("Lenovo-Oficiona")
                        precio += 3000
                        break;
                    }

                    else if (lenovo === "2") {
                        
                        alert("Compraste Lenovo-Gamer con un valor de S/.5.000")

                        carrito.push("Lenovo-Gamer")
                        precio += 5000
                        break;
                    }

                    else if (lenovo === "3") {
                        alert("Estas retrocediendo")
                        lenovoiteracion = false
                    }

                    else{
                        alert("Elije un numero valido")
                        lenovo = prompt("Tenemos los siguientes modelos de Lenovo\n1.-Lenovo-Oficiona S/.3.000\n2.-Lenovo-Gamer S/.5.000\n3.-Atras");
                    }
                }

                break;
            }
            else if (laptop === 2) {
                let asus = prompt("Tenemos los siguientes modelos de Asus\n1.-Asus-Oficiona S/.3.000\n2.-Asus-Gamer S/.5.000\n3.-Atras")

                asusiteracion = true 

                while (asusiteracion) {
                    
                    if (asus === "1") {
                        alert("Compraste Asus-Oficiona con un valor de S/.3.000")
                        carrito.push("Asus-Oficiona")
                        precio += 3000
                        break;
                    }
                    else if (asus === "2") {
                        alert("Compraste Asus-Gamer con un valor de S/.5.000")
                        carrito.push("Asus-Gamer")
                        precio += 5000
                        break;
                    }
                    else if (asus === "3") {
                        alert("Estas retrocediendo")
                        asusiteracion = false
                    }
                    else{
                        alert("Indique un numero valido")
                        asus = prompt("Tenemos los siguientes modelos de Asus\n1.-Asus-Oficiona S/.3.000\n2.-Asus-Gamer S/.5.000\n3.-Atras")
                    }
                }
                break;
            }
            else if (laptop === 3) {
                let hp = prompt("Tenemos los siguientes modelos de HP\n1.-HP-Oficiona S/.3.000\n2.-HP-Gamer S/.5.000\n3.-Atras")

                hpiteracion = true

                while (hpiteracion) {
                    
                    if (hp === "1") {
                        alert("Compraste HP-Oficiona con un valor de S/. 3.000")
                        carrito.push("HP-Oficiona")
                        precio += 3000
                        break;
                    }
                    else if (hp === "2") {
                        alert("Compraste HP-Gamer con un valor de S/. 5.000")
                        carrito.push("HP-Gamer")
                        precio += 5000 
                        break;
                    }
                    else if (hp === "3") {
                        alert("Estas retrocediendo")
                        hpiteracion = false
                    }
                    else("Indique un numero valido")
                }
                break;
            }
            else if (laptop === 4) {
                alert("Estas retrocediendo")
                laptoprepeticion = false
            }  
            else{
                alert("Indique un numero valido")
                hp = prompt("Tenemos los siguientes modelos de HP\n1.-HP-Oficiona S/.3.000\n2.-HP-Gamer S/.5.000\n3.-Atras")
            }

        }

        break;
    case 2:
        
        computadorasrepeticion = true

        while (computadorasrepeticion) {
            alert("Elegiste computadoras")

            let computadoras = parseInt(prompt("Tenemos los siguientes modelos\n1.-Lenovo\n2.-LG\n3.-HP\n4.-Atras"))

            if (computadoras === 1) {
                let lenovo = prompt("Tenemos los siguientes modelos de Lenovo\n1.-LenovoPC-Oficiona S/.3.000\n2.-LenovoPC-Gamer S/.5.000\n3.-Atras") 

                lenovopciteracion = true

                while (lenovoiteracion) {
                    
                    if (lenovo === "1") {
                        alert("Compraste LenovoPC-Oficiona con un valor de S/. 3.000")
                        carrito.push("LenovoPC-Oficina")
                        precio += 3000
                        break;
                    }

                    else if (lenovo === "2") {
                        alert("Compraste LenovoPC-Gamer con un valor de S/. 5.000")
                        carrito.push("LenovoPC-Gamer")
                        precio += 5000
                        break;
                    }
                    else if (lenovo === "3"){
                         alert("Estas retrocediendo")
                        lenovopciteracion = false
                    }
                    else{
                        alert("Indique un numero valido")
                        lenovo = prompt("Tenemos los siguientes modelos de Lenovo\n1.-LenovoPC-Oficiona S/.3.000\n2.-LenovoPC-Gamer S/.5.000\n3.-Atras") 
                    }
                    
                }
                break;
            }
            else if (computadoras === 2) {
                let lg = prompt("Tenemos los siguientes modelos de LG\n1.-LGPC-Oficiona S/.3.000\n2.-LGPC-Gamer S/.5.000\n3.-Atras")

                lgpciteracion = true

                while (lgpciteracion) {
                    
                    if (lg === "1") {
                        alert("Compraste LGPC-Oficina con un valor de S/. 3.000")
                        carrito.push("LGPC-Oficina")
                        precio += 3000
                        break;
                    }
                    else if (lg === "2") {
                        alert("Compraste LGPC-Gamer con un valor de S/. 5.000 ")
                        carrito.push("LGPC-Gamer")
                        precio += 5000
                        break;
                    }
                    else if (lg === "3") {
                        alert("Estas retrocediendo")
                        lgpciteracion = false
                    }
                    else{
                        alert("Indique un numero valido")
                        lg = prompt("Tenemos los siguientes modelos de LG\n1.-LGPC-Oficiona S/.3.000\n2.-LGPC-Gamer S/.5.000\n3.-Atras")
                    }

                }
                break;
            }
            else if (computadoras === 3) {
                let hp = prompt("Tenemos los siguientes modelos de HP\n1.-HP-OficionaPC S/.3.000\n2.-HP-GamerPC S/.5.000\n3.-Atras")

                hppciteracion = true

                while (hppciteracion) {
                    
                    if (hp === "1") {
                        alert("Comprate HPPC-Oficina con un valor de S/.3.000")
                        carrito.push("HPPC-Oficina")
                        precio += 3000
                        break;
                    }
                    else if (hp === "2") {
                        alert("Compraste HPPC-Gamer con un valor de S/. 5.000")
                        carrito.push("HPPC-Gamer")
                        precio += 5000
                        break;
                    }
                    else if (hp === "3") {
                        alert("Estas retrocediendo")
                        hppciteracion = false
                    }
                }
                break;
            }
            else if (computadoras === 4) {
                alert("Estas retrocediendo")
                computadorasrepeticion = false
            }  
            else{
                alert("Indique un numero valido")
                hp = prompt("Tenemos los siguientes modelos de HP\n1.-HP-OficionaPC S/.3.000\n2.-HP-GamerPC S/.5.000\n3.-Atras")
            }
        }

        break;
    
    case 3:
    
        accesoriosrepeticion = true

        while (accesoriosrepeticion) {
            alert("Elegiste accesorios")
            let accesorios = parseInt(prompt("Tenemos los siguientes modelos\n1.-Audifonos\n2.-Cargadores-Celulares\n3.-Parlantes\n4.-Atras"))

            if (accesorios === 1) {
                let audifonos = prompt("Tenemos los siguientes modelos de Audifonos\n1.-JBL S/.300\n2.-Xiomi S/.120\n3.-Atras") 
                
                audifonositeracion = true

                while (audifonositeracion) {
                    
                    if (audifonos === "1") {
                        alert("Comprate Audifonos-JBL con un valor de S/. 300")
                        carrito.push("Audifonos-JBL")
                        precio += 300
                        break;
                    }
                    else if (audifonos === "2") {
                        alert("Compraste Audifonos-Xiomi con un valor de S/. 120")
                        carrito.push("Audifonos-Xiomi")
                        precio += 120
                        break;
                    }
                    else if (audifonos === "3") {
                        alert("Estas retrocediendo")
                        audifonositeracion = false
                    }
                    else{
                        alert("Indique un numero valido")
                        audifonos = prompt("Tenemos los siguientes modelos de Audifonos\n1.-JBL S/.300\n2.-Xiomi S/.120\n3.-Atras") 
                    }
                }
                break;
            }
            else if (accesorios === 2) {
                let cargadores = prompt("Tenemos los siguientes modelos de Cargadores\n1.-Cargador-Tipo-C S/.30\n2.-Cargador-Iphone S/.50\n3.-Atras")

                cargadoresiteracion = true

                while (cargadoresiteracion) {
                    
                    if (cargadores === "1") {
                        alert("Comprate Cargador-Tipo-C con un valor de S/. 30")
                        carrito.push("Cargador-Tipo-C")
                        precio += 30
                        break;
                    }
                    else if (cargadores === "2") {
                        alert("Compraste Cargador-Iphone con un valor de S/. 50")
                        carrito.push("Audifonos-Xiomi")
                        precio += 50
                        break;
                    }
                    else if (cargadores === "3") {
                        alert("Estas retrocediendo")
                        cargadoresiteracion = false
                    }
                    else{
                        alert("Indique un numero valido")
                        cargadores = prompt("Tenemos los siguientes modelos de Cargadores\n1.-Cargador-Tipo-C S/.30\n2.-Cargador-Iphone S/.50\n3.-Atras")
                    }
                }
                break;
            }
            else if (accesorios === 3) {
                let parlantes = prompt("Tenemos los siguientes modelos de Parlantes\n1.-JBL S/.3000\n2.-Sony S/.1200\n3.-Atras")

                parlantesiteracion = true

                while (parlantesiteracion) {
                    
                    if (parlantes === "1") {
                        alert("Comprate Parlantes-JBL con un valor de S/. 3.000")
                        carrito.push("Parlantes-JBL")
                        precio += 3000
                        break;
                    }
                    else if (parlantes === "2") {
                        alert("Compraste Audifonos-Xiomi con un valor de S/. 1.200")
                        carrito.push("Parlantes-Xiomi")
                        precio += 1200
                        break;
                    }
                    else if (parlantes === "3") {
                        alert("Estas retrocediendo")
                        parlantesiteracion = false
                    }
                    else{
                        alert("Indique un numero valido")
                        parlantes = prompt("Tenemos los siguientes modelos de Parlantes\n1.-JBL S/.3000\n2.-Sony S/.1200\n3.-Atras")
                    }
                }
                break;
                
            }
            else if (accesorios === 4) {
                alert("Estas retrocediendo")
                accesoriosrepeticion = false
            }   
            else{
                alert("Indique un numero valido")
            }
        }

        break;

    case 4:
        alert("Gracias por preferirnos")

        continuar = false;

    case 5:
        
        menuCarrito();
        break;

    default:
        break;
}
}

console.log("asdad");

class ListaCircular{
    inicio = null
    ultimo = null
    constructor(){}

    push(dato){
        if (this.vacio()) {
            this.inicio = this.ultimo = new NodoDoble(null, dato, null);
            this.ultimo.anterior = this.inicio;
            this.ultimo.siguiente = this.inicio;
        }else{
            let temp = new NodoDoble(this.ultimo.anterior, dato, this.ultimo.siguiente);
            this.ultimo.anterior.siguiente = temp
            this.ultimo.siguiente.anterior = temp
            this.ultimo = temp
        }
    }

    imprimir(){
        let temp = this.inicio;
        while (temp!= this.ultimo) {
            console.log(temp.dato);
            temp = temp.siguiente
        }
    }

    vacio(){
        return this.inicio == null
    }
}

class NodoDoble
{
    anterior = null
    siguiente = null
    dato = null

    constructor(anterior,dato, siguiente){
        this.dato = dato
        this.siguiente = siguiente
        this.anterior = anterior
    }
}

const lista = new ListaCircular()
lista.push(3)
lista.push(4)
lista.push(5)
lista.push(6)
lista.push(7)
lista.imprimir()


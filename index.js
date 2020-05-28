// Your code here
class Polygon{

    constructor(array){
        this.array = array
    }

    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((a,b)=> a+b, 0)
    }
}

class Triangle extends Polygon{

    get isValid(){
        let valid;
        if (this.countSides == 3){
            let [a,b,c] = this.array
            
            if (a+b > c && a+c > b && c+b > a){
                valid = true
            } else {
                valid = false
            }
        }
        
        return valid
    }

}

class Square extends Polygon{

    get isValid(){
        let valid;
        if(this.countSides == 4 ){
            let [a,b,c,d] = this.array
            if (a == b && b==c && c == d){
                valid = true
            } else {
                valid = false
            }
        }
        return valid
    }

    get area(){
        return this.array[0]**2
    }
} 
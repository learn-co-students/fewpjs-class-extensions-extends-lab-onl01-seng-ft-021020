// Your code here

class Polygon{

    constructor(sides){
        this._sides = sides

    }

    get sides(){
        return this._sides
    }

    set sides(sides){
        this._sides = sides
    }

    get countSides(){
        return this._sides.length
    }

    get perimeter(){
        console.log("result " + result)

        let result = 0
        for(let i = 0; i < this.countSides; i++){
            result += this._sides[i]

        }
        
        
        return result

    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this._sides[0] + this._sides[1] > this._sides[2]){
            if(this._sides[1] + this._sides[2] > this._sides[0]){
                if(this._sides[2] + this._sides[0] > this._sides[1]){
                    return true
            
                }
            
            }

        }
        return false

    }

}

class Square extends Polygon{

    get isValid(){
        if(this.countSides == 4){
            if(this._sides[0] == this._sides[1] &&
               this._sides[1] == this._sides[2] &&
               this._sides[2] == this._sides[3]){
                return true
            }

        }
        return false
    }

    get area(){
        return this._sides[0] * this._sides[2]
    }
    
}
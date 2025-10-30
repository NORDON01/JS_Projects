const log = console.log;

const monBtn = document.querySelector('.monBtn');
           
class Obj{
    constructor(){
        this.click= false;
        this.set = function(){
            log(this);          //Obj{click:false, set:f}
            this.click = true;
        }
    }
}

const obj = new Obj;    

monBtn.addEventListener('click', obj.set);          //this pointe sur monBtn
monBtn.addEventListener('click', obj.set.bind(obj));//this pointe sur Obj

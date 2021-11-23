class Mouse{
    name;
    speed;
    weight;
    status;
    sounding;

    constructor(name, mousespeed, weight, status, sounding) {
        this.name = name;
        this.mousespeed = mousespeed;
        this.weight = weight;
        this.status = status;
        this.sounding = sounding;
    }
    setName(name){
        this.name = name;
    }
    setSpeed(mousespeed){
        this.mousespeed = mousespeed;
    }
    setWeight(weight){
        this.weight = weight;

    }setStatus(status){
        this.status = status;

    }setSounding(sounding){
        this.sounding = sounding;
    }
}
import { withHashLocation } from "@angular/router";

export class FaceSnap {

    location?:string;

    constructor(
        public id: number,
        public title: string,
        public imageUrl: string,
        public description: string,
        public createdAt: Date,
        public snaps: number
    ) { 
    }

    addSnapp(){
        this.snaps++;
    }

    removeSnapp(){
        this.snaps--
    }

    snap(snaptype: string){
        if(snaptype === 'snap'){
            this.addSnapp()
        }else if(snaptype === 'unsnap'){
            this.removeSnapp()
        }
    }

    setLocation(location: string | undefined): void{
        this.location = location
    }

    withLocation(location: string | undefined): FaceSnap{
        this.setLocation(location);
        return this;
    }
}
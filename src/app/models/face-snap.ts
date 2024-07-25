import { withHashLocation } from "@angular/router";

export class FaceSnap {

    location?:string;
    id: string;

    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public createdAt: Date,
        public snaps: number
    ) { 
        this.id = crypto.randomUUID().substring(0, 8);
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

    setLocation(location: string): void{
        this.location = location
    }

    withLocation(location: string): FaceSnap{
        this.setLocation(location);
        return this;
    }
}
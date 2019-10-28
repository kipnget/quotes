export class Quotes {
    showDetails: boolean;
    likeState = true;
    dislikeState = true;
    touchLike = false;
    touchDislike = false;
    constructor(
        public id: number, 
        public contributorName: string, 
        public characterName: string, 
        public quote: string, 
        public likeNumber: number,
        public dislikeNumber: number,
        public likeStatus: boolean,
        public delButton: boolean,
        public submitDate: Date
        ){
            this.showDetails = false;
        }
}

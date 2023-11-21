import { auth, db } from "../firebase.js";

export class TrophiesClass {
    constructor (king, tensteps, bike, firstChallenge, uid, help, musclesixty, lightrunning) {
        this.king = king
        this.tensteps = tensteps
        this.bike = bike
        this.firstChallenge = firstChallenge
        this.uid = uid
        this.help = help
        this.musclesixty = musclesixty
        this.lightrunning = lightrunning
    }
    toString() {
        return this.uid;
    }
  }
  
  // Firestore data converter
  var trophiesConverter = {
    toFirestore: function(trophies) {
        return {
            king: trophies.king,
            tensteps: trophies.tensteps,
            bike: trophies.bike,
            firstChallenge: trophies.firstChallenge,
            uid: trophies.uid,
            help: trophies.help,
            musclesixty: trophies.musclesixty,
            lightrunning: trophies.lightrunning
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new TrophiesClass(data.king, data.tensteps, data.bike, data.firstChallenge, data.uid, data.help, data.musclesixty, data.lightrunning);
    }
  };

function validateKing(trophie){
    if (trophie.king) {
        return true
    }

    if(trophie.tensteps && trophie.bike && trophie.firstChallenge && trophie.help && trophie.musclesixty && trophie.lightrunning){
        db.collection("challenges").doc(auth.currentUser.uid).withConverter(trophiesConverter)
        .set(new TrophiesClass(true,true,true,true,auth.currentUser.uid, true, true, true))
        return true
    }

    return false
}
export function GetTrophies(setTrophies) {
db.collection("challenges")
    .withConverter(trophiesConverter)
    .doc(auth.currentUser.uid)
    .get().then((doc)=>{
    if (doc.exists){
        var data = doc.data()
        data.king = validateKing(data)
        setTrophies(data)
    } else {
        db.collection("challenges").doc(auth.currentUser.uid).withConverter(trophiesConverter)
        .set(new TrophiesClass(false,false,false,false,auth.currentUser.uid, false, false, false))
        setTrophies(new TrophiesClass(false,false,false,false,auth.currentUser.uid, false, false, false))
    }

    });
}

export function SetTrophies(trophiesClass) {
    trophiesClass.uid = auth.currentUser.uid
    db.collection("challenges").doc(auth.currentUser.uid).withConverter(trophiesConverter)
        .set(trophiesClass)
}

export function AddNewTrophies(trophiesClass) {

    let addNewTrophies = (currentTrophies) => {
        currentTrophies.king = (currentTrophies.king || trophiesClass.king) 
        currentTrophies.tensteps = (currentTrophies.tensteps || trophiesClass.tensteps) 
        currentTrophies.bike = (currentTrophies.bike || trophiesClass.bike) 
        currentTrophies.firstChallenge = (currentTrophies.firstChallenge || trophiesClass.firstChallenge) 
        currentTrophies.uid = (currentTrophies.uid || trophiesClass.uid) 
        currentTrophies.help = (currentTrophies.help || trophiesClass.help) 
        currentTrophies.musclesixty = (currentTrophies.musclesixty || trophiesClass.musclesixty) 
        currentTrophies.lightrunning = (currentTrophies.lightrunning || trophiesClass.lightrunning)

        db.collection("challenges").doc(auth.currentUser.uid).withConverter(trophiesConverter).set(currentTrophies)
    }

    GetTrophies(addNewTrophies)
    
}
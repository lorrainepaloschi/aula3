import { auth, db } from "../firebase.js";

class TrophiesClass {
    constructor (king, tensteps, bike, firstChallenge, uid) {
        this.king = king
        this.tensteps = tensteps
        this.bike = bike
        this.firstChallenge = firstChallenge
        this.uid = uid
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
            uid: trophies.uid
            };
    },
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new TrophiesClass(data.king, data.tensteps, data.bike, data.firstChallenge, data.uid);
    }
  };
  

function GetTrophies() {
    console.log(auth.currentUser.uid)

    //db.collection("challenges").doc(auth.currentUser.uid).withConverter(trophiesConverter)
    //.set(new TrophiesClass(false,false,false,false,auth.currentUser.uid))

    db.collection("challenges")
      .withConverter(trophiesConverter)
      .doc(auth.currentUser.uid)
      .get().then((doc)=>{
        return doc.data()
      });
}

export default [TrophiesClass, GetTrophies]
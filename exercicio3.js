function temHabilidades(skills) {
    if(skills.indexOf('Javascript')>=0){
        return true;
    } else{
        return false;
    }
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidades(skills));
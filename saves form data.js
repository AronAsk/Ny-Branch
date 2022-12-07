// Jespers kod


function AddRow(){
    const resInfo = new ResInfo(); //creating a new variable to hold the travel information
    resInfo.resfran = document.getElementById("fran").value;
    resInfo.resatill = document.getElementById("till").value;
    resInfo.datum = document.getElementById("birthdaytime").value;
    resInfo.namn = document.getElementById("name").value;
    resInfo.efternamn = document.getElementById("lastname").value;
    resInfo.tele = document.getElementById("number").value;
    resInfo.antalledigaplatser = document.getElementById("platser").value;
    // resInfo.djurfri = 
    if (document.getElementById("djur1").value != '') { resInfo.djurfri = 'Ja';} 
    resInfo.barnfri = document.getElementById("barn1").value;
    resInfo.pauser = document.getElementById("rast").value;
    resInfo.info = document.getElementById("info").value;
    if(localStorage.getItem('ResInfo') == null){
        localStorage.setItem('ResInfo', '[]');
    }
    var old_data = JSON.parse(localStorage.getItem('ResInfo')); //Get old json data from localstorage
    old_data.push(resInfo); //Add new array on old array
    localStorage.setItem('ResInfo',JSON.stringify(old_data));  // save the new json data

    location.reload(); //reload page

    
}

class ResInfo {
    constructor(resfran,resatill,datum,nam,efternamn,tele,antalledigaplatser,djurfri,barnfri,pauser,info) {
      this.resfran = resfran;
      this.resatill = resatill;
      this.datum = datum;
      this.efternamn = efternamn;
      this.tele = tele;
      this.antalledigaplatser = antalledigaplatser;
      this.djurfri = djurfri;
      this.barnfri = barnfri;
      this.pauser = pauser;
      this.info = info;
    }
  }

  function ShowDataTable(){

    if(localStorage.getItem('ResInfo') != null)
    {
       var getJson = localStorage.getItem('ResInfo'); // get'ResInfo key from localstorage
       var resInfo = JSON.parse(getJson); //JSON string to ResInfo class
        var AddRown = document.getElementById('show'); //
        
        var cel;
        for(var i = 0;i<resInfo.length;i++){ // loop throu json array
            var NewRow = AddRown.insertRow(i+1);
            cel = NewRow.insertCell(0);
            cel.innerHTML = resInfo[i].resfran;
            cel = NewRow.insertCell(1);
            cel.innerHTML = resInfo[i].resatill;
            cel = NewRow.insertCell(2);
            cel.innerHTML = resInfo[i].datum;
            cel = NewRow.insertCell(3);
            cel.innerHTML = resInfo[i].namn;
            cel = NewRow.insertCell(4);
            cel.innerHTML = resInfo[i].efternamn;
            cel = NewRow.insertCell(5);
            cel.innerHTML = resInfo[i].tele;
            cel = NewRow.insertCell(6);
            cel.innerHTML = resInfo[i].antalledigaplatser;
            cel = NewRow.insertCell(7);
            cel.innerHTML = resInfo[i].djurfri;
            cel = NewRow.insertCell(8);
            cel.innerHTML = resInfo[i].barnfri;
            cel = NewRow.insertCell(9);
            cel.innerHTML = resInfo[i].pauser;
            cel = NewRow.insertCell(10);
            cel.innerHTML = resInfo[i].info;
            cel = NewRow.insertCell(11);
        }

    }
 

}

window.addEventListener("DOMContentLoaded", (event) => {
    var data = window.location.hash.substr(1);
    if(!data){
        // Stay compatible with previous version search param
        data = window.location.search;
    }
    console.log(data)
    const urlParams = new URLSearchParams(data);

    document.getElementById("field-firstname").value = urlParams.get("f"); //firstname
    document.getElementById("field-lastname").value = urlParams.get("l"); //lastname
    document.getElementById("field-birthday").value = urlParams.get("b"); //birthday
    document.getElementById("field-placeofbirth").value = urlParams.get("p"); //place of born
    document.getElementById("field-address").value = urlParams.get("a"); //address
    document.getElementById("field-city").value = urlParams.get("c"); //city
    document.getElementById("field-zipcode").value = urlParams.get("z"); //zipcode
    const reasons = urlParams.get("r"); //reason
    //const reason = urlParams.get("r"); //reason
    if(reasons.search('work') >= 0) document.getElementById("checkbox-travail").checked = true;
    if(reasons.search('shopping') >=0) document.getElementById("checkbox-achats").checked = true;
    if(reasons.search('health') >=0) document.getElementById("checkbox-sante").checked = true;
    if(reasons.search('family') >=0) document.getElementById("checkbox-famille").checked = true;
    if(reasons.search('disability') >=0) document.getElementById("checkbox-handicap").checked = true;
    if(reasons.search('sport') >=0) document.getElementById("checkbox-sport_animaux").checked = true;
    if(reasons.search('convocation') >=0) document.getElementById("checkbox-convocation").checked = true;
    if(reasons.search('mission') >=0) document.getElementById("checkbox-missions").checked = true;
    if(reasons.search('children') >=0) document.getElementById("checkbox-enfants").checked = true;
    //document.getElementById("checkbox-travail").checked = (reason==='work');
    //document.getElementById("checkbox-courses").checked = (reason==='buy');
    //document.getElementById("checkbox-sante").checked = (reason==='health');
    //document.getElementById("checkbox-famille").checked = (reason==='family');
    //document.getElementById("checkbox-sport").checked = (reason==='sport');
    //document.getElementById("checkbox-judiciaire").checked = (reason==='legal');
    //document.getElementById("checkbox-missions").checked = (reason==='mission');
    document.getElementById("generate-btn").click()
});

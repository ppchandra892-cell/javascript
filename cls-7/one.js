let employees=[{"id":1,"first_name":"Therine","last_name":"Dunn","email":"tdunn0@gizmodo.com","gender":"Female"},
{"id":2,"first_name":"Far","last_name":"Stiling","email":"fstiling1@moonfruit.com","gender":"Male"},
{"id":3,"first_name":"Simeon","last_name":"Olivia","email":"solivia2@soundcloud.com","gender":"Male"},
{"id":4,"first_name":"Priscilla","last_name":"Kennion","email":"pkennion3@moonfruit.com","gender":"Female"},
{"id":5,"first_name":"Ferdie","last_name":"Gorcke","email":"fgorcke4@nifty.com","gender":"Male"},
{"id":6,"first_name":"Egbert","last_name":"Dewbury","email":"edewbury5@hud.gov","gender":"Male"},
{"id":7,"first_name":"Perle","last_name":"Wyburn","email":"pwyburn6@google.it","gender":"Genderfluid"},
{"id":8,"first_name":"Caz","last_name":"Stollery","email":"cstollery7@seattletimes.com","gender":"Male"},
{"id":9,"first_name":"Danya","last_name":"Osborn","email":"dosborn8@springer.com","gender":"Male"},
{"id":10,"first_name":"Nicolina","last_name":"Hamfleet","email":"nhamfleet9@naver.com","gender":"Female"},
{"id":11,"first_name":"Wilfred","last_name":"Wandrich","email":"wwandricha@mapy.cz","gender":"Male"},
{"id":12,"first_name":"Moritz","last_name":"Banton","email":"mbantonb@webs.com","gender":"Male"},
{"id":13,"first_name":"Christin","last_name":"Alexsandrovich","email":"calexsandrovichc@opensource.org","gender":"Female"},
{"id":14,"first_name":"Sarajane","last_name":"d'Arcy","email":"sdarcyd@instagram.com","gender":"Female"},
{"id":15,"first_name":"Danna","last_name":"McHaffy","email":"dmchaffye@hud.gov","gender":"Female"},
{"id":16,"first_name":"Lucian","last_name":"Wallwood","email":"lwallwoodf@diigo.com","gender":"Male"},
{"id":17,"first_name":"Armando","last_name":"Stillgoe","email":"astillgoeg@samsung.com","gender":"Male"},
{"id":18,"first_name":"Tait","last_name":"Dumbleton","email":"tdumbletonh@liveinternet.ru","gender":"Male"},
{"id":19,"first_name":"Tiphani","last_name":"Pretty","email":"tprettyi@amazonaws.com","gender":"Female"},
{"id":20,"first_name":"Xerxes","last_name":"Bellingham","email":"xbellinghamj@gov.uk","gender":"Male"},
{"id":21,"first_name":"Kiri","last_name":"Klaes","email":"kklaesk@buzzfeed.com","gender":"Female"},
{"id":22,"first_name":"Lindie","last_name":"Queen","email":"lqueenl@1688.com","gender":"Female"},
{"id":23,"first_name":"Tania","last_name":"Pilmoor","email":"tpilmoorm@linkedin.com","gender":"Female"},
{"id":24,"first_name":"See","last_name":"Antonik","email":"santonikn@ezinearticles.com","gender":"Genderqueer"},
{"id":25,"first_name":"Berget","last_name":"Millsap","email":"bmillsapo@ocn.ne.jp","gender":"Female"},
{"id":26,"first_name":"Teddi","last_name":"Gallifont","email":"tgallifontp@behance.net","gender":"Female"},
{"id":27,"first_name":"Harley","last_name":"Zisneros","email":"hzisnerosq@wix.com","gender":"Polygender"},
{"id":28,"first_name":"Chiquia","last_name":"Clinkard","email":"cclinkardr@reverbnation.com","gender":"Female"},
{"id":29,"first_name":"Arvie","last_name":"Roughey","email":"arougheys@aol.com","gender":"Male"},
{"id":30,"first_name":"Kermie","last_name":"Mapes","email":"kmapest@t-online.de","gender":"Male"},
{"id":31,"first_name":"Dannie","last_name":"Harrow","email":"dharrowu@uiuc.edu","gender":"Female"},
{"id":32,"first_name":"Christie","last_name":"Chatters","email":"cchattersv@cdc.gov","gender":"Female"},
{"id":33,"first_name":"Kari","last_name":"Godball","email":"kgodballw@jigsy.com","gender":"Female"},
{"id":34,"first_name":"Carie","last_name":"Posthill","email":"cposthillx@fotki.com","gender":"Female"},
{"id":35,"first_name":"Renee","last_name":"Esser","email":"ressery@example.com","gender":"Female"},
{"id":36,"first_name":"Anica","last_name":"Chesterfield","email":"achesterfieldz@webnode.com","gender":"Female"},
{"id":37,"first_name":"Donna","last_name":"Kerridge","email":"dkerridge10@pcworld.com","gender":"Female"},
{"id":38,"first_name":"Nike","last_name":"Dawkes","email":"ndawkes11@flavors.me","gender":"Female"},
{"id":39,"first_name":"Georgeanna","last_name":"Chatainier","email":"gchatainier12@de.vu","gender":"Female"},
{"id":40,"first_name":"Myrah","last_name":"McNickle","email":"mmcnickle13@youtu.be","gender":"Female"},
{"id":41,"first_name":"Conchita","last_name":"Bearfoot","email":"cbearfoot14@cbc.ca","gender":"Female"},
{"id":42,"first_name":"Hilary","last_name":"McFadden","email":"hmcfadden15@taobao.com","gender":"Female"},
{"id":43,"first_name":"Edythe","last_name":"Bamforth","email":"ebamforth16@gizmodo.com","gender":"Female"},
{"id":44,"first_name":"Billie","last_name":"Windibank","email":"bwindibank17@opensource.org","gender":"Male"},
{"id":45,"first_name":"Bev","last_name":"Isakson","email":"bisakson18@bing.com","gender":"Male"},
{"id":46,"first_name":"Bobbee","last_name":"Bittany","email":"bbittany19@amazon.de","gender":"Female"},
{"id":47,"first_name":"Forest","last_name":"Synnott","email":"fsynnott1a@bloomberg.com","gender":"Male"},
{"id":48,"first_name":"Terri","last_name":"Prinne","email":"tprinne1b@theglobeandmail.com","gender":"Male"},
{"id":49,"first_name":"Michaelina","last_name":"McDugal","email":"mmcdugal1c@google.de","gender":"Female"},
{"id":50,"first_name":"Marketa","last_name":"Coney","email":"mconey1d@umn.edu","gender":"Female"}]

//print all emp names
/*for (let emp of employees){
     console.log(emp.first_name)
     console.log(`name:${emp.first_name} and gender:${emp.gender}`)

}*/

for (let emp of employees) {
    if (emp.gender === "Male") {
        console.log(emp.first_name);
    }
}
  
/*for(let i=0; i<=employees.length-1;i++){
    console.log(employees[i].id)
}*/
/* let no_male_emp=0
 for(let emp of employees){
    if(emp.gender === "Male"){
       // no_male_emp++;
       no_male_emp = no_male_emp+1;
    }
 }
 console.log(no_male_emp);*/
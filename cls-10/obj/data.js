let eid=101;
let ename="rhaul";
let avail=true;
let loc=["dfd","fdgdg","dgdgg"]
let emp={
    eid:102,
    ename:"ddwg"
}
document.writeln(eid);
document.writeln(ename);
document.writeln(avail);
document.writeln(loc);
document.writeln(emp);// [object Object] is not show the obj in browser
document.writeln("<br/>");
document.writeln(JSON.stringify(emp));//{"eid":102,"ename":"ddwg"}

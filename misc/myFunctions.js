/**
 * Created by manish on 11/12/14.
 */

function sayHello(word1, word2){
    word2=word2 || "Default";
    document.write("<br>");
    document.write(word1 +" "+word2);
    document.write("<br>");
}

function switchDemo(){
    var date= new Date();
    var day=date.getDay();
    document.write(date+ "<br>");
    document.write(day + "<br>");
    switch(day){
        case 0:
            document.write("Sunday");
            break;

        case 1:
            document.write("Monday");
            break;

        case 2:
            document.write("Tuesday");
            break;

        case 3:
            document.write("Wed");
            break;

        case 4:
            document.write("Thu");
            break;

        case 5:
            document.write("Fri");
            break;

        case 6:
            document.write("Sat");
            break;

    }
    document.write("<br>");

}

function sayHi(){
    document.getElementById("p1").innerHTML="Hi " + Math.random().toString();
}

function changeMyText(){
    document.getElementById("h1").innerHTML="This is a changed heading " + Math.random().toString();
}


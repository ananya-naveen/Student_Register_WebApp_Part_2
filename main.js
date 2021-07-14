name_of_the_student_array=[];
function submit(){
    var display_student_array=[];
    for (var a=1; a<=4; a++){
        var name_of_the_student=document.getElementById("name_of_the_student_"+a).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
    console.log(name_of_the_student_array);
    var length=name_of_the_student_array.length;
    console.log(length);
    for (var b=0; b<length; b++){
        display_student_array.push("<h4>Name: "+name_of_the_student_array[b]+"</h4>");
        console.log(display_student_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    var display_student_array_sorting=[];
    var length=name_of_the_student_array.length;
    console.log(length);
    for (var b=0; b<length; b++){
        display_student_array_sorting.push("<h4>Name: "+name_of_the_student_array[b]+"</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas=display_student_array_sorting.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
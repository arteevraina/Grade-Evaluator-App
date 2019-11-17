let calcy = () => {
    let eng = document.getElementById('eng').value;
    let hindi = document.getElementById('hindi').value;
    let maths = document.getElementById('maths').value;
    let science = document.getElementById('science').value;
    let sst = document.getElementById('sst').value;
    let perc;
    let grades = "";

// function should work only if user has entered some number

    

// checking if user has entered marks under 100

    if(parseFloat(eng) > 100 || parseFloat(hindi) > 100 || parseFloat(maths) > 100 || parseFloat(science) > 100 || parseFloat(sst) > 100)
    {
        alert('Enter marks correctly');
    }
    else
{
// calculating total marks

    let totalGrades = parseFloat(eng) + parseFloat(hindi) + parseFloat(maths) + parseFloat(science) + parseFloat(sst);
    perc = (totalGrades/500) * 100;

// calculating grades on the basis of percentage

    if(perc <= 100 && perc >= 80)
    {
        grades = "A";
    }
    else if(perc <= 79 && perc >= 60)
    {
        grades = "B";
    }
    else if(perc <= 59 && perc >=40)
    {
        grades = "C";
    }
    else
    {
        grades = "F";
    }

// Checking whether pass or false

    if(perc >= 40 && perc <= 100)
    {
        document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrades} and your percentage is ${perc}%. <br>
        Your grade is ${grades}. You are Pass.`;
    }
    else
    {
        document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrades} and your percentage is ${perc}%. <br>
        Your grade is ${grades}. You are Fail.`;
    }
}
}
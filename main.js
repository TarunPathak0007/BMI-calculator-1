const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height <=0 ||  isNaN(height)){
        result.innerHTML = 'Enter Valid Height';
    } else if(weight === '' || weight <=0 ||  isNaN(weight)){
        result.innerHTML = 'Enter Valid Weight';
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.6){
            document.getElementById('underWeight').style.backgroundColor = 'yellow';
            document.getElementById('underWeight').style.color = 'black';

            document.getElementById('normalRange').style.backgroundColor = '#f2f2f2';
            document.getElementById('normalRange').style.color = 'darkgrey';
            document.getElementById('overWeight').style.backgroundColor = '#f2f2f2';
            document.getElementById('overWeight').style.color = 'darkgrey';
        }
        else if(bmi>=18.6 && bmi<=24.9){
            document.getElementById('normalRange').style.backgroundColor = 'green';
            document.getElementById('normalRange').style.color = 'white';

            document.getElementById('underWeight').style.backgroundColor = '#f2f2f2';
            document.getElementById('underWeight').style.color = 'darkgrey';
            document.getElementById('overWeight').style.backgroundColor = '#f2f2f2';
            document.getElementById('overWeight').style.color = 'darkgrey';
        }
        else if(bmi>24.9){
            document.getElementById('overWeight').style.backgroundColor = 'red';
            document.getElementById('overWeight').style.color = 'white';

            document.getElementById('normalRange').style.backgroundColor = '#f2f2f2';
            document.getElementById('normalRange').style.color = 'darkgrey';
            document.getElementById('underWeight').style.backgroundColor = '#f2f2f2';
            document.getElementById('underWeight').style.color = 'darkgrey';
        }
    }

})
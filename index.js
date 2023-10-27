'use strict'

window.onload = init;

function init() {
    const btn = document.querySelector('button');
    btn.onclick = calculateCarRental;
}

function calculateCarRental() {
    const dailyCarRental = 29.99;

    //Get the inputs
    const daysRented = document.querySelector('#numberofDaysRented').value;

    //Calculate the unknown values
    const carRentalTotal = dailyCarRental * daysRented;
    let options = 0;
    let surcharge = 0;
    
    if(document.querySelector('#tollTag').checked){
        options += 3.95 * daysRented;
    }
    if(document.querySelector('#gps').checked){
        options += 2.95 * daysRented;
    }
    if(document.querySelector('#roadsideAssistance').checked){
        options += 2.95 * daysRented;
    }

    if(document.querySelector('#yes').checked){
        surcharge = 0.3 * dailyCarRental;
    }

    const totalDue = carRentalTotal + options + surcharge;

    //Get the outputs
    const carRentalOutput = document.querySelector('#carRental');
    const optionsOutput = document.querySelector('#options');
    const under25Output = document.querySelector('#under25Surcharge');
    const totalDueOutput = document.querySelector('#totalDue');

    carRentalOutput.textContent = `Car Rental: $${carRentalTotal.toFixed(2)}`;
    optionsOutput.textContent = `Options: $${options.toFixed(2)}`;
    under25Output.textContent = `Under 25 Surcharge: $${surcharge.toFixed(2)}`;
    totalDueOutput.textContent = `Total Due: $${totalDue.toFixed(2)}`;
}   
document.getElementById('donate-btn').addEventListener('click', () => {
    //get value from input field
    const donationAmount = getInputValueById('donationAmount');
    //get value from element
    const totalDonationValue = getElementValueById('totalDonation');
    //get total remaining money
    const remainingMoney = getElementValueById('remainingMoney');
    //get car Title
    const cardTitle = getInnerTextById('card-title');
    //get time
    const now = new Date();
    const time = now.toLocaleString();

    if (donationAmount > 0) {
        if (donationAmount > remainingMoney) {
            alert('Sorry! Insufficient Balance');
        } else {
            //add amount in the card donation section
            document.getElementById('totalDonation').innerText = totalDonationValue + donationAmount;
            //subtract from remaining Money
            document.getElementById('remainingMoney').innerText = remainingMoney - donationAmount;
            //clear donationAmount input field
            document.getElementById('donationAmount').value = "";

            //create history card
            const historyCard = document.createElement('div');

            historyCard.innerHTML =
                `<div class=" border border-gray-300 p-4 rounded-lg shadow-lg bg-lime-50 mb-3 ">
                    <h3 class="text-xl md:text-2xl font-semibold">${donationAmount} Taka is Donated for ${cardTitle}</h3> 
                    <p class =" text-gray-500 text-[16px] md:text-xl">Donate Time: ${time}</p>
                </div>`;

            const history = document.getElementById('history');
            history.appendChild(historyCard);
            //show Modal
            modal.classList.remove('hidden');
            //Close Modal
            const closeModal = document.getElementById('closeModal');
            closeModal.addEventListener('click', ()=>{
                modal.classList.add('hidden');
            });
        }

    }
    else {
        alert('Please enter a valid Number')
    }
})


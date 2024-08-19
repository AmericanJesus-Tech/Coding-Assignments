const formButton = document.getElementById('formSubmit')

formButton.addEventListener('click', (event) => {
    event.preventDefault()

    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let DOB = document.getElementById('DOB').value
    
    let newRow = document.createElement('tr')

    

    let firstNameData = document.createElement('td')
    firstNameData.innerHTML = firstName
    newRow.append(firstNameData)

    let lastNameData  = document.createElement('td')
    lastNameData.innerHTML = lastName
    newRow.append(lastNameData)

    let DOBData = document.createElement('td')
    DOBData.innerHTML = DOB
    newRow.append(DOBData)

   document.getElementById('tbody').appendChild(newRow)
})
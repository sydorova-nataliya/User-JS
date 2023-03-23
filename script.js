fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => renderUsers(json))

  function createElement(tagName, textContent, classNames, parent){
    let element = document.createElement(tagName);
    element.textContent = textContent;

    classNames.forEach(function(className){
      element.classList.add(className);
    })
    parent.append(element);
  }



  
  function renderUsers(data){
    data.forEach(user => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        wrap.innerHTML=`<h2>${user.name}</h2>`;

        createElement('p', user.id, ['user-id'], wrap);
        createElement('h3', user.username, ['username'], wrap);
        createElement('p', user.email, ['email'], wrap);

        let address = document.createElement('p');
        address.innerHTML=`${user.address.street}, ${user.address.suite}`;
        wrap.append(address);

        createElement('p', user.phone, ['phone'], wrap);
        createElement('button', user.website, ['user-website'], wrap);
        createElement('button', 'REMOVE', ['button-remove'], wrap);

        let company = document.createElement('p');
        company.innerHTML=`Company: ${user.company.name}`
        wrap.append(company);
        
        document.body.append(wrap);
        
        wrap.addEventListener('click', function(){
          wrap.classList.toggle('wrap-active');
        })

        wrap.addEventListener('mouseover', function(){
          let button = wrap.querySelector('.button-remove');
          button.style.display="block";
          button.addEventListener('click', function(){
          wrap.remove();
         })
        })
        
        wrap.addEventListener('mouseout', function(event){
          let button = wrap.querySelector('.button-remove');
          button.style.display="none";
        
        })
        
    });

  }
  
  const form = document.querySelector('.form');
  const submit = form.querySelector('.submit');
  const inputs = form.querySelectorAll('.form_input')

  const fieldId = document.getElementById('fieldId');
  const fieldName = document.getElementById('fieldName');
  const fieldUsername = document.getElementById('fieldUsername');
  const fieldEmail = document.getElementById('fieldEmail');
  const fieldAddressStreet = document.getElementById('fieldAddressStreet');
  const fieldAddressSuite = document.getElementById('fieldAddressSuite');
  const fieldPhone = document.getElementById('fieldPhone');
  const fieldWebsite = document.getElementById('fieldWebsite');
  const fieldCompanyName = document.getElementById('fieldCompanyName');

  form.addEventListener('submit', function(event){
    event.preventDefault();

    if(redField(inputs)){
      
          const newUser=[
            {
              'id':fieldId.value,
              'name':fieldName.value,
              "username": fieldUsername.value,
              "email": fieldEmail.value,
              "address": {
                "street": fieldAddressStreet.value,
                "suite": fieldAddressSuite.value,
                },
                "phone": fieldPhone.value,
                "website": fieldWebsite.value ,
                "company": {
                  "name": fieldCompanyName.value
                }
            }
          ]

    renderUsers(newUser)
    
    alert('User was added successfully');
    clearField(fieldId);
    clearField(fieldName);
    clearField(fieldUsername);
    clearField(fieldEmail);
    clearField(fieldAddressStreet);
    clearField(fieldAddressSuite);
    clearField(fieldPhone);
    clearField(fieldWebsite);
    clearField(fieldCompanyName);
    }

  } )

  function redField(inputs){
    let isValid = true;
    inputs.forEach(function(input){
      if(input.value===''){
        input.classList.add('red-field');
        isValid = false;
      } else{
        input.classList.remove('red-field');
      }
    })
    return isValid;
  }

  function clearField(element){
    element.value='';
  }


  
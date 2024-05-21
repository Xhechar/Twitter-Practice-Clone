let comboBoxSelection = document.querySelector('#users');
let profileDiv = document.querySelector('.user-details');
let postsDiv = document.querySelector('.person-section');
let commentsDiv = document.querySelector('.comments-section');


const dataFetcher = new Promise(async(resolve, reject) => {
  try {
    let fetchedUser = await fetch('https://jsonplaceholder.typicode.com/users');
    
    let data = await fetchedUser.json();

    let dataArray = data;
    
    resolve(dataArray);

    dataArray.forEach((optionItem, index) => {
      let comboOption = document.createElement('option');
      comboOption.textContent = optionItem.name;

      comboBoxSelection.appendChild(comboOption);
    })
    
    dataArray.forEach((user, index) => {

      comboBoxSelection.addEventListener('change', (event) => {

        let itemSelected = event.target.value;

        if (itemSelected === user.name) {

          let userId = user.id;
            
          emptyDiv = document.querySelectorAll('.user-details .innerContainerProfileDiv');
          emptyDiv.forEach(division => {
            division.remove();
          })

          let innerContainer = document.createElement('div');
          innerContainer.className = 'innerContainerProfileDiv';
          innerContainer.style.marginLeft = '2%'
          
          let userName = document.createElement('h1');
          userName.textContent = user.name;

          let twitterName = document.createElement('p');
          twitterName.textContent = `@ ${user.username}`;

          let websiteName = document.createElement('p');
          websiteName.textContent = user.website;

          let catchPhrase = document.createElement('p');
          catchPhrase.textContent = user.company.catchPhrase;

          let LocationHolder = document.createElement('div');
          LocationHolder.className = 'location-container';
          LocationHolder.style.display = 'flex'
          LocationHolder.style.justifyContent = 'flex-left'
          LocationHolder.style.columnGap = '30px'

          let locationImage = document.createElement('img');
          locationImage.setAttribute('src', 'icons/location_on_20dp.svg');
          let locationText = document.createElement('p');
          locationText.textContent = user.address.city;

          innerContainer.appendChild(userName);
          innerContainer.appendChild(twitterName);
          innerContainer.appendChild(websiteName);
          innerContainer.appendChild(catchPhrase);
          innerContainer.appendChild(LocationHolder);

          LocationHolder.appendChild(locationImage);
          LocationHolder.appendChild(locationText);


          profileDiv.appendChild(innerContainer);

          const postsResponse = new Promise(async(resolve, reject) => {
            
            try {
              
              let fetchedResponse = await fetch('https://jsonplaceholder.typicode.com/posts')

              let data = await fetchedResponse.json();
              
              resolve(data);

              let existingDiv = document.querySelectorAll('.person-section .division');
              existingDiv.forEach(innerDiv => {
                innerDiv.remove();
              })

              data.forEach((objectObtained) => {
                if (userId === objectObtained.userId) {
                  let userObject = objectObtained;

                  let division = document.createElement('div');
                  division.className = 'division';

                  let division1 = document.createElement('div');
                  division1.className = 'division1';
                  
                  let image1 = document.createElement('img');
                  image1.setAttribute('src', 'https://sb.kaleidousercontent.com/67418/1672x1018/6463a5af0d/screenshot-2022-05-24-at-15-22-28.png')

                  let division2 = document.createElement('div')
                  division2.className = 'division2';

                  let division3 = document.createElement('div')
                  division3.className = 'division3';

                  let postUserName = document.createElement('p')
                  postUserName.textContent = user.name;

                  let verified = document.createElement('img');
                  verified.setAttribute('src', 'icons/verify.png');

                  let twitterIcon = document.createElement('img');
                  twitterIcon.setAttribute('src', 'icons/twitter.png');

                  let division4 = document.createElement('div')
                  division4.className = 'division4';

                  let postBody = document.createElement('p');
                  postBody.textContent = userObject.body;

                  let division5 = document.createElement('div')
                  division5.className = 'division5';

                  let divisionA = document.createElement('div')
                  divisionA.className = 'divisionA';

                  let reactIcon = document.createElement('img');
                  reactIcon.setAttribute('src', 'icons/message.svg');

                  let reactionCount = document.createElement('p');
                  reactionCount.textContent = '200';

                  let divisionB = document.createElement('div')
                  divisionB.className = 'divisionB';

                  let reactIcon1 = document.createElement('img');
                  reactIcon1.setAttribute('src', 'icons/retweet.svg');

                  let reactionCount1 = document.createElement('p');
                  reactionCount1.textContent = '200';

                  let divisionC = document.createElement('div')
                  divisionC.className = 'divisionC';

                  let reactIcon2 = document.createElement('img');
                  reactIcon2.setAttribute('src', 'icons/heart.svg');

                  let reactionCount2 = document.createElement('p');
                  reactionCount2.textContent = '200';

                  division1.appendChild(image1);

                  division2.appendChild(division3);
                  division2.appendChild(division4);
                  division2.appendChild(division5);

                  division3.appendChild(postUserName);
                  division3.appendChild(verified);
                  division3.appendChild(twitterIcon);

                  division4.appendChild(postBody);

                  divisionA.appendChild(reactIcon);
                  divisionA.appendChild(reactionCount);

                  divisionB.appendChild(reactIcon1);
                  divisionB.appendChild(reactionCount1);

                  divisionC.appendChild(reactIcon2);
                  divisionC.appendChild(reactionCount2);

                  division5.appendChild(divisionA);
                  division5.appendChild(divisionB);
                  division5.appendChild(divisionC);

                  division.appendChild(division1);
                  division.appendChild(division2);

                  postsDiv.appendChild(division);
                }
              })

            } catch (error) {
              reject('error fetching posts data.')
            }

            const commentsResponse = new Promise(async(resolve, reject) => {
          
              try {
                
                let fetchedResponse = await fetch('https://jsonplaceholder.typicode.com/comments')
    
                let data = await fetchedResponse.json();
                
                resolve(data);
    
                let existingDiv = document.querySelectorAll('.comments-section .division');
                existingDiv.forEach(innerDiv => {
                  innerDiv.remove();
                })
    
                data.forEach((objectObtained) => {
                  if (userId === objectObtained.postId) {
                    let userObject = objectObtained;
    
                    let division = document.createElement('div');
                    division.className = 'division';
    
                    let division1 = document.createElement('div');
                    division1.className = 'division1';
                    
                    let image1 = document.createElement('img');
                    image1.setAttribute('src', 'https://sb.kaleidousercontent.com/67418/1672x1018/6463a5af0d/screenshot-2022-05-24-at-15-22-28.png')
    
                    let division2 = document.createElement('div')
                    division2.className = 'division2';
    
                    let division3 = document.createElement('div')
                    division3.className = 'division3';
    
                    let postUserName = document.createElement('p')
                    postUserName.textContent = userObject.name;
    
                    let verified = document.createElement('img');
                    verified.setAttribute('src', 'icons/verify.png');
    
                    let twitterIcon = document.createElement('img');
                    twitterIcon.setAttribute('src', 'icons/twitter.png');
    
                    let division4 = document.createElement('div')
                    division4.className = 'division4';
    
                    let postBody = document.createElement('p');
                    postBody.textContent = userObject.body;
    
                    let division5 = document.createElement('div')
                    division5.className = 'division5';
    
                    let divisionA = document.createElement('div')
                    divisionA.className = 'divisionA';
    
                    let reactIcon = document.createElement('img');
                    reactIcon.setAttribute('src', 'icons/message.svg');
    
                    let reactionCount = document.createElement('p');
                    reactionCount.textContent = '0';
    
                    let divisionB = document.createElement('div')
                    divisionB.className = 'divisionB';
    
                    let reactIcon1 = document.createElement('img');
                    reactIcon1.setAttribute('src', 'icons/retweet.svg');
    
                    let reactionCount1 = document.createElement('p');
                    reactionCount1.textContent = '0';
    
                    let divisionC = document.createElement('div')
                    divisionC.className = 'divisionC';
    
                    let reactIcon2 = document.createElement('img');
                    reactIcon2.setAttribute('src', 'icons/heart.svg');
    
                    let reactionCount2 = document.createElement('p');
                    reactionCount2.textContent = '0';
    
                    division1.appendChild(image1);
    
                    division2.appendChild(division3);
                    division2.appendChild(division4);
                    division2.appendChild(division5);
    
                    division3.appendChild(postUserName);
                    division3.appendChild(verified);
                    division3.appendChild(twitterIcon);
    
                    division4.appendChild(postBody);
    
                    divisionA.appendChild(reactIcon);
                    divisionA.appendChild(reactionCount);
    
                    divisionB.appendChild(reactIcon1);
                    divisionB.appendChild(reactionCount1);
    
                    divisionC.appendChild(reactIcon2);
                    divisionC.appendChild(reactionCount2);
    
                    division5.appendChild(divisionA);
                    division5.appendChild(divisionB);
                    division5.appendChild(divisionC);
    
                    division.appendChild(division1);
                    division.appendChild(division2);
    
                    commentsDiv.appendChild(division);
                  }
                })
    
              } catch (error) {
                reject('error fetching posts data.')
              }
    
            })

          })
        }
      })

    }) 

  } catch (error) {
    reject("Erro Fetching Data.")
  }
})
export function loadAvatar (){
  return new Promise(function(resolve, reject) {
    let formData = new FormData();
    const avatarPath = '../src/img/avatars/' + localStorage.getItem("userAvatar");

    fetch(avatarPath, {
        method: 'GET',
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {

        resolve(data)
    })
    .catch((error) => {
        console.error('Error:', error);
        reject(error);
    });
  })};
  // try {
  //   const response = await fetch(avatarPath);
    
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }

  //   const blob = await response.blob();
  //   return URL.createObjectURL(blob);
  // } catch (error) {
  //   console.error('Error loading avatar:', error);
  //   return null;
  // }

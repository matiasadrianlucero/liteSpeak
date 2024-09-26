export function retrieveImage(image){
    return new Promise(function(resolve, reject) {
        let formData = new FormData();
        formData.append("id", localStorage.getItem("id"));
        formData.append("loginToken", localStorage.getItem("loginToken"));
        formData.append("image", image);

        fetch('http://localhost/liteSpeak/src/backend/loggedInBackend/contacts/retrieveImage.php', {
            method: 'POST',
            body: formData,
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
    })
}
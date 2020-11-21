import { UserContext } from "../Providers/UserProvider";
import {auth} from "../firebase";
import {storage} from "../firebase";

export function changePic (){

const fileButton = document.querySelector('#fileButton');
var imageURL;

fileButton.addEventListener('change', function(e) {
    //get file 
    var file = e.target.files[0];
    //create a storage reference
    var storageRef = storage.ref('profilePictures/' + UserContext + '.jpg');
    //upload file
    var task = storageRef.put(file);
    //update progress bar
    task.on('state_changed',
        function progress(snapshot){

        },
        function error(err) {

        },
        function complete(){
            storageRef.getDownloadURL().then(function(url) {
                console.log(url);
                imageURL = url;

                var user = auth.currentUser;
                user.updateProfile({ photoURL: imageURL })
                .then(function() { console.log(user) })
                .catch(function(error) { console.log(error) });
            })
            .catch(function(error) {
                // Handle any errors
                console.log(error);
            });
            // window.location.replace('/profile');
            var user = auth.currentUser;
            user.updateProfile({
                photoURL: imageURL
            })
            .then(function() {
                // Update successful.
                console.log(user);
            })
            .catch(function(error) {
                // An error happened.
                console.log(error);
            });
        }
    );
});
};
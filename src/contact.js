import createElement from './createElement.js';
import borgPic from './people/people-borg.jpg';
import targanPic from './people/people-targan.jpg';
import simplexPic from './people/people-simplex.jpg';

function addStaff(name, role, email, imageUrl) {
    return {name, role, email, imageUrl}
}

export default function createContent() {
    const topText = createElement('h5', 'Got a suggestion? Complaint? Compliment?', 'margin-bottom')
    const title = createElement('h3', 'Send it our way!', 'title')
    const phoneMessage = "Reach a staff member anytime at +99-83-46-8283-92h8, then extension #1482, then option 5, then option 8, then option 23.64, then wait for the third tone that goes on and off making a sort of \"hhssskk\" sound, then at the prompt whisper quietly into the receiver the phrase \"radio 9 is incoming\", then wait a few minutes. If you are successful, you will hear another beep to leave a message."
    const phoneText = createElement('p', phoneMessage)
    const staffIntro = createElement('h4', 'Meet the Crater Cafe staff!', null, 'management-title');

    const contentContainer = document.getElementById('content-container');
    contentContainer.append(topText, title, phoneText, staffIntro)

    let staff = []
    staff.push(addStaff('Borg', 'Lead Manager', 'iamtheborg@cratercafe.com', borgPic))
    staff.push(addStaff('Targan', 'Server', 'targantheterrible@cratercafe.com', targanPic))
    staff.push(addStaff('Simplex', 'Cook', 'simplesimplex@cratercafe.com', simplexPic))

    staff.forEach((member) => {
        const peopleBox = createElement('div', null, 'staff-box');

        const profileImg = document.createElement('img')
        profileImg.setAttribute('src', member.imageUrl)
        peopleBox.appendChild(profileImg)

        const peopleInfoBox = createElement('div', null, 'people-info-box')
        
        const peopleName = createElement('h5', member.name, 'people-name')
        const peopleRole = createElement('p', member.role, 'people-role')
        const peopleEmail = createElement('p', member.email, 'people-email')
        peopleInfoBox.append(peopleName, peopleRole, peopleEmail)

        peopleBox.appendChild(peopleInfoBox)

        contentContainer.appendChild(peopleBox)
    })
}
// Welcome to Savory Haven, Your cozy neighborhood spot for mouthwatering comfort food and global flavors. Whether you're here for a casual bite or a hearty meal, our carefully curated menu and warm ambiance are sure to satisfy.

//  Operating Hours
// Monday to Friday: 11:00 AM – 10:00 PM

// Saturday & Sunday: 9:00 AM – 11:00 PM

// Holidays: Open unless otherwise announced

// 123 Flavor Street, Culinary City, CA 90210

export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeSection = document.createElement('div');
    homeSection.classList.add('tab-content');

    const homeBanner = document.createElement('div');
    homeBanner.classList.add('home-banner');
    homeSection.appendChild(homeBanner);

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Savory Haven';
    homeBanner.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = "Your cozy neighborhood spot for mouthwatering comfort food and global flavors. Whether you're here for a casual bite or a hearty meal, our carefully curated menu and warm ambiance are sure to satisfy.";
    homeBanner.appendChild(description);

    const hr1 = document.createElement('hr');
    homeSection.appendChild(hr1);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    homeSection.appendChild(hours);

    const hoursHeading = document.createElement('h1');
    hoursHeading.textContent = 'Operating Hours';
    hours.appendChild(hoursHeading);

    const hoursList = document.createElement('ul');
    const hoursData = [
        "Monday to Friday: 11:00 AM – 10:00 PM",
        "Saturday & Sunday: 9:00 AM – 11:00 PM",
        "Holidays: Open unless otherwise announced"
    ];
    hoursData.forEach(hour => {
        const li = document.createElement('li');
        li.textContent = hour;
        hoursList.appendChild(li);
    });
    hours.appendChild(hoursList);

    const hr2 = document.createElement('hr');
    homeSection.appendChild(hr2);

    const address = document.createElement('div');
    address.classList.add('address');
    const addressHeading = document.createElement('h1');
    addressHeading.textContent = 'Visit Us';
    address.appendChild(addressHeading);
   
    const addressText = document.createElement('p');
    addressText.textContent = '123 Flavor Street, Culinary City, CA 90210';
    address.appendChild(addressText);
    homeSection.appendChild(address);

    content.appendChild(homeSection);
    document.title = 'Savory Haven - Home';
}
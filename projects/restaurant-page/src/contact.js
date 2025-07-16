const contact = [
  {
    "branch": "Downtown",
    "address": "123 Flavor Street, Culinary City, CA 90210",
    "phone": "(555) 123-4567",
    "email": "downtown@savoryhaven.com"
  },
  {
    "branch": "Uptown",
    "address": "456 Aroma Ave, Culinary City, CA 90211",
    "phone": "(555) 987-6543",
    "email": "uptown@savoryhaven.com"
  },
  {
    "branch": "Westside",
    "address": "789 Sizzle Blvd, Culinary City, CA 90212",
    "phone": "(555) 246-8101",
    "email": "westside@savoryhaven.com"
  }
];

export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactSection = document.createElement('div');
    contactSection.classList.add('tab-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    contactSection.appendChild(heading);

    contact.forEach(branch => {
        const branchDiv = document.createElement('div');
        branchDiv.classList.add('branch');

        const name = document.createElement('h2');
        name.textContent = branch.branch;
        
        const address = document.createElement('p');
        address.textContent = `Address: ${branch.address}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${branch.phone}`;

        const email = document.createElement('p');
        email.textContent = `Email: ${branch.email}`;

        branchDiv.appendChild(name);
        branchDiv.appendChild(address);
        branchDiv.appendChild(phone);
        branchDiv.appendChild(email);
        contactSection.appendChild(branchDiv);
    })

    content.appendChild(contactSection);
    document.title = 'Savory Haven - Contact';
}
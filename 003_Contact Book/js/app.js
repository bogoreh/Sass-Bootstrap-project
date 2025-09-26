class ContactBook {
    constructor() {
        this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderContacts();
    }

    bindEvents() {
        document.getElementById('contactForm').addEventListener('submit', (e) => this.addContact(e));
        document.getElementById('searchInput').addEventListener('input', (e) => this.searchContacts(e.target.value));
        document.getElementById('categoryFilter').addEventListener('change', (e) => this.filterContacts(e.target.value));
    }

    addContact(e) {
        e.preventDefault();
        
        const contact = {
            id: Date.now(),
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            category: document.getElementById('category').value,
            dateAdded: new Date().toLocaleDateString()
        };

        this.contacts.unshift(contact);
        this.saveContacts();
        this.renderContacts();
        this.resetForm();
        
        // Show success message
        this.showAlert('Contact added successfully!', 'success');
    }

    deleteContact(id) {
        if (confirm('Are you sure you want to delete this contact?')) {
            this.contacts = this.contacts.filter(contact => contact.id !== id);
            this.saveContacts();
            this.renderContacts();
            this.showAlert('Contact deleted successfully!', 'danger');
        }
    }

    editContact(id) {
        const contact = this.contacts.find(c => c.id === id);
        if (contact) {
            document.getElementById('firstName').value = contact.firstName;
            document.getElementById('lastName').value = contact.lastName;
            document.getElementById('phone').value = contact.phone;
            document.getElementById('email').value = contact.email;
            document.getElementById('address').value = contact.address;
            document.getElementById('category').value = contact.category;

            // Remove the contact being edited
            this.contacts = this.contacts.filter(c => c.id !== id);
            this.saveContacts();
            
            this.showAlert('Contact loaded for editing!', 'info');
        }
    }

    searchContacts(query) {
        const filteredContacts = this.contacts.filter(contact => 
            contact.firstName.toLowerCase().includes(query.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(query.toLowerCase()) ||
            contact.phone.includes(query) ||
            contact.email.toLowerCase().includes(query.toLowerCase())
        );
        this.renderContacts(filteredContacts);
    }

    filterContacts(category) {
        if (category === 'all') {
            this.renderContacts();
        } else {
            const filteredContacts = this.contacts.filter(contact => contact.category === category);
            this.renderContacts(filteredContacts);
        }
    }

    renderContacts(contacts = this.contacts) {
        const contactsList = document.getElementById('contactsList');
        
        if (contacts.length === 0) {
            contactsList.innerHTML = `
                <div class="col-12">
                    <div class="empty-state">
                        <i>📱</i>
                        <h3>No contacts found</h3>
                        <p>Add your first contact to get started!</p>
                    </div>
                </div>
            `;
            return;
        }

        contactsList.innerHTML = contacts.map(contact => `
            <div class="col fade-in">
                <div class="contact-card">
                    <div class="contact-header">
                        <h3 class="contact-name">${contact.firstName} ${contact.lastName}</h3>
                        <span class="contact-category ${contact.category}">${contact.category}</span>
                    </div>
                    <div class="contact-details">
                        <div class="contact-info">
                            <i>📞</i>
                            <a href="tel:${contact.phone}">${contact.phone}</a>
                        </div>
                        ${contact.email ? `
                        <div class="contact-info">
                            <i>📧</i>
                            <a href="mailto:${contact.email}">${contact.email}</a>
                        </div>
                        ` : ''}
                        ${contact.address ? `
                        <div class="contact-info">
                            <i>🏠</i>
                            <span>${contact.address}</span>
                        </div>
                        ` : ''}
                        <div class="contact-info">
                            <i>📅</i>
                            <small class="text-muted">Added: ${contact.dateAdded}</small>
                        </div>
                    </div>
                    <div class="contact-actions">
                        <button class="btn btn-outline-primary btn-sm" onclick="contactBook.editContact(${contact.id})">
                            Edit
                        </button>
                        <button class="btn btn-outline-danger btn-sm" onclick="contactBook.deleteContact(${contact.id})">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    resetForm() {
        document.getElementById('contactForm').reset();
    }

    saveContacts() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }

    showAlert(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.querySelector('.contact-header').after(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    // Export contacts as JSON
    exportContacts() {
        const dataStr = JSON.stringify(this.contacts, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = 'contacts.json';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    // Import contacts from JSON
    importContacts(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedContacts = JSON.parse(e.target.result);
                    this.contacts = [...importedContacts, ...this.contacts];
                    this.saveContacts();
                    this.renderContacts();
                    this.showAlert('Contacts imported successfully!', 'success');
                } catch (error) {
                    this.showAlert('Error importing contacts!', 'danger');
                }
            };
            reader.readAsText(file);
        }
    }
}

// Initialize the contact book when the page loads
const contactBook = new ContactBook();

// Add export/import functionality to global scope
window.exportContacts = () => contactBook.exportContacts();
window.importContacts = (event) => contactBook.importContacts(event);
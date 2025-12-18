// ============================================
// CONFIGURAÇÕES DO SITE - LEARNING FOR CHANGE
// ============================================
// Altere aqui e as mudanças refletirão em todo o site

const SITE_CONFIG = {
  // Informações de Contato
  contact: {
    whatsapp: '447123456789', // Formato: código do país + número (sem espaços, sem +)
    whatsappMessage: "Hello, I'd like to know more about the courses.",
    email: 'info@learningforchange.org',
    phone: '+44 (0) 20 XXXX XXXX',
    address: 'London, United Kingdom'
  },
  
  // Informações da Organização
  organization: {
    name: 'Learning for Change',
    tagline: 'Skills for today, opportunities for tomorrow.',
    description: 'Empowering adults through inclusive education.',
    website: 'www.learningforchange.org',
    year: new Date().getFullYear()
  },
  
  // Redes Sociais (adicione quando tiver)
  social: {
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  }
};

// Função para atualizar WhatsApp em todo o site
function updateWhatsAppLinks() {
  const whatsappButtons = document.querySelectorAll('.whatsapp-float, a[href*="wa.me"]');
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.contact.whatsappMessage)}`;
  
  whatsappButtons.forEach(button => {
    button.href = whatsappUrl;
  });
}

// Função para atualizar informações de contato no footer
function updateContactInfo() {
  // Atualizar email
  const emailElements = document.querySelectorAll('.footer__list-item');
  emailElements.forEach(el => {
    if (el.textContent.includes('Email:')) {
      el.innerHTML = `Email: <a href="mailto:${SITE_CONFIG.contact.email}" style="color: inherit;">${SITE_CONFIG.contact.email}</a>`;
    }
    if (el.textContent.includes('Phone:')) {
      el.textContent = `Phone: ${SITE_CONFIG.contact.phone}`;
    }
    if (el.textContent.includes('Address:')) {
      el.textContent = `Address: ${SITE_CONFIG.contact.address}`;
    }
  });
  
  // Atualizar ano no copyright
  const copyrightElement = document.querySelector('.footer__bottom p');
  if (copyrightElement) {
    copyrightElement.innerHTML = `&copy; ${SITE_CONFIG.organization.year} ${SITE_CONFIG.organization.name}. All rights reserved. | <a href="#" class="footer__link">Privacy Policy</a> | <a href="#" class="footer__link">Terms of Service</a>`;
  }
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  updateWhatsAppLinks();
  updateContactInfo();
});

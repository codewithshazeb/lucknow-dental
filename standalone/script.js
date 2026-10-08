/**
 * Lucknow Dental And Implant Center (लखनऊ डेंटल केयर)
 * Pure Vanilla JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Menu Toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const mobileNavPanel = document.getElementById('mobileNavPanel');

  if (menuToggle && mobileNavPanel) {
    menuToggle.addEventListener('click', () => {
      mobileNavPanel.classList.toggle('open');
      const isOpen = mobileNavPanel.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when clicking any link inside it
    const mobileLinks = mobileNavPanel.querySelectorAll('a, button');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavPanel.classList.remove('open');
      });
    });
  }

  // --- 2. Services Filter Tabs ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filter === 'all' || cardCategory === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 3. Service Detail Modal ---
  const serviceModal = document.getElementById('serviceModal');
  const serviceModalTitle = document.getElementById('serviceModalTitle');
  const serviceModalHindi = document.getElementById('serviceModalHindi');
  const serviceModalCategory = document.getElementById('serviceModalCategory');
  const serviceModalDesc = document.getElementById('serviceModalDesc');
  const serviceModalReasons = document.getElementById('serviceModalReasons');
  const serviceModalNotice = document.getElementById('serviceModalNotice');

  // Service data lookup
  const servicesData = {
    'checkup': {
      title: 'Dental Check-Up',
      hindi: 'दांतों की नियमित जांच',
      category: 'General Care',
      desc: 'A comprehensive diagnostic evaluation to assess teeth, gums, and oral structures. Helps detect early cavities, gum irritation, or bite alignment issues.',
      reasons: ['Routine 6-month checkup', 'Sensitivity to hot or cold', 'Pre-treatment planning'],
      notice: 'Service category subject to clinical evaluation and confirmation by the clinic.'
    },
    'cleaning': {
      title: 'Teeth Cleaning & Scaling',
      hindi: 'दांतों की सफाई (स्केलिंग)',
      category: 'Preventive Care',
      desc: 'Professional removal of plaque, calcified tartar, and surface stains to preserve healthy gum margins and fresh breath.',
      reasons: ['Tartar buildup', 'Bleeding gums when brushing', 'Bad breath prevention', 'Surface stain removal'],
      notice: 'Service category subject to clinical evaluation and confirmation by the clinic.'
    },
    'rct': {
      title: 'Root Canal Treatment (RCT)',
      hindi: 'रूट कैनाल ट्रीटमेंट',
      category: 'Restorative Care',
      desc: 'A restorative endodontic procedure aimed at saving deeply decayed or infected teeth by gently cleaning infected pulp canals and sealing them.',
      reasons: ['Severe toothache or throbbing pain', 'Deep decay reaching the pulp', 'Prolonged sensitivity to hot/cold'],
      notice: 'Treatment outcomes depend on individual tooth anatomy. A clinical examination is required.'
    },
    'crowns': {
      title: 'Dental Crowns & Caps',
      hindi: 'डेंटल क्राउन एवं कैप',
      category: 'Restorative Care',
      desc: 'Custom-fitted restorations designed to strengthen weakened or post-RCT teeth and restore full chewing strength.',
      reasons: ['Protection following root canal therapy', 'Cracked or fractured tooth', 'Restoring biting integrity'],
      notice: 'Service category subject to clinical evaluation and confirmation by the clinic.'
    },
    'implants': {
      title: 'Dental Implants Consultation',
      hindi: 'डेंटल इंप्लांट परामर्श',
      category: 'Restorative Care',
      desc: 'Modern restorative solution to evaluate options for replacing missing natural teeth with biocompatible titanium posts.',
      reasons: ['Single or multiple missing teeth', 'Difficulty chewing', 'Alternative to loose removable dentures'],
      notice: 'Implant suitability requires bone density assessment and diagnostic radiography during consultation.'
    },
    'filling': {
      title: 'Tooth Filling (Restorations)',
      hindi: 'दांतों की भराई (फिलिंग)',
      category: 'General Care',
      desc: 'Tooth-colored composite fillings to repair cavities, prevent recurring decay, and blend naturally with tooth enamel.',
      reasons: ['Cavities detected during checkup', 'Food getting lodged between teeth', 'Minor chipped edges'],
      notice: 'Service category subject to clinical evaluation and confirmation by the clinic.'
    },
    'cosmetic': {
      title: 'Cosmetic Dentistry',
      hindi: 'कॉस्मेटिक दंत चिकित्सा',
      category: 'Cosmetic Care',
      desc: 'Aesthetic smile evaluations, shade improvement consultations, and alignment assessments.',
      reasons: ['Discolored teeth', 'Minor gaps between front teeth', 'Upcoming special occasions'],
      notice: 'Service category subject to clinical evaluation and confirmation by the clinic.'
    },
    'extraction': {
      title: 'Tooth Extraction',
      hindi: 'दांत निकालना',
      category: 'General Care',
      desc: 'Safe, controlled extraction for severely broken, heavily decayed, or impacted teeth when conservative methods are not viable.',
      reasons: ['Severely broken tooth below gum line', 'Impacted wisdom teeth discomfort', 'Severe infection risk'],
      notice: 'Service category subject to clinical evaluation and confirmation by the clinic.'
    },
    'gum': {
      title: 'Gum Care & Periodontics',
      hindi: 'मसूड़ों की देखभाल',
      category: 'Preventive Care',
      desc: 'Evaluation and management of gingivitis, bleeding gums, and periodontal health.',
      reasons: ['Swollen or tender gums', 'Bleeding during flossing or eating', 'Loose sensation in teeth'],
      notice: 'Service category subject to clinical evaluation and confirmation by the clinic.'
    },
    'preventive': {
      title: 'Preventive Dental Care',
      hindi: 'निवारक दंत चिकित्सा',
      category: 'Preventive Care',
      desc: 'Proactive oral care protocols designed to safeguard teeth against future decay and promote long-term dental wellness.',
      reasons: ['Cavity prevention for children and adults', 'Oral hygiene guidance', 'Dietary dental counseling'],
      notice: 'Service category subject to clinical evaluation and confirmation by the clinic.'
    }
  };

  document.querySelectorAll('.open-service-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.getAttribute('data-service');
      const data = servicesData[serviceKey];
      if (data && serviceModal) {
        serviceModalTitle.textContent = data.title;
        serviceModalHindi.textContent = data.hindi;
        serviceModalCategory.textContent = data.category;
        serviceModalDesc.textContent = data.desc;
        serviceModalNotice.textContent = data.notice;

        serviceModalReasons.innerHTML = '';
        data.reasons.forEach(r => {
          const li = document.createElement('li');
          li.textContent = '• ' + r;
          serviceModalReasons.appendChild(li);
        });

        serviceModal.classList.add('open');
      }
    });
  });

  // --- 4. Doctor Profile Modal ---
  const doctorModal = document.getElementById('doctorModal');
  const doctorModalName = document.getElementById('doctorModalName');
  const doctorModalRole = document.getElementById('doctorModalRole');
  const doctorModalQual = document.getElementById('doctorModalQual');
  const doctorModalSpec = document.getElementById('doctorModalSpec');

  document.querySelectorAll('.open-doctor-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docName = btn.getAttribute('data-name') || 'Dr. [Doctor Name]';
      const docRole = btn.getAttribute('data-role') || 'Dentist / Dental Surgeon';
      const docQual = btn.getAttribute('data-qual') || '[Add qualifications]';
      const docSpec = btn.getAttribute('data-spec') || '[Add specialization]';

      if (doctorModal) {
        doctorModalName.textContent = docName;
        doctorModalRole.textContent = docRole;
        doctorModalQual.textContent = docQual;
        doctorModalSpec.textContent = docSpec;
        doctorModal.classList.add('open');
      }
    });
  });

  // --- 5. Gallery Lightbox ---
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxBadge = document.getElementById('lightboxBadge');

  const galleryItems = [
    { title: 'Dental Operatory & Consultation Suite', desc: 'Clean clinical environment designed for patient relaxation and consultations in Vikas Nagar.', badge: 'Operatory 1' },
    { title: 'Dental Chair & Ergonomic Setup', desc: 'Modern examination chair equipped with focused LED illumination and hygienic surfaces.', badge: 'Equipment' },
    { title: 'Patient Waiting Lounge & Reception', desc: 'Air-conditioned, calm reception area where patients can comfortably check in.', badge: 'Reception' },
    { title: 'Precision Dental Examination Tools', desc: 'Sterilized dental examination instruments organized in accordance with strict clinic hygiene.', badge: 'Hygiene' },
    { title: 'Consultation & Diagnostics Desk', desc: 'Dedicated area where the dental practitioner reviews findings and discusses treatment plans.', badge: 'Consultation' },
    { title: 'Clinical Sterilization & Sanitation Area', desc: 'Maintained clinical station ensuring rigorous instrument autoclaving standards.', badge: 'Sterilization' }
  ];

  let currentGalleryIndex = 0;

  function updateLightbox(index) {
    const item = galleryItems[index];
    if (item && lightboxModal) {
      lightboxTitle.textContent = item.title;
      lightboxDesc.textContent = item.desc;
      lightboxBadge.textContent = item.badge;
    }
  }

  document.querySelectorAll('.gallery-card').forEach((card, idx) => {
    card.addEventListener('click', () => {
      currentGalleryIndex = idx;
      updateLightbox(currentGalleryIndex);
      if (lightboxModal) lightboxModal.classList.add('open');
    });
  });

  const btnPrevGallery = document.getElementById('btnPrevGallery');
  const btnNextGallery = document.getElementById('btnNextGallery');

  if (btnPrevGallery) {
    btnPrevGallery.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightbox(currentGalleryIndex);
    });
  }

  if (btnNextGallery) {
    btnNextGallery.addEventListener('click', () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
      updateLightbox(currentGalleryIndex);
    });
  }

  // --- 6. Legal Modals (Disclaimer, Privacy, Terms) ---
  const legalModal = document.getElementById('legalModal');
  const legalModalTitle = document.getElementById('legalModalTitle');
  const legalModalBody = document.getElementById('legalModalBody');

  const legalTexts = {
    'disclaimer': {
      title: 'Medical & Dental Disclaimer',
      html: `<p><strong>Medical Disclaimer:</strong> The information provided on this website is for general informational purposes only and should not be considered a substitute for professional medical or dental advice. Treatment recommendations may vary depending on individual patient conditions. Please consult a qualified dental professional for diagnosis and treatment.</p>
             <p style="margin-top:10px;">Submitting an appointment inquiry or browsing this website does not establish a formal doctor-patient relationship. In cases of acute dental trauma, severe bleeding, or emergency swelling, please visit the nearest hospital emergency room immediately.</p>`
    },
    'privacy': {
      title: 'Privacy Policy',
      html: `<p><strong>Lucknow Dental And Implant Center</strong> respects your privacy. Because our appointment form collects personal details (such as your full name and phone number), this policy clarifies how information is handled.</p>
             <p style="margin-top:10px;"><strong>1. Information Collection:</strong> We collect only the contact details you voluntarily provide for booking consultations.</p>
             <p style="margin-top:10px;"><strong>2. Use of Information:</strong> Details are used exclusively by clinic reception to call and confirm requested appointments. We do not sell or distribute your phone number to third parties.</p>`
    },
    'terms': {
      title: 'Terms & Conditions',
      html: `<p>By browsing this website, you understand that online appointment requests constitute preliminary scheduling inquiries and do not guarantee an instantaneous appointment time until verified by clinic staff.</p>
             <p style="margin-top:10px;">All dental treatments and fees are finalized exclusively following clinical examination at our Vikas Nagar clinic.</p>`
    }
  };

  document.querySelectorAll('.open-legal-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-type');
      const content = legalTexts[type];
      if (content && legalModal) {
        legalModalTitle.textContent = content.title;
        legalModalBody.innerHTML = content.html;
        legalModal.classList.add('open');
      }
    });
  });

  // --- 7. Generic Modal Close Buttons & Backdrop Clicks ---
  document.querySelectorAll('.close-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('open'));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('open');
      }
    });
  });

  // --- 8. Appointment Form Validation & Submission ---
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentSuccessBox = document.getElementById('appointmentSuccessBox');
  const appointmentErrorBox = document.getElementById('appointmentErrorBox');
  const summaryName = document.getElementById('summaryName');
  const summaryPhone = document.getElementById('summaryPhone');
  const summaryDateTime = document.getElementById('summaryDateTime');
  const summaryReason = document.getElementById('summaryReason');
  const btnBookAnother = document.getElementById('btnBookAnother');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (appointmentErrorBox) appointmentErrorBox.style.display = 'none';

      const fullName = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const preferredDate = document.getElementById('preferredDate').value;
      const preferredTime = document.getElementById('preferredTime').value;
      const reasonForVisit = document.getElementById('reasonForVisit').value;

      // Validation
      if (!fullName) {
        showError('Please enter your full name.');
        return;
      }

      const digitsOnly = phone.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        showError('Please enter a valid 10-digit mobile phone number.');
        return;
      }

      if (!preferredDate) {
        showError('Please select your preferred date for the appointment.');
        return;
      }

      // Successful state
      if (summaryName) summaryName.textContent = fullName;
      if (summaryPhone) summaryPhone.textContent = phone;
      if (summaryDateTime) summaryDateTime.textContent = `${preferredDate} (${preferredTime})`;
      if (summaryReason) summaryReason.textContent = reasonForVisit;

      appointmentForm.style.display = 'none';
      if (appointmentSuccessBox) appointmentSuccessBox.classList.add('active');
    });
  }

  function showError(msg) {
    if (appointmentErrorBox) {
      appointmentErrorBox.textContent = msg;
      appointmentErrorBox.style.display = 'block';
    }
  }

  if (btnBookAnother) {
    btnBookAnother.addEventListener('click', () => {
      if (appointmentForm) {
        appointmentForm.reset();
        appointmentForm.style.display = 'block';
      }
      if (appointmentSuccessBox) appointmentSuccessBox.classList.remove('active');
      if (appointmentErrorBox) appointmentErrorBox.style.display = 'none';
    });
  }

  // --- 9. Modal "Book Consultation" redirect to appointment form ---
  document.querySelectorAll('.modal-goto-booking').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('open'));
      const aptSec = document.getElementById('appointment');
      if (aptSec) aptSec.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

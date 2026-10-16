import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Update Current Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        document.body.style.overflow = 'auto';
      });
    }

    // Close on mobile nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        document.body.style.overflow = 'auto';
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerEl = item.querySelector('.faq-answer');
    const iconEl = item.querySelector('.faq-icon');

    if (questionBtn && answerEl) {
      questionBtn.addEventListener('click', () => {
        const isOpen = !answerEl.classList.contains('hidden');

        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherAnswer) otherAnswer.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        // Toggle current item
        if (!isOpen) {
          answerEl.classList.remove('hidden');
          if (iconEl) iconEl.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // Location Region Filter Tabs
  const regionTabs = document.querySelectorAll('.region-tab');
  const locationRows = document.querySelectorAll('.location-row');

  regionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      regionTabs.forEach(t => {
        t.classList.remove('bg-rose-500/20', 'text-rose-400', 'border-rose-500/40');
        t.classList.add('bg-white/5', 'text-slate-400', 'border-white/10');
      });

      tab.classList.remove('bg-white/5', 'text-slate-400', 'border-white/10');
      tab.classList.add('bg-rose-500/20', 'text-rose-400', 'border-rose-500/40');

      const region = tab.getAttribute('data-region');
      locationRows.forEach(row => {
        if (region === 'all' || row.getAttribute('data-region') === region) {
          row.style.display = 'flex';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // Modal Handlers (Privacy, Terms, Contact)
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeModalBtn = document.getElementById('close-modal-btn');

  const modalContents = {
    privacy: {
      title: "Privacy Policy",
      body: `
        <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p><strong>Last Updated: October 2026</strong></p>
          <p>At ChatMate, your privacy and security are our top priorities. We are committed to protecting your personal information and ensuring a safe dating environment.</p>
          <h4 class="text-white font-semibold text-base mt-2">1. Information We Collect</h4>
          <p>We only collect minimal required data to provide our matching and chat services, including account registration details, optional profile photos, and location preferences.</p>
          <h4 class="text-white font-semibold text-base mt-2">2. How We Use Data</h4>
          <p>Your data is used strictly to connect you with nearby users, facilitate voice and video communications, and prevent fraudulent activity.</p>
          <h4 class="text-white font-semibold text-base mt-2">3. Data Encryption & Security</h4>
          <p>All private messages, voice calls, and media streams are encrypted using end-to-end security protocols. We do not sell or share your personal data with third-party advertisers.</p>
        </div>
      `
    },
    terms: {
      title: "Terms of Service",
      body: `
        <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p><strong>Last Updated: October 2026</strong></p>
          <p>Welcome to ChatMate! By downloading or using our application, you agree to comply with these terms.</p>
          <h4 class="text-white font-semibold text-base mt-2">1. User Eligibility</h4>
          <p>You must be at least 18 years of age to create an account and use ChatMate services.</p>
          <h4 class="text-white font-semibold text-base mt-2">2. Community Rules & Safety</h4>
          <p>ChatMate maintains zero tolerance for harassment, hate speech, spam, or explicit non-consensual content. Violators will face immediate account suspension.</p>
          <h4 class="text-white font-semibold text-base mt-2">3. Account Integrity</h4>
          <p>You agree to provide accurate information and maintain photo verification standards to foster an authentic community.</p>
        </div>
      `
    },
    contact: {
      title: "Contact Support",
      body: `
        <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>Have questions, feedback, or need assistance? Our support team is here for you 24/7!</p>
          <div class="bg-violet-950/40 p-4 rounded-xl border border-violet-500/20 space-y-2">
            <p><strong class="text-white">Email Support:</strong> support@chatmate.app</p>
            <p><strong class="text-white">Community Help:</strong> help@chatmate.app</p>
            <p><strong class="text-white">Location:</strong> Tamil Nadu, India</p>
          </div>
          <p>We typically respond to inquiries within 2-4 hours.</p>
        </div>
      `
    }
  };

  const openModal = (type) => {
    if (modalContents[type] && modalOverlay) {
      modalTitle.textContent = modalContents[type].title;
      modalBody.innerHTML = modalContents[type].body;
      modalOverlay.classList.remove('hidden');
      modalOverlay.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.add('hidden');
      modalOverlay.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
  };

  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const type = trigger.getAttribute('data-modal');
      openModal(type);
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
});

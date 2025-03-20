// Navigation Management Class
class NavigationManager {
  constructor() {
    this.elements = {
      menu: document.querySelector('.menu'),
      cart: document.querySelector('.mobile-cart'),
      overlay: document.querySelector('.overlay'),
      mobileSubMenu: document.getElementById('mobile-sub-menu')
    };

    this.buttons = {
      navOpen: document.querySelector('.nav-icon'),
      navClose: document.querySelector('.close-nav-btn'),
      cartOpen: document.querySelector('.shopping-icon'),
      cartClose: document.querySelector('.close-cart-btn'),
      mobileNavShop: document.getElementById('mobile-nav-shop')
    };

    this.cssClasses = {
      hidden: 'hidden',
      overlayActive: 'overlay-active',
      leftHidden: '-left-64',
      leftVisible: 'left-0',
      rightHidden: '-right-64',
      rightVisible: 'right-0'
    };
  }

  initialize() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Cart controls
    this.buttons.cartOpen?.addEventListener('click', () => this.toggleCart(true));
    this.buttons.cartClose?.addEventListener('click', () => this.toggleCart(false));

    // Navigation controls
    this.buttons.navOpen?.addEventListener('click', () => this.toggleMenu(true));
    this.buttons.navClose?.addEventListener('click', () => this.toggleMenu(false));

    // Overlay click handler
    this.elements.overlay?.addEventListener('click', () => {
      this.toggleMenu(false);
      this.toggleCart(false);
    });

    // Mobile shop submenu
    this.buttons.mobileNavShop?.addEventListener('click', () => {
      this.elements.mobileSubMenu?.classList.toggle(this.cssClasses.hidden);
    });
  }

  toggleCart(show) {
    if (!this.elements.cart) return;

    this.elements.cart.classList.toggle(this.cssClasses.leftHidden, !show);
    this.elements.cart.classList.toggle(this.cssClasses.leftVisible, show);
    this.toggleOverlay(show);
  }

  toggleMenu(show) {
    if (!this.elements.menu) return;

    this.elements.menu.classList.toggle(this.cssClasses.rightHidden, !show);
    this.elements.menu.classList.toggle(this.cssClasses.rightVisible, show);
    this.toggleOverlay(show);
  }

  toggleOverlay(show) {
    this.elements.overlay?.classList.toggle(this.cssClasses.overlayActive, show);
  }
}

const template = document.createElement('template');

template.innerHTML = `
<h1 class="sup">hello</h1>
<style>
    :host{
    width: 500px;
    height: 500px;
    background-color: red;
    }
</style>
`;

class sideSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        let header = this.shadowRoot.querySelector('h1');
        header.innerHTML = 'Hola';
    }

    clickBox() {
        this.addEventListener('click', () => {
            this.style.backgroundColor = '#F2C93D';
        });
    }
}

customElements.define('left-menu', sideSection);

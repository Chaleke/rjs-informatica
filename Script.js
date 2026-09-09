"use strict";

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CONFIGURAÇÕES
    ===================================================== */

    const ADMIN_WHATSAPP = "258879604348";

    let pedidos = [];
    let servicoAtual = "";


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const serviceModal =
        document.getElementById("serviceModal");

    const serviceModalTitle =
        document.getElementById("serviceModalTitle");

    const serviceModalDescription =
        document.getElementById("serviceModalDescription");

    const serviceFields =
        document.getElementById("serviceFields");

    const serviceForm =
        document.getElementById("serviceForm");

    const serviceQuantity =
        document.getElementById("serviceQuantity");

    const serviceDescription =
        document.getElementById("serviceDescription");

    const customerName =
        document.getElementById("customerName");

    const customerPhone =
        document.getElementById("customerPhone");

    const closeServiceModal =
        document.getElementById("closeServiceModal");

    const cancelService =
        document.getElementById("cancelService");

    const orderPanel =
        document.getElementById("orderPanel");

    const orderItems =
        document.getElementById("orderItems");

    const orderCount =
        document.getElementById("orderCount");

    const floatingOrderCount =
        document.getElementById("floatingOrderCount");

    const openOrderPanel =
        document.getElementById("openOrderPanel");

    const closeOrderPanel =
        document.getElementById("closeOrderPanel");

    const sendOrderWhatsApp =
        document.getElementById("sendOrderWhatsApp");


    /* =====================================================
       NAVEGAÇÃO
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener("click", function (event) {

                const id =
                    link.getAttribute("href");

                if (!id || id === "#") {
                    return;
                }

                const target =
                    document.querySelector(id);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =====================================================
       HEADER
    ===================================================== */

    const header =
        document.querySelector(".header");

    function atualizarHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        atualizarHeader,
        { passive: true }
    );

    atualizarHeader();


    /* =====================================================
       CAMPOS DOS SERVIÇOS
    ===================================================== */

    function campoSelect(id, label, opcoes) {

        let html = `
            <div class="form-group">

                <label for="${id}">
                    ${label}
                </label>

                <select
                    id="${id}"
                    name="${id}"
                >
        `;

        opcoes.forEach(function (opcao) {

            html += `
                <option value="${opcao}">
                    ${opcao}
                </option>
            `;

        });

        html += `
                </select>

            </div>
        `;

        return html;
    }


    function campoTexto(
        id,
        label,
        placeholder
    ) {

        return `
            <div class="form-group">

                <label for="${id}">
                    ${label}
                </label>

                <input
                    type="text"
                    id="${id}"
                    name="${id}"
                    placeholder="${placeholder}"
                >

            </div>
        `;

    }


    function carregarCamposServico(servico) {

        if (!serviceFields) {
            return;
        }

        let html = "";


        /* =================================================
           T-SHIRTS
        ================================================= */

        if (servico === "T-Shirts") {

            html += campoSelect(
                "cor",
                "Cor",
                [
                    "Branco",
                    "Preto",
                    "Azul",
                    "Vermelho",
                    "Amarelo",
                    "Outra cor"
                ]
            );

            html += campoSelect(
                "tamanho",
                "Tamanho",
                [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ]
            );

            html += campoSelect(
                "posicao",
                "Local da personalização",
                [
                    "Frente",
                    "Costas",
                    "Frente e costas",
                    "Manga"
                ]
            );

        }


        /* =================================================
           CAMISAS
        ================================================= */

        else if (servico === "Camisas") {

            html += campoSelect(
                "cor",
                "Cor",
                [
                    "Branco",
                    "Preto",
                    "Azul",
                    "Vermelho",
                    "Outra cor"
                ]
            );

            html += campoSelect(
                "tamanho",
                "Tamanho",
                [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ]
            );

            html += campoSelect(
                "personalizacao",
                "Personalização",
                [
                    "Frente",
                    "Costas",
                    "Frente e costas"
                ]
            );

        }


        /* =================================================
           BONÉS
        ================================================= */

        else if (servico === "Bonés") {

            html += campoSelect(
                "cor",
                "Cor",
                [
                    "Preto",
                    "Branco",
                    "Azul",
                    "Vermelho",
                    "Outra cor"
                ]
            );

            html += campoSelect(
                "personalizacao",
                "Personalização",
                [
                    "Frente",
                    "Lateral",
                    "Frente e lateral"
                ]
            );

        }


        /* =================================================
           CHAVENAS
        ================================================= */

        else if (servico === "Chavenas") {

            html += campoSelect(
                "cor",
                "Cor",
                [
                    "Branca",
                    "Preta",
                    "Outra"
                ]
            );

            html += campoSelect(
                "personalizacao",
                "Personalização",
                [
                    "Texto",
                    "Imagem",
                    "Texto e imagem"
                ]
            );

        }


        /* =================================================
           BANNERS
        ================================================= */

        else if (servico === "Banners") {

            html += campoTexto(
                "largura",
                "Largura",
                "Ex.: 2 metros"
            );

            html += campoTexto(
                "altura",
                "Altura",
                "Ex.: 1 metro"
            );

            html += campoSelect(
                "material",
                "Material",
                [
                    "Lona",
                    "Outro"
                ]
            );

        }


        /* =================================================
           FLYERS
        ================================================= */

        else if (servico === "Flyers") {

            html += campoSelect(
                "formato",
                "Formato",
                [
                    "A6",
                    "A5",
                    "A4",
                    "Outro"
                ]
            );

            html += campoSelect(
                "impressao",
                "Impressão",
                [
                    "Frente",
                    "Frente e verso"
                ]
            );

        }


        /* =================================================
           PANFLETOS
        ================================================= */

        else if (servico === "Panfletos") {

            html += campoSelect(
                "formato",
                "Formato",
                [
                    "A6",
                    "A5",
                    "A4",
                    "Outro"
                ]
            );

            html += campoSelect(
                "impressao",
                "Impressão",
                [
                    "Frente",
                    "Frente e verso"
                ]
            );

        }


        /* =================================================
           CARTÕES DE VISITA
        ================================================= */

        else if (servico === "Cartões de visita") {

            html += campoSelect(
                "impressao",
                "Impressão",
                [
                    "Frente",
                    "Frente e verso"
                ]
            );

            html += campoSelect(
                "acabamento",
                "Acabamento",
                [
                    "Normal",
                    "Outro"
                ]
            );

        }


        /* =================================================
           CONVITES
        ================================================= */

        else if (servico === "Convites") {

            html += campoSelect(
                "formato",
                "Formato",
                [
                    "A6",
                    "A5",
                    "A4",
                    "Personalizado"
                ]
            );

            html += campoSelect(
                "tipo",
                "Tipo",
                [
                    "Digital",
                    "Impresso"
                ]
            );

        }


        /* =================================================
           IDENTIDADE VISUAL
        ================================================= */

        else if (servico === "Identidade visual") {

            html += campoSelect(
                "necessidade",
                "O que precisa?",
                [
                    "Logotipo",
                    "Logotipo + identidade",
                    "Identidade visual completa"
                ]
            );

            html += campoTexto(
                "marca",
                "Nome da marca",
                "Digite o nome da marca"
            );

        }


        /* =================================================
           BRINDES
        ================================================= */

        else if (servico === "Brindes") {

            html += campoTexto(
                "tipoBrinde",
                "Tipo de brinde",
                "Ex.: caneta, chaveiro..."
            );

            html += campoSelect(
                "personalizacao",
                "Personalização",
                [
                    "Texto",
                    "Imagem",
                    "Texto e imagem"
                ]
            );

        }


        /* =================================================
           UNIFORMES ESCOLARES
        ================================================= */

        else if (servico === "Uniformes escolares") {

            html += campoSelect(
                "tamanho",
                "Tamanho",
                [
                    "Infantil",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ]
            );

            html += campoSelect(
                "tipo",
                "Tipo",
                [
                    "Camiseta",
                    "Camisa",
                    "Conjunto",
                    "Outro"
                ]
            );

            html += campoTexto(
                "escola",
                "Nome da escola",
                "Digite o nome da escola"
            );

        }


        /* =================================================
           AUTOCOLANTES E RÓTULOS
        ================================================= */

        else if (servico === "Autocolantes e rótulos") {

            html += campoTexto(
                "largura",
                "Largura",
                "Ex.: 10 cm"
            );

            html += campoTexto(
                "altura",
                "Altura",
                "Ex.: 5 cm"
            );

            html += campoSelect(
                "tipo",
                "Tipo",
                [
                    "Autocolante",
                    "Rótulo"
                ]
            );

        }


        /* =================================================
           DOCUMENTOS
        ================================================= */

        else if (servico === "Documentos") {

            html += campoSelect(
                "papel",
                "Papel",
                [
                    "A4",
                    "A3",
                    "A5"
                ]
            );

            html += campoSelect(
                "impressao",
                "Impressão",
                [
                    "Preto e branco",
                    "Colorida"
                ]
            );

        }


        /* =================================================
           FOTO RÁPIDA
        ================================================= */

        else if (servico === "Foto rápida") {

            html += campoSelect(
                "tamanhoFoto",
                "Tamanho",
                [
                    "10x15 cm",
                    "13x18 cm",
                    "15x21 cm",
                    "Outro"
                ]
            );

        }


        /* =================================================
           TOPPERS DE BOLO
        ================================================= */

        else if (servico === "Toppers de bolo") {

            html += campoSelect(
                "material",
                "Material",
                [
                    "Papel",
                    "Cartolina",
                    "Outro"
                ]
            );

            html += campoTexto(
                "nome",
                "Nome ou texto",
                "Ex.: Feliz aniversário Ana"
            );

        }


        serviceFields.innerHTML = html;

    }


    /* =====================================================
       ABRIR SERVIÇO
    ===================================================== */

    document
        .querySelectorAll(".service-card")
        .forEach(function (card) {

            card.addEventListener(
                "click",
                function () {

                    servicoAtual =
                        card.dataset.service ||
                        card.getAttribute("data-service") ||
                        "Serviço";

                    if (serviceModalTitle) {

                        serviceModalTitle.textContent =
                            servicoAtual;

                    }

                    if (serviceModalDescription) {

                        serviceModalDescription.textContent =
                            "Configure o seu pedido de " +
                            servicoAtual +
                            " e informe os detalhes.";

                    }

                    carregarCamposServico(
                        servicoAtual
                    );

                    if (serviceQuantity) {
                        serviceQuantity.value = "1";
                    }

                    if (serviceDescription) {
                        serviceDescription.value = "";
                    }

                    if (customerName) {
                        customerName.value = "";
                    }

                    if (customerPhone) {
                        customerPhone.value = "";
                    }

                    if (serviceModal) {

                        serviceModal.classList.add(
                            "active"
                        );

                        serviceModal.setAttribute(
                            "aria-hidden",
                            "false"
                        );

                    }

                    document.body.classList.add(
                        "modal-open"
                    );

                }
            );

        });


    /* =====================================================
       FECHAR SERVIÇO
    ===================================================== */

    function fecharServico() {

        if (serviceModal) {

            serviceModal.classList.remove(
                "active"
            );

            serviceModal.setAttribute(
                "aria-hidden",
                "true"
            );

        }

        document.body.classList.remove(
            "modal-open"
        );

    }


    if (closeServiceModal) {

        closeServiceModal.addEventListener(
            "click",
            fecharServico
        );

    }


    if (cancelService) {

        cancelService.addEventListener(
            "click",
            fecharServico
        );

    }


    const modalOverlay =
        document.querySelector(
            ".service-modal-overlay"
        );

    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            fecharServico
        );

    }


    /* =====================================================
       FIM DA PARTE 1
    ===================================================== */
        /* =====================================================
       ADICIONAR PEDIDO
    ===================================================== */

    if (serviceForm) {

        serviceForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const quantidade =
                    Number(
                        serviceQuantity
                            ? serviceQuantity.value
                            : 1
                    ) || 1;


                const nome =
                    customerName
                        ? customerName.value.trim()
                        : "";


                const contacto =
                    customerPhone
                        ? customerPhone.value.trim()
                        : "";


                if (!nome) {

                    alert(
                        "Digite o seu nome."
                    );

                    if (customerName) {
                        customerName.focus();
                    }

                    return;
                }


                if (!contacto) {

                    alert(
                        "Digite o seu contacto."
                    );

                    if (customerPhone) {
                        customerPhone.focus();
                    }

                    return;
                }


                const detalhes = {};


                if (serviceFields) {

                    const campos =
                        serviceFields.querySelectorAll(
                            "input, select, textarea"
                        );


                    campos.forEach(
                        function (campo) {

                            if (
                                campo.name &&
                                campo.value.trim() !== ""
                            ) {

                                detalhes[
                                    campo.name
                                ] =
                                    campo.value.trim();

                            }

                        }
                    );

                }


                const pedido = {

                    servico:
                        servicoAtual ||
                        "Serviço",

                    quantidade:
                        quantidade,

                    descricao:
                        serviceDescription
                            ? serviceDescription.value.trim()
                            : "",

                    nome:
                        nome,

                    contacto:
                        contacto,

                    detalhes:
                        detalhes

                };


                pedidos.push(
                    pedido
                );


                console.log(
                    "PEDIDO ADICIONADO:",
                    pedido
                );


                atualizarPedido();

                fecharServico();

                abrirPedido();


                if (serviceForm) {
                    serviceForm.reset();
                }


                if (serviceQuantity) {
                    serviceQuantity.value = "1";
                }

            }
        );

    }


    /* =====================================================
       MOSTRAR PEDIDOS
    ===================================================== */

    function atualizarPedido() {

        if (!orderItems) {
            return;
        }


        orderItems.innerHTML = "";


        if (pedidos.length === 0) {

            orderItems.innerHTML = `
                <div class="empty-order">

                    <p>
                        O seu pedido está vazio.
                    </p>

                    <span>
                        Escolha um serviço para começar.
                    </span>

                </div>
            `;

        } else {

            pedidos.forEach(
                function (pedido, index) {

                    let detalhesHTML = "";


                    Object.keys(
                        pedido.detalhes
                    ).forEach(
                        function (chave) {

                            const valor =
                                pedido.detalhes[chave];

                            if (!valor) {
                                return;
                            }


                            detalhesHTML += `
                                <div class="order-detail">

                                    <strong>
                                        ${chave}:
                                    </strong>

                                    ${valor}

                                </div>
                            `;

                        }
                    );


                    const item =
                        document.createElement(
                            "div"
                        );


                    item.className =
                        "order-item";


                    item.innerHTML = `

                        <div class="order-item-header">

                            <div>

                                <h4>
                                    ${pedido.servico}
                                </h4>

                                <span>
                                    Quantidade:
                                    ${pedido.quantidade}
                                </span>

                            </div>


                            <button
                                type="button"
                                class="remove-order"
                                data-index="${index}"
                                aria-label="Remover pedido"
                            >
                                ×
                            </button>

                        </div>


                        <div class="order-item-details">

                            ${detalhesHTML}

                        </div>


                        ${
                            pedido.descricao
                                ? `
                                    <div class="order-description">

                                        <strong>
                                            Descrição:
                                        </strong>

                                        <p>
                                            ${pedido.descricao}
                                        </p>

                                    </div>
                                `
                                : ""
                        }


                        <div class="order-customer">

                            <strong>
                                Cliente:
                            </strong>

                            ${pedido.nome}

                            <br>

                            <strong>
                                Contacto:
                            </strong>

                            ${pedido.contacto}

                        </div>

                    `;


                    orderItems.appendChild(
                        item
                    );

                }
            );

        }


        const total =
            pedidos.length;


        if (orderCount) {
            orderCount.textContent =
                total;
        }


        if (floatingOrderCount) {
            floatingOrderCount.textContent =
                total;
        }


        document
            .querySelectorAll(".remove-order")
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const index =
                                Number(
                                    button.dataset.index
                                );


                            pedidos.splice(
                                index,
                                1
                            );


                            atualizarPedido();

                        }
                    );

                }
            );

    }


    /* =====================================================
       ABRIR PAINEL DO PEDIDO
    ===================================================== */

    function abrirPedido() {

        if (!orderPanel) {
            return;
        }


        orderPanel.classList.add(
            "active"
        );


        orderPanel.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    /* =====================================================
       FECHAR PAINEL DO PEDIDO
    ===================================================== */

    function fecharPedido() {

        if (!orderPanel) {
            return;
        }


        orderPanel.classList.remove(
            "active"
        );


        orderPanel.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (openOrderPanel) {

        openOrderPanel.addEventListener(
            "click",
            abrirPedido
        );

    }


    if (closeOrderPanel) {

        closeOrderPanel.addEventListener(
            "click",
            fecharPedido
        );

    }


    /* =====================================================
       ENVIAR PEDIDO PARA WHATSAPP
    ===================================================== */

    if (sendOrderWhatsApp) {

        sendOrderWhatsApp.addEventListener(
            "click",
            function () {

                if (pedidos.length === 0) {

                    alert(
                        "Adicione pelo menos um serviço ao pedido."
                    );

                    return;
                }


                let mensagem =
                    "NOVO PEDIDO - RJS INFORMÁTICA E MULTIMÍDIA\n\n";


                pedidos.forEach(
                    function (pedido, index) {

                        mensagem +=
                            "SERVIÇO " +
                            (index + 1) +
                            "\n";


                        mensagem +=
                            "Serviço: " +
                            pedido.servico +
                            "\n";


                        mensagem +=
                            "Quantidade: " +
                            pedido.quantidade +
                            "\n";


                        Object.keys(
                            pedido.detalhes
                        ).forEach(
                            function (chave) {

                                mensagem +=
                                    chave +
                                    ": " +
                                    pedido.detalhes[chave] +
                                    "\n";

                            }
                        );


                        if (pedido.descricao) {

                            mensagem +=
                                "Descrição: " +
                                pedido.descricao +
                                "\n";

                        }


                        mensagem +=
                            "Cliente: " +
                            pedido.nome +
                            "\n";


                        mensagem +=
                            "Contacto: " +
                            pedido.contacto +
                            "\n\n";

                    }
                );


                mensagem +=
                    "Enviado pelo site RJS INFORMÁTICA E MULTIMÍDIA.";


                const url =
                    "https://wa.me/" +
                    ADMIN_WHATSAPP +
                    "?text=" +
                    encodeURIComponent(
                        mensagem
                    );


                window.open(
                    url,
                    "_blank"
                );

            }
        );

    }


    /* =====================================================
       TECLA ESC
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                fecharServico();

                fecharPedido();

            }

        }
    );


    /* =====================================================
       ANIMAÇÕES
    ===================================================== */

    const elementosReveal =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        elementosReveal.forEach(
            function (elemento) {

                observer.observe(
                    elemento
                );

            }
        );

    } else {

        elementosReveal.forEach(
            function (elemento) {

                elemento.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       INICIALIZAÇÃO
    ===================================================== */

    atualizarPedido();

});
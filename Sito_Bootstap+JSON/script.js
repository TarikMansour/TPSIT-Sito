const transport = document.getElementById('transport-container');
const expand = function(){
    transport.id = 'transport-container-expanded';
}
transport.addEventListener('click', expand);
const icon = document.getElementById('icon');
const learnMore = document.getElementById('more');
const open = function(){
    icon.style.display = 'none';
    learnMore.style.display = 'none';
}
transport.addEventListener('click', open);
const explanation = document.getElementById('explanation');
const link = document.getElementById('link');
const change = function(){
    explanation.textContent = "Questo livello fa uso di due protocolli importanti: TCP (Transmission Control Protocol): protocollo connection-oriented ampiamente diffuso che definisce il tipo di trasferimento di dati tra i componenti della rete. UDP (User Datagram Protocol): protocollo connectionless che permette l’invio di datagrammi nelle reti basate su IP."
    link.style.opacity=1;
}
transport.addEventListener('click', change);

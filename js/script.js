const nomeUtente = prompt('Inserisci il tuo nome');
const cognomeUtente = prompt('Inserisci il tuo cognome')
const coloreUtente = prompt('Inserisci il tuo colore preferito')
const utente = nomeUtente + cognomeUtente + coloreUtente + '21';
if(nomeUtente && cognomeUtente && coloreUtente){
    document.getElementById('utente').innerHTML = utente;
}
else
{
    document.getElementById('utente').innerHTML = 'Dati non validi, inserire nuovi dati.'
}
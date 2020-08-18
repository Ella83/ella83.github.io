/*La partita si svolge a turno tra due giocatori.
Ad ogni turno un giocatore tira i dadi finché vuole. Ogni risultato viene aggiunto al punteggio del ROUND.
Se il giocatore corrente ottiene un 1 tutto il suo punteggio ROUND viene azzerato, dopodiché il turno passa automaticamente all'altro giocatore.
Il giocatore può scegliere di conservare il punteggio del ROUND cliccando su HOLD, in questo modo tutto il punteggio attuale verrà aggiunto al punteggio globale. Dopodiché il turno passa all'altro giocatore.
Il primo giocatore che raggiunge un punteggio globale di 100, vince il gioco. 
Questo valore può essere modificato inserendo in FINAL SCORE un qualsiasi numero diverso da 100.*/

const openRulesButtons = document.querySelectorAll('[data-rules-target]');
const closeRulesButtons = document.querySelectorAll('[data-close-popup]');
const overlay = document.getElementById('overlay')

openRulesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rules = document.querySelector(button.dataset.rulesTarget);
    openRules(rules)
  })
})

overlay.addEventListener('click', () => {
  const rules = document.querySelectorAll('.rules.active')
  rules.forEach(rules => {
    closeRules(rules)
  })
})

closeRulesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rules = button.closest('.rules')
    closeRules(rules)
  })
})

function openRules(rules) {
  if (rules == null) return
  rules.classList.add('active')
  overlay.classList.add('active')
}

function closeRules(rules) {
  if (rules == null) return
  rules.classList.remove('active')
  overlay.classList.remove('active')
}





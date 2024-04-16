const sentence = document.getElementById('sentence');
const redact = document.getElementById('redact');
const redacted = document.getElementById('redacted');
const form = document.querySelector('form');
const stats = document.getElementById('stats');
let wordsToRedact, unsulliedText;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(sentence.value);
  const replacement = document.getElementById('replacement').value;
  if (redact.value.length <= 0) alert('Please enter the words to redact');
  if (sentence.value.length <= 0) alert('Please enter the text you\'d like to redact');
  if (redact.value.length > 0) wordsToRedact = redact.value.split(' ');
  if (sentence.value.length > 0) unsulliedText = sentence.value;
let wordsScanned = 0, wordsMatched = 0, charactersMatched = 0;
let redactedText = unsulliedText;
let startTime = Date.now();
wordsToRedact && wordsToRedact.forEach(word => {
  wordsScanned++;
  word = new RegExp(word, 'gi');
  console.log(word);
  redactedText = redactedText.replace(word, (x) => {
    console.log(x, x.length)
    charactersMatched += x.length;
    wordsMatched++
if (replacement === 'asterisks') return '****';
if (replacement === 'underscores') return '____';
if (replacement === 'dashes') return '----';
if (replacement === 'question') return '????';
if (replacement === 'custom') return 'HIDDEN';

  })
}
  );
  let endTime = Date.now();
  let timeTaken = (endTime - startTime) / 1000;
  console.log(redactedText);
  console.log(wordsMatched, wordsScanned, charactersMatched)
  redacted.textContent = redactedText;
  stats.innerHTML = `
  <p>Words scanned: ${wordsScanned}</p>
  <p>Words matched: ${wordsMatched}</p>
  <p>Characters matched: ${charactersMatched}</p>
  <p>Time taken: ${timeTaken} secs</p>
  `
})
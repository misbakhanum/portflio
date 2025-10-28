const projectData = {
  sre: `
    <h2>Voice & Emotion Recognition</h2>
    <p>Real-time Speech Emotion Recognition using MFCC and LSTM/SVM. Integrated with Raspberry Pi & GPS/SMS alerts for safety.</p>
    <ul>
      <li>Accuracy: ~95%</li>
      <li>Tech: Python, Librosa, Scikit-learn, Tensorflow/Keras, RPi</li>
    </ul>
  `,
  retail: `
    <h2>Shop-Trend Insights</h2>
    <p>Retail analytics pipeline from ETL to Power BI dashboards, KPIs, customer segmentation, and advanced reporting.</p>
    <ul>
      <li>Tech: Python, SQL, Power BI, Pandas</li>
    </ul>
  `,
  va: `
    <h2>Browser Voice Assistant</h2>
    <p>Web-based assistant with voice commands for navigation and tasks. Utilizes Web Speech API in JS.</p>
    <ul>
      <li>Tech: JavaScript, Web Speech API</li>
    </ul>
  `
};

function openModal(key){
  document.getElementById('modalContent').innerHTML = projectData[key] || '<p>Details coming soon.</p>';
  document.getElementById('modal').classList.add('open');
}
function closeModal(){
  document.getElementById('modal').classList.remove('open');
}

document.addEventListener('keydown',(e)=>{
  if(e.key==="Escape") closeModal();
});

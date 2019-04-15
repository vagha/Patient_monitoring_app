const diseases = new Map();
diseases.set('Heart Attack', ['pressure in chest', 'tightness in chest', 'nausea', 'heartburn', 'shortness of breath', 'cold sweat', 'fatigue', 'dizziness']);
diseases.set('Stroke', ['numbness', 'confusion', 'trouble seeing', 'trouble walking', 'severe headache']);
diseases.set('Gastritis', ['nausea', 'upset stomach', 'abdominal bloating', 'abdominal pain', 'vomiting', 'indigestion', 'burning stomach']);
diseases.set('H1N1 Flu', ['fever', 'chills', 'cough', 'sore throat', 'stuffy nose', 'red eyes', 'watery eyes', 'body ache', 'headache', 'fatigue', 'diarrhea', 'nausea']);
diseases.set('Cholera', ['watery diarrhea', 'rice-water stools', 'vomiting', 'rapid heart rate', 'loss of skin elasticity', 'dry mucous', 'low blood pressure', 'thirst', 'sleepiness']);
diseases.set('Food Poisoning', ['nausea', 'vomiting', 'bloody diarrhea', 'abdominal pain', 'abdominal cramps', 'fever']);
diseases.set('Tuberculosis', ['coughing for more than 3 weeks', 'chest pain', 'pain with breathing', 'weight loss', 'fatigue', 'fever', 'night sweat', 'chills']);
diseases.set('Encephalitis', ['headache', 'fever', 'aches in muscles', 'joint pain', 'fatigue']);
diseases.set('Appendicitis', ['pain on the right side of the lower abdomen', 'pain that worsens with cough', 'nausea', 'vomiting', 'low fever', 'abdominal bloating']);
diseases.set('Cirrhosis', ['fatigue', 'easy bleading', 'loss of appetite', 'nausea', 'swelling in legs', 'weight loss', 'itchy skin', 'yellow decoloration', 'red pals of the hand']);
diseases.set('Hepatitis A', ['tiredness', 'joint pain', 'muscle pain', 'mild fever', 'loss of appetite', 'pain in the upper-right part of the tummy', 'hives', 'diarrhea']);
diseases.set('Lupus', ['fatigue', 'joint pain', 'rashes', 'fever', 'swollen lymph glands', 'mouth ulcers', 'hair loss', 'migraines', 'chest pain', 'depression', 'memory loss', 'seizures']);
diseases.set('Lyme Disease', ['circular had', 'joint pain', 'joint swelling', 'numbness', 'limb pain', 'facial paralysis', 'heart inflamation']);
diseases.set('Malaria', ['fever', 'headache', 'sweats', 'chills', 'vomiting', 'muscle pain', 'diarrhea', 'unwellness']);

exports.getDiseases = function(req, res) {
    const symptoms = req.body.symptoms;
    const results = [];

    console.log(`symptoms = ${symptoms}`);

    diseases.forEach((value, key) => {
        let count = 0;
        for (symptom of symptoms) {
            if (value.includes(symptom.trim())) {
                count++;
            }
        }

        if (count > 0) {
            if (count < 10) {
                results.push(`0${count}_${key}`);
            } else {
                results.push(`${count}_${key}`);
            }
        }
    });

    console.log(`results = ${results}`);
    res.status(200).json(results.sort().reverse());
}
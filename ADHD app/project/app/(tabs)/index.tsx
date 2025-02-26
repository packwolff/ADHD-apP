import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Define the questions array
const questions = [
  {
    id: 1,
    text: "Fails to give close attention to details or makes careless mistakes in schoolwork.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 2,
    text: "Has difficulty sustaining attention in tasks or play activities.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 3,
    text: "Does not seem to listen when spoken to directly.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 4,
    text: "Does not follow through on instructions and fails to finish schoolwork or chores.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 5,
    text: "Has difficulty organizing tasks and activities.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 6,
    text: "Avoids, dislikes, or is reluctant to engage in tasks that require sustained mental effort.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 7,
    text: "Loses things necessary for tasks or activities.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 8,
    text: "Is easily distracted by extraneous stimuli.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 9,
    text: "Is forgetful in daily activities.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "attention"
  },
  {
    id: 10,
    text: "Fidgets with hands or feet or squirms in seat.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 11,
    text: "Leaves seat when remaining seated is expected.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 12,
    text: "Runs about or climbs excessively in situations where it is inappropriate.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 13,
    text: "Has difficulty playing or engaging in leisure activities quietly.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 14,
    text: "Is on the go or often acts as if driven by a motor",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 15,
    text: "Talks excessively.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 16,
    text: "Blurts out answers before questions have been completed.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 17,
    text: "Has difficulty waiting for their turn.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 18,
    text: "Interrupts or intrudes on others' conversations or games.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "hyperactivity"
  },
  {
    id: 19,
    text: "Argues with adults.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 20,
    text: "Loses temper.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 21,
    text: "Actively defies or refuses to comply with adults' requests or rules.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 22,
    text: "Deliberately annoys people.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 23,
    text: "Blames others for their mistakes or misbehavior.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 24,
    text: "Is touchy or easily annoyed by others.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 25,
    text: "Is angry or resentful.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 26,
    text: "Is spiteful or vindictive.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 27,
    text: "Bullies, threatens, or intimidates others.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 28,
    text: "Initiates physical fights.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 29,
    text: "Lies to obtain goods for favors or to avoid obligations.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 30,
    text: "Is truant from school.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 31,
    text: "Is physically cruel to people.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 32,
    text: "Has stolen items of nontrivial value.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 33,
    text: "Deliberately destroys others' property.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 34,
    text: "Has used a weapon that can cause harm.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 35,
    text: "Has broken into someone else's house, building, or car.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 36,
    text: "Stays out at night without permission.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 37,
    text: "Has run away from home overnight.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 38,
    text: "Sets fires to cause damage.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "behavioral"
  },
  {
    id: 39,
    text: "Is fearful, anxious, or worried.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "emotional"
  },
  {
    id: 40,
    text: "Is afraid to try new things for fear of making mistakes.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "emotional"
  },
  {
    id: 41,
    text: "Feels worthless or inferior.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "emotional"
  },
  {
    id: 42,
    text: "Blames self for problems, feels guilty.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "emotional"
  },
  {
    id: 43,
    text: "Feels lonely, unwanted, or unloved; complains that no one loves them.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "emotional"
  },
  {
    id: 44,
    text: "Is sad, unhappy, or depressed.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "emotional"
  },
  {
    id: 45,
    text: "Is self-conscious or easily embarrassed.",
    options: ["Never", "Sometimes", "Often", "Very Often"],
    category: "emotional"
  }
];

// Organize questions by type
const questionCategories = {
  attention: questions.slice(0, 9),
  hyperactivity: questions.slice(9, 18),
  behavioral: questions.slice(18, 38),
  emotional: questions.slice(38, 45),
};

type TestType = 'full' | 'attention' | 'hyperactivity' | 'behavioral' | 'emotional';

export default function ADHDScreen() {
  const [currentStep, setCurrentStep] = useState<'selection' | 'intro' | 'questions' | 'results'>('selection');
  const [selectedTest, setSelectedTest] = useState<TestType>('full');
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<{
    attention: number;
    hyperactivity: number;
    behavioral: number;
    emotional: number;
  }>({ attention: 0, hyperactivity: 0, behavioral: 0, emotional: 0 });

  const activeQuestions = selectedTest === 'full' 
    ? questions 
    : questionCategories[selectedTest];

  const handleTestSelection = (type: TestType) => {
    setSelectedTest(type);
    setCurrentStep('intro');
    setAnswers({});
    setCurrentQuestionIndex(0);
    setScores({ attention: 0, hyperactivity: 0, behavioral: 0, emotional: 0 });
  };

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
    
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const newScores = {
      attention: 0,
      hyperactivity: 0,
      behavioral: 0,
      emotional: 0
    };

    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question) {
        newScores[question.category] += answerValue;
      }
    });

    setScores(newScores);
    setCurrentStep('results');

    // Check for severe symptoms and show alert
    const categories = selectedTest === 'full' 
      ? ['attention', 'hyperactivity', 'behavioral', 'emotional']
      : [selectedTest];

    const hasSevereSymptoms = categories.some(category => {
      const questionCount = questionCategories[category].length;
      const maxPossibleScore = questionCount * 3;
      const percentage = (newScores[category] / maxPossibleScore) * 100;
      return percentage >= 75;
    });

    if (hasSevereSymptoms) {
      Alert.alert(
        "Important Notice",
        "Based on your responses, you are showing severe symptoms in one or more areas. We strongly recommend consulting a healthcare professional for a comprehensive evaluation.",
        [{ text: "OK", style: "default" }],
        { cancelable: false }
      );
    }
  };

  const getAssessment = (category: string, score: number) => {
    const questionCount = questionCategories[category].length;
    const maxPossibleScore = questionCount * 3; // 3 is the max score per question (Very Often)
    const percentage = (score / maxPossibleScore) * 100;

    if (percentage < 25) {
      return "No significant symptoms";
    } else if (percentage < 50) {
      return "Mild symptoms";
    } else if (percentage < 75) {
      return "Moderate symptoms";
    } else {
      return "Severe symptoms";
    }
  };

  const startScreening = () => {
    setCurrentStep('questions');
  };

  const renderTestSelection = () => (
    <View style={styles.content}>
      <Text style={styles.title}>Choose Your Assessment</Text>
      <Text style={styles.description}>
        Take your time to select the type of assessment that feels right for you:
      </Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => handleTestSelection('full')}>
          <Text style={styles.optionTitle}>Complete Assessment</Text>
          <Text style={styles.optionDescription}>A thorough evaluation covering all aspects</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => handleTestSelection('attention')}>
          <Text style={styles.optionTitle}>Focus & Attention</Text>
          <Text style={styles.optionDescription}>Questions about concentration and attention</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => handleTestSelection('hyperactivity')}>
          <Text style={styles.optionTitle}>Energy & Activity</Text>
          <Text style={styles.optionDescription}>Questions about movement and activity levels</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => handleTestSelection('behavioral')}>
          <Text style={styles.optionTitle}>Daily Behaviors</Text>
          <Text style={styles.optionDescription}>Questions about behavioral patterns</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => handleTestSelection('emotional')}>
          <Text style={styles.optionTitle}>Emotional Well-being</Text>
          <Text style={styles.optionDescription}>Questions about feelings and emotions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderIntro = () => (
    <View style={styles.content}>
      <Text style={styles.title}>ADHD Screening Test</Text>
      <Text style={styles.disclaimer}>
        This screening tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
      </Text>
      <Text style={styles.description}>
        This questionnaire will help identify symptoms that are consistent with ADHD. Please answer each question carefully.
      </Text>
      <TouchableOpacity style={styles.button} onPress={startScreening}>
        <Text style={styles.buttonText}>Start Screening</Text>
      </TouchableOpacity>
    </View>
  );

  const renderQuestion = () => {
    const question = activeQuestions[currentQuestionIndex];
    return (
      <View style={styles.content}>
        <Text style={styles.progress}>Question {currentQuestionIndex + 1} of {activeQuestions.length}</Text>
        <Text style={styles.questionText}>{question.text}</Text>
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                answers[question.id] === index && styles.selectedOption
              ]}
              onPress={() => handleAnswer(question.id, index)}
            >
              <Text style={[
                styles.optionText,
                answers[question.id] === index && styles.selectedOptionText
              ]}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderResults = () => {
    const categories = selectedTest === 'full' 
      ? ['attention', 'hyperactivity', 'behavioral', 'emotional']
      : [selectedTest];

    return (
      <View style={styles.content}>
        <Text style={styles.title}>Assessment Results</Text>
        
        {categories.map(category => (
          <View key={category} style={styles.resultSection}>
            <Text style={styles.categoryTitle}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
            <Text style={styles.resultText}>
              {getAssessment(category, scores[category])}
            </Text>
          </View>
        ))}

        <Text style={styles.disclaimer}>
          Note: This screening tool provides an initial assessment based on your responses. 
          {scores.attention > questionCategories.attention.length * 1.5 || 
           scores.hyperactivity > questionCategories.hyperactivity.length * 1.5 || 
           scores.behavioral > questionCategories.behavioral.length * 1.5 || 
           scores.emotional > questionCategories.emotional.length * 1.5 
            ? "\n\nBased on your responses, it is recommended to consult with a healthcare professional for a comprehensive evaluation."
            : "\n\nYour responses indicate minimal symptoms. However, if you have concerns, consider discussing them with a healthcare provider."}
        </Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            setCurrentStep('selection');
            setAnswers({});
            setCurrentQuestionIndex(0);
            setScores({ attention: 0, hyperactivity: 0, behavioral: 0, emotional: 0 });
          }}
        >
          <Text style={styles.buttonText}>Take Another Test</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {currentStep === 'selection' && renderTestSelection()}
        {currentStep === 'intro' && renderIntro()}
        {currentStep === 'questions' && renderQuestion()}
        {currentStep === 'results' && renderResults()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8', // Softer background color
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 16,
    color: '#2d3748',
    lineHeight: 34,
  },
  disclaimer: {
    fontSize: 15,
    color: '#718096',
    marginBottom: 24,
    fontStyle: 'italic',
    lineHeight: 22,
  },
  description: {
    fontSize: 17,
    color: '#4a5568',
    marginBottom: 28,
    lineHeight: 24,
  },
  progress: {
    fontSize: 15,
    color: '#718096',
    marginBottom: 20,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 20,
    color: '#2d3748',
    marginBottom: 28,
    lineHeight: 30,
    letterSpacing: 0.3,
  },
  optionsContainer: {
    gap: 16,
  },
  optionButton: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  selectedOption: {
    backgroundColor: '#4299e1', // Softer blue
    borderColor: '#4299e1',
  },
  optionText: {
    fontSize: 17,
    color: '#4a5568',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  selectedOptionText: {
    color: '#ffffff',
  },
  optionTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  optionDescription: {
    fontSize: 15,
    color: '#718096',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#4299e1', // Softer blue
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 28,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  resultSection: {
    marginBottom: 24,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: 10,
    letterSpacing: 0.3,
  },
  resultText: {
    fontSize: 17,
    color: '#4a5568',
    lineHeight: 24,
  },
});
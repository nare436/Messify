import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Navbar from './nav';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    q1: '',
    q2: '',
    q3: 'true',
    q4: '',
    q5: 'true',
    q6: '',
    q7: '',
    q8: 'false',
    q9: '',
    q10: '',
    q11: 'false',
    q12: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 'q1',
      type: 'paragraph',
      question: 'How would you rate your overall experience with the mess services? Please provide detailed feedback.',
      placeholder: 'Share your thoughts about the overall mess experience...'
    },
    {
      id: 'q2',
      type: 'paragraph',
      question: 'What improvements would you suggest for the food quality and variety?',
      placeholder: 'Suggest improvements for food quality and variety...'
    },
    {
      id: 'q3',
      type: 'truefalse',
      question: 'The food is served on time according to the scheduled menu.'
    },
    {
      id: 'q4',
      type: 'objective',
      question: 'Which meal do you find most satisfactory?',
      options: ['Breakfast', 'Lunch', 'Dinner', 'Snacks']
    },
    {
      id: 'q5',
      type: 'truefalse',
      question: 'The dining area is clean and well-maintained.'
    },
    {
      id: 'q6',
      type: 'paragraph',
      question: 'How can the mess staff improve their service and hospitality?',
      placeholder: 'Share suggestions about staff service and hospitality...'
    },
    {
      id: 'q7',
      type: 'paragraph',
      question: 'Are there any dietary restrictions or special preferences we should consider?',
      placeholder: 'Mention any dietary restrictions or preferences...'
    },
    {
      id: 'q8',
      type: 'truefalse',
      question: 'The billing and payment process is transparent and hassle-free.'
    },
    {
      id: 'q9',
      type: 'paragraph',
      question: 'What new food items or cuisines would you like to see in the menu?',
      placeholder: 'Suggest new food items or cuisines...'
    },
    {
      id: 'q10',
      type: 'paragraph',
      question: 'How satisfied are you with the hygiene and food safety standards?',
      placeholder: 'Share your feedback on hygiene and food safety...'
    },
    {
      id: 'q11',
      type: 'truefalse',
      question: 'You would recommend this mess to other students.'
    },
    {
      id: 'q12',
      type: 'objective',
      question: 'How often do you face issues with the mess services?',
      options: ['Rarely', 'Sometimes', 'Frequently', 'Very Frequently']
    }
  ];

  const handleChange = (e, questionId) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        q1: '', q2: '', q3: 'true', q4: '', q5: 'true', q6: '', 
        q7: '', q8: 'false', q9: '', q10: '', q11: 'false', q12: ''
      });
    }, 3000);
  };

  return (
    <>
    <div className="min-h-screen py-15 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-400 text-white">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-3xl font-bold">Weekly Feedback Form</h1>
          <p className="text-blue-100 mt-2">Help us improve your mess experience by sharing your valuable feedback</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-900 font-medium">Thank you! Your feedback has been submitted successfully.</p>
          </div>
        )}

        {/* Instructions */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Instructions:</span> Please answer all questions honestly. Your feedback is anonymous and will help us provide better services.
          </p>
        </div>

        {/* Feedback Questions */}
        <div className="space-y-8">
          {questions.map((question, index) => (
            <div key={question.id} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                
                <div className="flex-grow">
                  <label className="text-gray-900 font-medium text-base mb-4 block">
                    {question.question}
                  </label>

                  {/* Paragraph Questions */}
                  {question.type === 'paragraph' && (
                    <textarea
                      value={formData[question.id]}
                      onChange={(e) => handleChange(e, question.id)}
                      placeholder={question.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows="4"
                    />
                  )}

                  {/* True/False Questions */}
                  {question.type === 'truefalse' && (
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value="true"
                          checked={formData[question.id] === 'true'}
                          onChange={(e) => handleChange(e, question.id)}
                          className="w-4 h-4 accent-blue-700"
                        />
                        <span className="text-gray-700 font-medium">True</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value="false"
                          checked={formData[question.id] === 'false'}
                          onChange={(e) => handleChange(e, question.id)}
                          className="w-4 h-4 accent-blue-700"
                        />
                        <span className="text-gray-700 font-medium">False</span>
                      </label>
                    </div>
                  )}

                  {/* Objective Questions */}
                  {question.type === 'objective' && (
                    <div className="space-y-3">
                      {question.options.map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={formData[question.id] === option}
                            onChange={(e) => handleChange(e, question.id)}
                            className="w-4 h-4 accent-blue-700"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-8">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            <Send className="w-5 h-5" />
            Submit Feedback
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
          <p className="text-sm text-gray-600">
            Your feedback is valuable and helps us maintain high standards of service
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
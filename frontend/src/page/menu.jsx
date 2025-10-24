import { Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

export default function WeeklyMenu() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const weeklyMenu = {
    Monday: {
      breakfast: {
        time: '7:00 AM - 9:00 AM',
        items: ['Idli Sambar', 'Coconut Chutney', 'Tea/Coffee']
      },
      lunch: {
        time: '12:00 PM - 2:00 PM',
        items: ['Rice', 'Dal', 'Roti', 'Curd', 'Mixed Veg']
      },
      dinner: {
        time: '7:00 PM - 9:00 PM',
        items: ['Rice', 'Paneer Curry', 'Chapati', 'Salad']
      }
    },
    Tuesday: {
      breakfast: {
        time: '7:00 AM - 9:00 AM',
        items: ['Poha', 'Banana', 'Tea/Coffee']
      },
      lunch: {
        time: '12:00 PM - 2:00 PM',
        items: ['Rice', 'Sambar', 'Roti', 'Pickle', 'Cabbage Curry']
      },
      dinner: {
        time: '7:00 PM - 9:00 PM',
        items: ['Rice', 'Rajma', 'Chapati', 'Raita', 'Papad']
      }
    },
    Wednesday: {
      breakfast: {
        time: '7:00 AM - 9:00 AM',
        items: ['Paratha', 'Aloo Sabzi', 'Curd', 'Tea/Coffee']
      },
      lunch: {
        time: '12:00 PM - 2:00 PM',
        items: ['Rice', 'Dal Fry', 'Roti', 'Gobi Manchurian']
      },
      dinner: {
        time: '7:00 PM - 9:00 PM',
        items: ['Rice', 'Egg Curry', 'Chapati', 'Salad']
      }
    },
    Thursday: {
      breakfast: {
        time: '7:00 AM - 9:00 AM',
        items: ['Upma', 'Coconut Chutney', 'Tea/Coffee']
      },
      lunch: {
        time: '12:00 PM - 2:00 PM',
        items: ['Rice', 'Chole', 'Roti', 'Curd', 'Aloo Fry']
      },
      dinner: {
        time: '7:00 PM - 9:00 PM',
        items: ['Rice', 'Dal Tadka', 'Chapati', 'Mixed Veg', 'Pickle']
      }
    },
    Friday: {
      breakfast: {
        time: '7:00 AM - 9:00 AM',
        items: ['Dosa', 'Sambar', 'Coconut Chutney', 'Tea/Coffee']
      },
      lunch: {
        time: '12:00 PM - 2:00 PM',
        items: ['Rice', 'Dal', 'Roti', 'Paneer Butter Masala', 'Raita']
      },
      dinner: {
        time: '7:00 PM - 9:00 PM',
        items: ['Rice', 'Chicken Curry', 'Chapati', 'Salad']
      }
    },
    Saturday: {
      breakfast: {
        time: '7:00 AM - 9:00 AM',
        items: ['Aloo Puri', 'Halwa', 'Tea/Coffee']
      },
      lunch: {
        time: '12:00 PM - 2:00 PM',
        items: ['Rice', 'Kadhi', 'Roti', 'Bhindi Fry', 'Papad']
      },
      dinner: {
        time: '7:00 PM - 9:00 PM',
        items: ['Veg Biryani', 'Raita', 'Papad', 'Sweet Dish']
      }
    },
    Sunday: {
      breakfast: {
        time: '7:00 AM - 9:00 AM',
        items: ['Bread Pakora', 'Sauce', 'Tea/Coffee']
      },
      lunch: {
        time: '12:00 PM - 2:00 PM',
        items: ['Special Thali', 'Rice', 'Puri', 'Paneer', 'Sweet', 'Curd']
      },
      dinner: {
        time: '7:00 PM - 9:00 PM',
        items: ['Rice', 'Dal Makhani', 'Chapati', 'Mix Veg', 'Salad']
      }
    }
  };

  const currentMenu = weeklyMenu[selectedDay];

  return (
    <div className="min-h-screen py-15 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Weekly Menu</h1>
          </div>
          <p className="text-blue-100">Plan your meals for the week</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Day Selector Tabs */}
        <div className="mb-8 bg-gray-100 rounded-lg p-2 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedDay === day
                    ? 'bg-white text-blue-700 shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {day.substring(0, 3)}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{selectedDay}</h2>
          <p className="text-gray-600 mt-1">Complete menu for the day</p>
        </div>

        {/* Meals Section */}
        <div className="space-y-6">
          
          {/* Breakfast */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Breakfast
              </span>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Clock className="w-4 h-4" />
                <span>{currentMenu.breakfast.time}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentMenu.breakfast.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-800 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Lunch */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Lunch
              </span>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Clock className="w-4 h-4" />
                <span>{currentMenu.lunch.time}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentMenu.lunch.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-800 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dinner */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Dinner
              </span>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Clock className="w-4 h-4" />
                <span>{currentMenu.dinner.time}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentMenu.dinner.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-800 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-10 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Note:</span> Menu items may vary based on availability. For dietary restrictions or special requirements, please contact the mess management.
          </p>
        </div>
      </div>
    </div>
  );
}
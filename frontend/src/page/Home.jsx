import { Calendar, Bell, MessageSquare, Clock, Users, Utensils, TrendingUp, CheckCircle, Star, Check, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentMeal, setCurrentMeal] = useState('breakfast');
    const [mealAttendance, setMealAttendance] = useState({
        breakfast: null,
        lunch: null,
        dinner: null
    });
    const [mealRatings, setMealRatings] = useState({
        breakfast: 0,
        lunch: 0,
        dinner: 0
    });
    const [showRatingSuccess, setShowRatingSuccess] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        // Determine current meal based on time
        const hour = new Date().getHours();
        if (hour >= 7 && hour < 12) setCurrentMeal('breakfast');
        else if (hour >= 12 && hour < 19) setCurrentMeal('lunch');
        else setCurrentMeal('dinner');

        return () => clearInterval(timer);
    }, []);

    const todayMenu = {
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
    };

    const quickStats = [
        {
            icon: <Users className="w-6 h-6" />,
            label: 'Active Members',
            value: '245',
            color: 'bg-blue-50 text-blue-700'
        },
        {
            icon: <Utensils className="w-6 h-6" />,
            label: 'Meals Served Today',
            value: '680',
            color: 'bg-green-50 text-green-700'
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            label: 'Monthly Rating',
            value: '4.5/5',
            color: 'bg-orange-50 text-orange-700'
        }
    ];

    const features = [
        {
            icon: <Calendar className="w-8 h-8 text-blue-700" />,
            title: 'Weekly Menu',
            description: 'View complete meal plans for the entire week',
            link: '/menu'
        },
        {
            icon: <Bell className="w-8 h-8 text-blue-700" />,
            title: 'Notifications',
            description: 'Stay updated with latest announcements',
            link: '/notifications',
            badge: '3 New'
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-blue-700" />,
            title: 'Feedback',
            description: 'Share your suggestions and concerns',
            link: '/feedback'
        }
    ];

    const announcements = [
        {
            title: 'Special Dinner Menu',
            message: 'Festive special menu planned for this Saturday',
            time: '2 hours ago'
        },
        {
            title: 'New Breakfast Options',
            message: 'Continental breakfast items added to the menu',
            time: '1 day ago'
        }
    ];

    const handleAttendance = (meal, attending) => {
        setMealAttendance(prev => ({
            ...prev,
            [meal]: attending
        }));
    };

    const handleRating = (meal, rating) => {
        setMealRatings(prev => ({
            ...prev,
            [meal]: rating
        }));
        setShowRatingSuccess(true);
        setTimeout(() => setShowRatingSuccess(false), 2000);
    };

    const canRateMeal = (meal) => {
        const hour = new Date().getHours();
        if (meal === 'breakfast') return hour >= 9;
        if (meal === 'lunch') return hour >= 14;
        if (meal === 'dinner') return hour >= 21 || hour < 7;
        return false;
    };

    const canMarkAttendance = (meal) => {
        const hour = new Date().getHours();
        if (meal === 'breakfast') return hour >= 5 && hour < 9;
        if (meal === 'lunch') return hour >= 10 && hour < 14;
        if (meal === 'dinner') return hour >= 16 && hour < 21;
        return false;
    };

    const dayName = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
    const dateStr = currentTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className="min-h-screen py-10 bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">Welcome to Mess Management</h1>
                            <p className="text-blue-100 text-lg">Your daily meal companion</p>
                            <div className="mt-4 flex items-center gap-2 text-blue-100">
                                <Clock className="w-5 h-5" />
                                <span>{dayName}, {dateStr}</span>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <p className="text-sm text-blue-100 mb-1">Current Meal Time</p>
                            <p className="text-2xl font-bold capitalize">{currentMeal}</p>
                            <p className="text-sm text-blue-100 mt-1">{todayMenu[currentMeal].time}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Rating Success Message */}
                {showRatingSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg flex items-center gap-3 animate-pulse">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-900 font-medium">Thank you for rating! Your feedback helps us improve.</p>
                    </div>
                )}

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 -mt-6">
                    {quickStats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
                                {stat.icon}
                            </div>
                            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Today's Menu Section */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Today's Menu</h2>
                            <p className="text-gray-600 mt-1">{dayName}'s meal schedule</p>
                        </div>
                        <a href="/menu" className="text-blue-700 font-medium hover:text-blue-800 transition-colors">
                            View Full Week →
                        </a>
                    </div>

                    <div className="space-y-6">
                        {Object.entries(todayMenu).map(([meal, details]) => {
                            const isPastMeal = canRateMeal(meal);
                            const canAttend = canMarkAttendance(meal);
                            const isCurrentMeal = currentMeal === meal;

                            return (
                                <div
                                    key={meal}
                                    className={`border-l-4 p-4 rounded-r-lg transition-all ${isCurrentMeal
                                            ? 'border-blue-700 bg-blue-50'
                                            : 'border-gray-300 bg-gray-50'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className={`px-4 py-1 rounded-full text-sm font-semibold ${isCurrentMeal
                                                    ? 'bg-blue-700 text-white'
                                                    : 'bg-gray-300 text-gray-700'
                                                }`}>
                                                {meal.charAt(0).toUpperCase() + meal.slice(1)}
                                            </span>
                                            {isCurrentMeal && (
                                                <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-medium animate-pulse">
                                                    Now Serving
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span>{details.time}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {details.items.map((item, index) => (
                                            <span
                                                key={index}
                                                className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-800 font-medium"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Attendance Section */}
                                    {/* Attendance Section */}
                                    {canAttend && (
                                        <div className="mb-4 p-3 bg-white rounded-lg border border-gray-200">
                                            {mealAttendance[meal] === null ? (
                                                <>
                                                    <p className="text-sm font-medium text-gray-700 mb-2">Will you attend this meal?</p>
                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={() => handleAttendance(meal, true)}
                                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                        >
                                                            <Check className="w-4 h-4" />
                                                            Yes, I'll attend
                                                        </button>
                                                        <button
                                                            onClick={() => handleAttendance(meal, false)}
                                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                        >
                                                            <X className="w-4 h-4" />
                                                            No, I'll skip
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                    <p className="text-sm text-gray-700">
                                                        Preference submitted: <span className="font-semibold">
                                                            {mealAttendance[meal] ? 'Attending' : 'Skipping'}
                                                        </span> (locked)
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {/* )} */}

                                    {/* Rating Section */}
                                    {isPastMeal && (
                                        <div className="p-3 bg-white rounded-lg border border-gray-200">
                                            <p className="text-sm font-medium text-gray-700 mb-2">
                                                How was your {meal}? Rate out of 5 stars
                                            </p>
                                            <div className="flex items-center gap-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        onClick={() => handleRating(meal, star)}
                                                        className="transition-transform hover:scale-110"
                                                    >
                                                        <Star
                                                            className={`w-7 h-7 ${star <= mealRatings[meal]
                                                                    ? 'fill-yellow-400 text-yellow-400'
                                                                    : 'text-gray-300'
                                                                }`}
                                                        />
                                                    </button>
                                                ))}
                                                {mealRatings[meal] > 0 && (
                                                    <span className="ml-2 text-sm font-medium text-gray-700">
                                                        {mealRatings[meal]} / 5
                                                    </span>
                                                )}
                                            </div>
                                            {mealRatings[meal] > 0 && (
                                                <p className="text-xs text-green-600 mt-2">
                                                    ✓ Thank you for rating this meal!
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg p-8 text-center text-white">
                    <h2 className="text-2xl font-bold mb-2">Have Suggestions?</h2>
                    <p className="text-blue-100 mb-4">Help us improve your mess experience by sharing your feedback</p>
                    <a
                        href="/feedback"
                        className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                    >
                        Submit Feedback
                    </a>
                </div>

            </div>
        </div>
    );
}
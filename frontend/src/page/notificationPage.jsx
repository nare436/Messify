import { Bell, Clock, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'menu',
      title: 'Menu Update - Weekly Change',
      message: 'The menu for next week has been updated. Please check the menu section for changes in breakfast and dinner items.',
      timestamp: '2025-10-20 10:30 AM',
      icon: 'menu',
      read: false
    },
    {
      id: 2,
      type: 'announcement',
      title: 'Important: Maintenance Schedule',
      message: 'Mess will be closed on October 25th for maintenance and cleaning. Alternative arrangements will be provided.',
      timestamp: '2025-10-19 03:15 PM',
      icon: 'alert',
      read: false
    },
    {
      id: 3,
      type: 'news',
      title: 'New Breakfast Items Added',
      message: 'We are excited to introduce new breakfast options including continental breakfast and fresh smoothies.',
      timestamp: '2025-10-18 09:45 AM',
      icon: 'check',
      read: true
    },
    {
      id: 4,
      type: 'menu',
      title: 'Special Dinner Menu - Diwali Celebration',
      message: 'Special festive menu planned for Diwali. Traditional sweets and special dishes will be served.',
      timestamp: '2025-10-17 02:20 PM',
      icon: 'menu',
      read: true
    },
    {
      id: 5,
      type: 'announcement',
      title: 'Feedback Form Available',
      message: 'Please share your feedback about the mess services. Your suggestions help us improve the quality of food and services.',
      timestamp: '2025-10-16 11:00 AM',
      icon: 'info',
      read: true
    },
    {
      id: 6,
      type: 'news',
      title: 'Monthly Billing Updated',
      message: 'Your monthly mess bill for October has been processed. Check your account for details.',
      timestamp: '2025-10-15 04:30 PM',
      icon: 'check',
      read: true
    }
  ]);

  // Mark all notifications as read when page opens
  useEffect(() => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
  }, []);

  const getIcon = (type) => {
    switch(type) {
      case 'menu':
        return <Bell className="w-5 h-5 text-blue-600" />;
      case 'alert':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'check':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'info':
        return <Info className="w-5 h-5 text-orange-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-white py-15">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white">
        <div className="max-w-5xl mx-auto py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Notifications</h1>
              <p className="text-blue-100 mt-2">Stay updated with mess announcements and menu changes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`border rounded-lg p-6 transition-all duration-200 ${
                notification.read
                  ? 'bg-white border-gray-200 hover:shadow-md'
                  : 'bg-blue-50 border-blue-300 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 pt-1">
                  {getIcon(notification.icon)}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {notification.title}
                      </h3>
                      <p className="text-gray-700 mt-1 leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="flex-shrink-0 ml-4">
                        <span className="inline-block w-3 h-3 bg-blue-600 rounded-full"></span>
                      </div>
                    )}
                  </div>

                  {/* Timestamp */}
                  <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {notification.timestamp}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-10 p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
          <p className="text-sm text-gray-600">
            All notifications are displayed in reverse chronological order (newest first)
          </p>
        </div>
      </div>
    </div>
  );
}
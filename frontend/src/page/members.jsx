import React, { useState } from 'react';
import { Users, Shield, Briefcase, ArrowBigRightDashIcon } from 'lucide-react';

export default function MessMembersDirectory() {
  const [filter, setFilter] = useState('all');

  const members = [
    {
      id: 1,
      name: 'Narendra Prajapat',
      regNo: '20244110',
      branch: 'ECE',
      role: 'Manager(head)',
      img: './src/assets/narenda.jpeg'
    },
    {
      id: 2,
      name: 'Prav Kalyani',
      regNo: '20244511',
      branch: 'ECE',
      role: 'secretary',
      img: '../assets/demo.jpg'
    },
    {
      id: 3,
      name: 'Arun Patel',
      regNo: '20246087',
      branch: 'ME',
      role: 'member',
      img: './assets/demo.jpg'
    },
    {
      id: 4,
      name: 'Kapish Gupta',
      regNo: '20245056',
      branch: 'Civil',
      role: 'member',
      img: './assets/demo.jpg'

    },
    {
      id: 5,
      name: 'Yatharth singh',
      regNo: '20244180',
      branch: 'ECE',
      role: 'secretary',
      img: './assets/demo.jpg'

    },
    {
      id: 6,
      name: 'Anjani Verma',
      regNo: '20243012',
      branch: 'CSE',
      role: 'member',
      img: './assets/demo.jpg'

    },
    {
      id: 7,
      name: 'Parth Kishan',
      regNo: '20244123',
      branch: 'ME',
      role: 'manager',
      img: './assets/demo.jpg'

    },
    {
      id: 8,
      name: 'Vansh Pandey',
      regNo: '20244121',
      branch: 'ECE',
      role: 'member',
      img: './assets/demo.jpg'

    },
  ];

  const filtered = filter === 'all' ? members : members.filter(m => m.role === filter);

  const getRoleColor = (role) => {
    switch(role) {
      case 'manager':
        return { bg: '#10b981', light: '#d1fae5', text: '#065f46' };
      case 'secretary':
        return { bg: '#f59e0b', light: '#fef3c7', text: '#78350f' };
      case 'member':
        return { bg: '#3b82f6', light: '#dbeafe', text: '#1e3a8a' };
      default:
        return { bg: '#6b7280', light: '#f3f4f6', text: '#111827' };
    }
  };

  const getRoleIcon = (role) => {
    switch(role) {
      case 'manager':
        return <Briefcase size={14} />;
      case 'secretary':
        return <Shield size={14} />;
      case 'member':
        return <Users size={14} />;
      default:
        return <ArrowBigRightDashIcon size={14}/>;
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">Mess Members Directory</h1>
          <p className="text-gray-500 text-lg">Meet our team members and staff</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Members
          </button>
          <button
            onClick={() => setFilter('manager')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === 'manager'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Briefcase size={16} /> Managers
          </button>
          <button
            onClick={() => setFilter('secretary')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === 'secretary'
                ? 'bg-amber-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Shield size={16} /> Secretaries
          </button>
          <button
            onClick={() => setFilter('member')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              filter === 'member'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Users size={16} /> Members
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((member) => {
            const colors = getRoleColor(member.role);
            return (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105 transform"
              >
                {/* Avatar Section */}
                <div className="pt-6 pb-4 px-4 flex justify-center">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-md"
                    style={{ backgroundColor: colors.bg }}
                  >
                    {member.img}
                  </div>
                </div>

                {/* Name Section */}
                <div className="text-center px-4 pb-2">
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                </div>

                {/* Role Badge */}
                <div className="flex justify-center pb-4 px-4">
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase flex items-center gap-1 inline-flex"
                    style={{
                      backgroundColor: colors.light,
                      color: colors.text
                    }}
                  >
                    {getRoleIcon(member.role)}
                    {member.role}
                  </div>
                </div>

                {/* Details Section */}
                <div
                  className="px-4 py-3"
                  style={{ backgroundColor: colors.light }}
                >
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase">Reg. No.</p>
                    <p className="text-sm font-bold text-gray-800">{member.regNo}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Branch</p>
                    <p className="text-sm font-bold text-gray-800">{member.branch}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No members found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
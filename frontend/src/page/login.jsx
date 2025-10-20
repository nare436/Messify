import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Key, User } from 'lucide-react';
import Navbar from './nav';
export default function AuthSystem() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: 'user',
    specialKey: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const SPECIAL_KEYS = {
    admin: 'ADMIN2024KEY',
    manager: 'MANAGER2024KEY',
    contractor: 'CONTRACTOR2024KEY'
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@mnnit\.ac\.in$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email must be from @mnnit.ac.in domain';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      if (formData.role !== 'user') {
        if (!formData.specialKey) {
          newErrors.specialKey = 'Special key is required for this role';
        } else if (formData.specialKey !== SPECIAL_KEYS[formData.role]) {
          newErrors.specialKey = 'Invalid special key for selected role';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (validateForm()) {
      if (isLogin) {
        setMessage('Login successful! Welcome back.');
      } else {
        setMessage(`Registration successful! Account created as ${formData.role}.`);
      }

      setTimeout(() => {
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
          name: '',
          role: 'user',
          specialKey: ''
        });
        setMessage('');
      }, 2000);
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!formData.email) {
      setErrors({ email: 'Please enter your email' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Email must be from @mnnit.ac.in domain' });
      return;
    }
    setMessage('Password reset link sent to your email!');
    setTimeout(() => {
      setShowForgotPassword(false);
      setMessage('');
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (showForgotPassword) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-20">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Forgot Password</h2>
              <p className="text-gray-600 mt-2">Enter your MNNIT email to reset</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@mnnit.ac.in"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {message && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                  {message}
                </div>
              )}

              <button
                onClick={handleForgotPassword}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-lg"
              >
                Send Reset Link
              </button>

              <button
                onClick={() => setShowForgotPassword(false)}
                className="w-full text-blue-600 hover:text-blue-700 font-medium"
              >
                Back to Login,
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-20">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">MNNIT Portal</h1>
            <p className="text-gray-600">Access your institutional account</p>
          </div>

          <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => {
                setIsLogin(true);
                setErrors({});
                setMessage('');
              }}
              className={`flex-1 py-2 rounded-md font-semibold transition ${isLogin ? 'bg-white text-blue-600 shadow' : 'text-gray-600'
                }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setErrors({});
                setMessage('');
              }}
              className={`flex-1 py-2 rounded-md font-semibold transition ${!isLogin ? 'bg-white text-blue-600 shadow' : 'text-gray-600'
                }`}
            >
              Register
            </button>
          </div>

          <div className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                MNNIT Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="yourname@mnnit.ac.in"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {!isLogin && (
              <>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Account Type
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="user">Regular User</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="contractor">Contractor</option>
                  </select>
                </div>

                {formData.role !== 'user' && (
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Special Access Key
                    </label>
                    <div className="relative">
                      <Key className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="password"
                        name="specialKey"
                        value={formData.specialKey}
                        onChange={handleInputChange}
                        placeholder={`Enter ${formData.role} access key`}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                    {errors.specialKey && (
                      <p className="text-red-500 text-sm mt-1">{errors.specialKey}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Contact your administrator to obtain the access key
                    </p>
                  </div>
                )}
              </>
            )}

            {message && (
              <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                {message}
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition duration-200 shadow-lg"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </div>

          {isLogin && (
            <button
              onClick={() => setShowForgotPassword(true)}
              className="w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Forgot Password?
            </button>
          )}

          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setMessage('');
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              {isLogin ? 'Register here' : 'Login here'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
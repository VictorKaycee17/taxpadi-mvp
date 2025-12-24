import React, { useState } from 'react';

const AuthWidget = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for authentication logic
        console.log(isLogin ? 'Logging in' : 'Signing up', { email, password });
        if (onLogin) onLogin();
    };

    return (
        <div className="w-full max-w-md mx-auto mt-12 mb-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 animate-fade-in-up">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
                    {isLogin ? 'Welcome Back' : 'Join TaxGee Pro'}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                    {isLogin
                        ? 'Access your professional tax dashboard'
                        : 'Upgrade your tax capability today'}
                </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-900/50 p-1 rounded-lg flex mb-6">
                <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${isLogin
                        ? 'bg-white dark:bg-gray-800 text-primary shadow-sm'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                        }`}
                >
                    Sign In
                </button>
                <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${!isLogin
                        ? 'bg-white dark:bg-gray-800 text-primary shadow-sm'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                        }`}
                >
                    Sign Up
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                        placeholder="••••••••"
                    />
                </div>

                {!isLogin && (
                    <div className="flex items-center">
                        <input
                            id="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="terms" className="ml-2 block text-xs text-gray-500 dark:text-gray-400">
                            I agree to the{' '}
                            <a href="#" className="text-primary hover:underline">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-primary hover:underline">
                                Privacy Policy
                            </a>
                        </label>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-primary hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-95"
                >
                    {isLogin ? 'Sign In' : 'Create Pro Account'}
                </button>
            </form>

            <div className="mt-6 text-center">
                <a
                    href="#"
                    className="text-xs text-gray-400 hover:text-primary transition-colors duration-200"
                >
                    {isLogin ? 'Forgot your password?' : 'Already have an account? Sign In'}
                </a>
            </div>
        </div>
    );
};

export default AuthWidget;

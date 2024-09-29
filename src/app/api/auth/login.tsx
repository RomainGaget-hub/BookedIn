import { signIn } from 'next-auth/react';

const Login = () => {
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        const password = form.password.value;
        await signIn('credentials', { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <input name="email" type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" required />
                <input name="password" type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" required />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
            </form>
        </div>
    );
};

export default Login;

// 'use client'
// import { FaUser, FaLock } from 'react-icons/fa';
// import { useState } from 'react';
// import Link from 'next/link';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState(''); // For role selection (Entrepreneur/Investor)
//   const [userData, setUserData] = useState<{ name: string; role: string } | null>(null);

//   // Sample mock users
//   const users = [
//     { id: 1, name: 'Alice', email: 'alice@business.com', password: '1234', role: 'Entrepreneur' },
//     { id: 2, name: 'Bob', email: 'bob@business.com', password: '1234', role: 'Investor' },
//   ];

//   // Handle login
//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     const user = users.find((user) => user.email === email && user.password === password && user.role === role);
//     if (user) {
//       setUserData({ name: user.name, role: user.role });
//     } else {
//       alert('Invalid credentials or role');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-blue-950 flex items-center justify-center">
//       <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden max-h-screen">
//         {/* Left Side - Form Section */}
//         <div className="w-full md:w-1/2 p-8 space-y-6">
//           {/* Green Bar with Studio Branding */}
//           <div className="flex items-center space-x-2 mb-4">
//             <div className="text-blue-900 text-4xl font-bold border-l-10 border-blue-950 h-14">
//               <h1>Business Nexus</h1>
//               <p className="text-blue-950 text-xs">Where Opportunities Meet Innovation</p>
//             </div>
//           </div>

//           {userData ? (
//             // If user is logged in, show their name and role
//             <div>
//               <h2 className="text-2xl font-semibold text-blue-800">Welcome {userData.name}</h2>
//               <p className="text-gray-600">Your role is: {userData.role}</p>
//             </div>
//           ) : (
//             <>
//               <h2 className="text-2xl font-semibold text-blue-800">Welcome back</h2>
//               <p className="text-gray-600">Please log in to your account:</p>

//               {/* Login Form */}
//               <form className="space-y-6" onSubmit={handleLogin}>
//                 {/* Email Input */}
//                 <div className="flex items-center border-b-2 border-gray-300 py-2">
//                   <FaUser className="text-gray-500 mr-3" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email Address"
//                     className="w-full bg-transparent border-none outline-none text-lg placeholder-gray-500"
//                   />
//                 </div>

//                 {/* Password Input */}
//                 <div className="flex items-center border-b-2 border-gray-300 py-2">
//                   <FaLock className="text-gray-500 mr-3" />
//                   <input
//                     type="password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                     className="w-full bg-transparent border-none outline-none text-lg placeholder-gray-500"
//                   />
//                 </div>

//                 {/* Role Selection */}
//                 <div className="flex items-center border-b-2 border-gray-300 py-2">
//                   <select
//                     name="role"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                     className="w-full bg-transparent border-none outline-none text-lg text-gray-500"
//                   >
//                     <option value="">Select your role</option>
//                     <option value="Entrepreneur">Entrepreneur</option>
//                     <option value="Investor">Investor</option>
//                   </select>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <input type="checkbox" id="remember" className="mr-2" />
//                     <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
//                   </div>
//                   <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
//                 </div>

//                 {/* Login and Sign Up Buttons side by side */}
//                 <div className="space-y-2 flex gap-4">
//                   <button
//                     type="submit"
//                     className="w-full py-2 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 cursor-pointer transition"
//                   >
//                     LOGIN
//                   </button>
//                   <Link href="/register">
                    
//                       <button
//                         type="button"
//                         className="w-full py-2 bg-white text-blue-600 text-lg rounded-full border-2 border-blue-600 hover:bg-blue-50 cursor-pointer transition"
//                       >
//                         SIGN UP
//                       </button>
                    
//                   </Link>
//                 </div>
//               </form>
//             </>
//           )}
//         </div>

//         {/* Right Side - Background Image Section */}
//         <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/image/login-pg.png")' }}></div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

'use client';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';  // Import the useRouter hook for redirection

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [userData, setUserData] = useState<{ name: string; role: string } | null>(null);
  const router = useRouter();  // Initialize useRouter hook

  // Sample mock users
  const users = [
    { id: 1, name: 'Alice', email: 'aamirsafa9@gmail.com', password: '1234', role: 'Entrepreneur' },
    { id: 2, name: 'Bob', email: 'aamirsafa134@gmail.com', password: '1234', role: 'Investor' },
  ];

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password && user.role === role);
    if (user) {
      // Save user data to localStorage
      localStorage.setItem('userData', JSON.stringify({ name: user.name, role: user.role }));

      // Redirect based on role
      if (user.role === 'Entrepreneur') {
        router.push('/dashboard/entrepreneur');  // Redirect to Entrepreneur Dashboard
      } else {
        router.push('/dashboard/investor');  // Redirect to Investor Dashboard
      }
    } else {
      alert('Invalid credentials or role');
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden max-h-screen">
        {/* Left Side - Form Section */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          {/* Green Bar with Studio Branding */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-blue-900 text-4xl font-bold border-l-10 border-blue-950 h-14">
              <h1>Business Nexus</h1>
              <p className="text-blue-950 text-xs">Where Opportunities Meet Innovation</p>
            </div>
          </div>

          {userData ? (
            // If user is logged in, show their name and role
            <div>
              <h2 className="text-2xl font-semibold text-blue-800">Welcome {userData.name}</h2>
              <p className="text-gray-600">Your role is: {userData.role}</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-blue-800">Welcome back</h2>
              <p className="text-gray-600">Please log in to your account:</p>

              {/* Login Form */}
              <form className="space-y-6" onSubmit={handleLogin}>
                {/* Email Input */}
                <div className="flex items-center border-b-2 border-gray-300 py-2">
                  <FaUser className="text-gray-500 mr-3" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-transparent border-none outline-none text-lg placeholder-gray-500"
                  />
                </div>

                {/* Password Input */}
                <div className="flex items-center border-b-2 border-gray-300 py-2">
                  <FaLock className="text-gray-500 mr-3" />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full bg-transparent border-none outline-none text-lg placeholder-gray-500"
                  />
                </div>

                {/* Role Selection */}
                <div className="flex items-center border-b-2 border-gray-300 py-2">
                  <select
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-lg text-gray-500"
                  >
                    <option value="">Select your role</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Investor">Investor</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                </div>

                {/* Login and Sign Up Buttons side by side */}
                <div className="space-y-2 flex gap-4">
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 cursor-pointer transition"
                  >
                    LOGIN
                  </button>
                  <Link href="/register">
                    <button
                      type="button"
                      className="w-full py-2 bg-white text-blue-600 text-lg rounded-full border-2 border-blue-600 hover:bg-blue-50 cursor-pointer transition"
                    >
                      SIGN UP
                    </button>
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Right Side - Background Image Section */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("/image/login-pg.png")' }}></div>
      </div>
    </div>
  );
};

export default LoginForm;
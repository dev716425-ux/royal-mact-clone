import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RoyalLoginFormProps {
  onLoginSuccess: () => void;
}

const RoyalLoginForm = ({ onLoginSuccess }: RoyalLoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check credentials
    if (username === 'ila14' && password === '1414') {
      toast({
        title: "เข้าสู่ระบบสำเร็จ",
        description: "ยินดีต้อนรับสู่ระบบจัดการ Royal",
      });
      onLoginSuccess();
    } else {
      toast({
        title: "เข้าสู่ระบบล้มเหลว",
        description: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        variant: "destructive",
      });
    }
  };

  const handleLineAdd = () => {
    toast({
      title: "LINE ADD",
      description: "เปิดการเชื่อมต่อ LINE",
    });
  };

  const handleDesktop = () => {
    toast({
      title: "DESKTOP",
      description: "เปิดเวอร์ชั่นเดสก์ท็อป",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 rounded-t-lg p-3 sm:p-4 text-center shadow-lg">
          <div className="flex items-center justify-center gap-2 text-white font-bold">
            <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-lg sm:text-xl">ROYAL77</span>
          </div>
          <div className="text-white text-xs sm:text-sm font-medium mt-1">
            AGENT MANAGEMENT SYSTEM
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-b-lg p-4 sm:p-6 shadow-lg">
          <form onSubmit={handleLogin} className="space-y-3 sm:space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <Input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-10 sm:h-12 text-sm sm:text-base border-gray-300 rounded-lg px-3 sm:px-4 focus:border-cyan-500 focus:ring-cyan-500"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 sm:h-12 text-sm sm:text-base border-gray-300 rounded-lg px-3 sm:px-4 pr-10 sm:pr-12 focus:border-cyan-500 focus:ring-cyan-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 sm:right-3 top-8 sm:top-9 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-10 sm:h-12 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold text-sm sm:text-base rounded-lg shadow-lg"
            >
              LOGIN
            </Button>
          </form>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
            <Button
              onClick={handleLineAdd}
              className="flex-1 h-9 sm:h-10 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-xs sm:text-sm"
            >
              📱 LINE ADD
            </Button>
            <Button
              onClick={handleDesktop}
              className="flex-1 h-9 sm:h-10 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg text-xs sm:text-sm"
            >
              🖥️ DESKTOP
            </Button>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-4 sm:mt-6 text-gray-500 text-xs sm:text-sm">
            ROYAL77 AGENT SYSTEM v2.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalLoginForm;
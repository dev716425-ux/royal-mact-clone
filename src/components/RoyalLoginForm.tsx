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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="bg-royal-teal rounded-t-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white font-medium">
            <Globe className="h-5 w-5" />
            <span>Royal Manage System</span>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-b-lg p-6 shadow-lg">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Input */}
            <div>
              <Input
                type="text"
                placeholder="管理帳號"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-base border-royal-gray rounded-lg px-4"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="管理密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base border-royal-gray rounded-lg px-4 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-royal-text-gray hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-royal-coral hover:bg-royal-coral/90 text-white font-medium text-base rounded-lg"
            >
              登入
            </Button>
          </form>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <Button
              onClick={handleLineAdd}
              className="flex-1 h-10 bg-royal-green hover:bg-royal-green/90 text-white font-medium rounded-full text-sm"
            >
              📱 LINE ADD
            </Button>
            <Button
              onClick={handleDesktop}
              className="flex-1 h-10 bg-royal-dark-gray hover:bg-royal-dark-gray/90 text-white font-medium rounded-full text-sm"
            >
              🖥️ DESKTOP
            </Button>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-6 text-royal-text-gray text-sm">
            K8SPRD20250804-01-TH
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalLoginForm;
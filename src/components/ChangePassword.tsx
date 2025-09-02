import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="shadow-sm border">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg font-medium text-gray-800">เปลี่ยนรหัสผ่าน</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-4">
          {/* Old Password */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">รหัสผ่านเดิม</label>
            <div className="relative">
              <Input
                type={showOldPassword ? "text" : "password"}
                placeholder="กรุณากรอกรหัสผ่านเดิมของคุณ"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="h-9 sm:h-10 text-xs sm:text-sm border-gray-300 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showOldPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">รหัสผ่านใหม่</label>
            <div className="relative">
              <Input
                type={showNewPassword ? "text" : "password"}
                placeholder="ความยาว 4 - 8 หลา"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="h-9 sm:h-10 text-xs sm:text-sm border-gray-300 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              รหัสผ่านต้องมีความยาวอย่างน้อย 4 ตัวอักษร และไม่เกิน 8 ตัวอักษร รหัสผ่านต้องประกอบด้วยตัวเลข (0-9) และอักษรตัวพิมพ์ใหญ่และตัวพิมพ์เล็กเท่านั้น
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่าน</label>
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="ยืนยันรหัสผ่าน"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-9 sm:h-10 text-xs sm:text-sm border-gray-300 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <Button className="w-full bg-gray-400 hover:bg-gray-500 text-white h-9 sm:h-10 text-xs sm:text-sm">
            แน่นอน
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChangePassword;

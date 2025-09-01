import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  Users, 
  BarChart3, 
  FileText, 
  Settings, 
  ChevronDown,
  Menu,
  LogOut
} from 'lucide-react';

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLogout = () => {
    window.location.reload();
  };

  const menuItems = [
    { id: 'profile', label: 'เปลี่ยนรหัสผ่าน' },
    { id: 'reports', label: 'รายละเอียดเกมส์รายวัน' },
    { id: 'manage', label: 'การจัดการโปรโมชั่น' },
    { id: 'system', label: 'ปรับการรวม' },
    { id: 'agents', label: 'ตัวแทนทั่วไป' },
    { id: 'members', label: 'ตัวแทน' },
    { id: 'stats', label: 'สมาชิก' },
    { id: 'records', label: 'บันทึกเกม' },
    { id: 'transactions', label: 'บันทึกการประจำคาสิ่ง' },
    { id: 'winloss', label: 'รายงานสลิด' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header */}
      <div className="bg-royal-teal text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white hover:bg-white/20"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Home className="h-5 w-5" />
          <span className="font-medium">0.0000</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>ila14</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            className="text-white hover:bg-white/20"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className={`flex-1 ${sidebarCollapsed ? '' : 'mr-80'} transition-all duration-300`}>
          {/* Dashboard Cards */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-royal-teal to-royal-teal-dark text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">ตัวแทนทั่วไป</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-end">
                  <Users className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-royal-green to-emerald-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">สมาชิก</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-end">
                  <Users className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">รายงานการชนะ/แพ้</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-end">
                  <BarChart3 className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">บันทึกการเดิมเงิน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-end">
                  <FileText className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Area */}
          <div className="p-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-medium mb-4">การกรอกเงินค่าธรรมเนียมตัวแทนทั่วไป</h2>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="bg-royal-teal text-white border-royal-teal hover:bg-royal-teal/90">
                    เติมเงิน
                  </Button>
                  <Button variant="outline" size="sm">
                    ตรวจสอบ
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      บัญชีผู้ตัวแทนทั่วไป/ยอดคงเหลือปัจจุบัน
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="i5a16 / 0.0000" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="i5a16">i5a16 / 0.0000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      จำนวน
                    </label>
                    <Input 
                      type="number" 
                      placeholder="0"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      รหัสผ่าน 💳
                    </label>
                    <Input 
                      type="password" 
                      placeholder="กรุณากรอกรหัสผ่านในการยืนยันรายการ"
                      className="w-full"
                    />
                  </div>

                  <Button 
                    className="w-full bg-gray-400 hover:bg-gray-500 text-white"
                    disabled
                  >
                    แน่นอน
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className={`fixed right-0 top-16 h-full w-80 bg-royal-teal text-white transform transition-transform duration-300 ${sidebarCollapsed ? 'translate-x-full' : 'translate-x-0'} overflow-y-auto`}>
          <div className="p-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.id}>
                <Button
                  variant="ghost"
                  className="w-full justify-between text-white hover:bg-white/20 py-3"
                  onClick={() => setSelectedTab(item.id)}
                >
                  <span className="text-left">{item.label}</span>
                  {(index === 4 || index === 7 || index === 8) && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                {index === 3 && <div className="border-t border-white/20 my-2" />}
              </div>
            ))}
            
            <div className="mt-6 space-y-2">
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white py-3">
                📱 เอลซี่ A พิมพ์
              </Button>
              <Button className="w-full bg-royal-dark-gray hover:bg-royal-dark-gray/90 text-white py-3">
                ออกจากระบบ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;